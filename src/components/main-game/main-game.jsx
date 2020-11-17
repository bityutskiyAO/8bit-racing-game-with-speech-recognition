import React from 'react'
import * as PIXI from 'pixi.js'
import {gameCar, enemyCar, road} from '../../assets/images'
import {Sprite, TextureCache} from "../../pixi-aliases"
import {ONCOMING_ENEMY_CAR, OFFCOMING_ENEMY_CAR, MAIN_GAME_CAR} from "../../constants"
import {GameOver, GameStatusBar} from ".."
import {GameContext} from "../../gameContext"

import './style.scss'

const initialState = {
    isCrashing: false,
    app: new PIXI.Application({
        width: 800,
        height:  document.documentElement.clientHeight,
        antialias: true,
        transparent: true,
        resolution: 1
    }),
    gameCar: null,
    enemyCars: null,
    currentRoad: null,
    topRoad: null,
    stopTimer: false,
    gameDuration: '',
    gameReward: 0,
    isNeuronalNetworkEnable: false,
    isNeuronalNetworkLoaded: false,
    pauseSpeechRecognition: false,
    isStartWindowShown: true

}

class MainGame extends React.Component {
    /**
     * Инициаализация рабочего окна
     */
    constructor(props) {
        super(props)
        this.rootContainerRef = React.createRef()
        this.state = initialState
        this.xAxisOffset = 0
        this.enemyCarsId = 0
    }

    /**
     * Заагрузка картинок, инициализация game-поля
     */
    componentDidMount() {
        this.rootContainerRef.current.appendChild(this.state.app.view)
        this.state.app.loader
            .add("gameCar", gameCar)
            .add("enemyCar", enemyCar)
            .add("road", road)
            .load(this.setup)
    }

    /**
     * Начаальные настроки для игры
     * Создание игровых объектов gameCarSprite, enemyCarSprite, roadSprite
     * Установка лисенера за игровыми действиями app.ticker.add(...)
     */
    setup = () => {
        const { app } = this.state

        let gameCarSprite = this.createCarSprite(MAIN_GAME_CAR, 'gameCar')
        let enemyCarSprite = this.createCarSprite(ONCOMING_ENEMY_CAR, 'enemyCar')

        let road = TextureCache["road"]
        let roadSprite = new Sprite(road)
        roadSprite.width = app.view.width
        roadSprite.height = app.view.height

        this.intervalId = this.startEnemyCreation()

        app.stage.addChild(roadSprite)
        app.stage.addChild(gameCarSprite)
        app.stage.addChild(enemyCarSprite)

        this.setState({
            enemyCars: [{id:  this.enemyCarsId, enemy: enemyCarSprite, direction: 'front'}],
            gameCar: gameCarSprite,
            currentRoad: roadSprite
        })

        app.ticker.add(delta => this.gameLoop(delta))
    }

    /**
     * Вычисление расположения машины относительно игрового поля
     *
     * @returns {number}
     */
    calcRandomPosition = () => {
        return Math.round(Math.random())
    }

    /**
     * Создание нового спрайта автомобиля
     *
     * @param {string} carDirection - встречаня или попутная
     * @param {string} carType - игровая или вражеская машина
     * @returns {PIXI.Sprite}
     */
    createCarSprite = (carDirection, carType) => {
        const gameField = this.state.app.view

        let gameCar = TextureCache[carType]
        let gameCarSprite = new Sprite(gameCar)
        gameCarSprite.vx = 0
        gameCarSprite.vy = 0
        gameCarSprite.width = 150
        gameCarSprite.height = 200

        switch (carDirection) {
            case MAIN_GAME_CAR: {
                gameCarSprite.rotation = Math.PI
                gameCarSprite.position.set(gameField.width - gameField.width / 4 + gameCarSprite.width / 2 + 35, gameField.height - 50)
                break
            }
            case OFFCOMING_ENEMY_CAR: {
                gameCarSprite.rotation = Math.PI
                const carOffset = this.calcRandomPosition() ? 35 : -120
                gameCarSprite.position.set(gameField.width - gameField.width / 4 + gameCarSprite.width / 2 + carOffset, -gameCarSprite.height)
                break
            }
            case ONCOMING_ENEMY_CAR: {
                const carOffset = this.calcRandomPosition() ? 120 : -35
                gameCarSprite.position.set(gameField.width / 4 - gameCarSprite.width / 2 + carOffset, -gameCarSprite.height)
                break
            }
        }
        return gameCarSprite
    }

    createNewRoad = () => {
        const { app } = this.state
        const newRoad = TextureCache["road"]
        const newRoadSprite = new Sprite(newRoad)
        newRoadSprite.width = app.view.width
        // 23 - какая-то проблема с высотой картинки
        newRoadSprite.height = app.view.height + 23
        newRoadSprite.position.set(0, -app.view.height + 23)
        app.stage.addChildAt(newRoadSprite, 0)
        return newRoadSprite
    }


    moveRoad = () => {
        const { currentRoad, topRoad } = this.state
        this.isUpdateRoadStateNeed(currentRoad)
        currentRoad.vy = 2
        currentRoad.y += currentRoad.vy
        if (topRoad) {
            topRoad.vy = 2
            topRoad.y += topRoad.vy
        }
        if (!topRoad && currentRoad.y >= 0) {
            this.setState({
                topRoad: this.createNewRoad()
            })
        }
    }

    isUpdateRoadStateNeed = (currentRoad) => {
        const { app } = this.state
        if (currentRoad.y >= app.view.height) {
            this.setState((prevState) => {
                return {
                    currentRoad: prevState.topRoad,
                    topRoad: null
                }
            })
            app.stage.removeChild(currentRoad)
        }
    }

    /**
     *  Листенер игрового цикла
     *  Определение движения игровой машины - this.moveCar
     *  Проверка выхода вражеского автомобиля за пределы game-поля - this.carOnGameFieldChecking
     *  Проверка на hit - this.carHitChecking (в зависимости от направления разный x,y у спрайта)
     */
    gameLoop = (delta) => {
        const { enemyCars, gameCar, isNeuronalNetworkEnable, isNeuronalNetworkLoaded } = this.state
        if (!isNeuronalNetworkEnable || isNeuronalNetworkLoaded ) {
            if (gameCar) {
                this.moveCar(this.context)
            }
            if (gameCar && enemyCars) {
                this.moveRoad()
                enemyCars.forEach((car) => {
                    const {enemy, direction, id} = car
                    enemy.vx = 0
                    enemy.vy = 5
                    enemy.y += enemy.vy
                    if (this.carOnGameFieldChecking(enemy, direction)) {
                        this.state.app.stage.removeChild(enemy)
                        this.setState((prevState) => {
                            return {
                                gameReward: ++prevState.gameReward,
                                enemyCars: prevState.enemyCars.filter((car) => car.id !== id)
                            }
                        })
                    }
                    if (direction === 'front') {
                        if (this.carHitChecking(gameCar, enemy, enemy.width, enemy.height)) {
                            this.stopAllMovement()
                        }
                    } else {
                        if (this.carHitChecking(gameCar, enemy, 0, 0)) {
                            this.stopAllMovement()
                        }
                    }
                })
            }
        }
    }

    /**
     * Проверка автомобиля на game-поле
     *
     * @param {PIXI.Sprite} car
     * @param {string} direction
     * @returns {boolean}
     */
    carOnGameFieldChecking = (car, direction) => {
        if (this.state.app?.view && car) {
            const offset = direction === 'back' ? car.height : 0
            return (car.y - offset) > this.state.app.view.height
        }
    }

    /**
     * Установка интервала для создания вражеских автомобилей
     *
     * @returns {number}
     */
    startEnemyCreation = () => {
        return setInterval(() => {
            const enemyDirection = this.calcRandomPosition() ? OFFCOMING_ENEMY_CAR : ONCOMING_ENEMY_CAR
            let newEnemy = this.createCarSprite(enemyDirection, 'enemyCar')
            this.setState((prevState) => {
                prevState.enemyCars.push({id: ++this.enemyCarsId, enemy: newEnemy, direction: enemyDirection})
                return {
                    enemyCars: [...prevState.enemyCars]
                }
            })
            this.state.app.stage.addChild(newEnemy)
        }, 5000)
    }

    /**
     * Отслеживание движения автомобиля + проверка на край game-поля
     *
     * @param {string} direction - направление движения автомобиля
     */

    moveCar = (direction) => {
        const { gameCar, app} = this.state
        const gameField = app.view
        if (gameField.width - gameCar.x < 1 || gameCar.x  - gameCar.width <= 0) {
            this.stopAllMovement()
        }
        switch (direction) {
            case 'up': {
                gameCar.vx = 0
                gameCar.vy = -2
                break
            }
            case 'down': {
                gameCar.vx = 0
                gameCar.vy = 5
                break
            }
            case 'left': {
                gameCar.vx = -8
                gameCar.vy = 0
                break
            }
            case 'right': {
                gameCar.vx = 8
                gameCar.vy = 0
                break
            }
            case 'stop': {
                gameCar.vx = 0
                gameCar.vy = 0
                break
            }
        }
        this.xAxisOffset += gameCar.vx
        if (Math.abs(this.xAxisOffset) === 160) {
            this.xAxisOffset = 0
            this.props.setMoveDirection('stop')
        }
        gameCar.y += gameCar.vy
        gameCar.x += gameCar.vx
    }

    /**
     * Отчистка игрового стейта после конца игры
     */
    stopAllMovement = () => {
        const { app } = this.state
        clearInterval(this.intervalId)
        app.ticker.stop()
        this.clearAllEnemies()
        this.setState({
            enemyCars: [],
            stopTimer: true,
            isCrashing: true
        })
        this.props.setNNPaused(true)
        this.props.setMoveDirection('stop')
    }

    /**
     * Отслеживание логики стоклновения автомобилей
     *
     * @param mainCar - спрайт игровой машины
     * @param enemyCar - спрайт вражеской машины
     * @param {number} rotationOffsetX- смещенный 'x' у спрайта
     * @param {number} rotationOffsetY - смещенный 'y' у спрайта
     * @returns {boolean}
     */
    carHitChecking = (mainCar, enemyCar, rotationOffsetX, rotationOffsetY) => {
        //Define the variables we'll need to calculate
        let hit, combinedHalfWidths, combinedHalfHeights, vx, vy

        //hit will determine whether there's a collision
        hit = false

        //Find the center points of each sprite
        mainCar.centerX = mainCar.x + mainCar.width / 2
        mainCar.centerY = mainCar.y + mainCar.height / 2
        // из-за rotation сдвигается ось х и y

        enemyCar.centerX = enemyCar.x + enemyCar.width / 2 + rotationOffsetX
        enemyCar.centerY = enemyCar.y + enemyCar.height / 2 + rotationOffsetY

        //Find the half-widths and half-heights of each sprite
        mainCar.halfWidth = mainCar.width / 2
        mainCar.halfHeight = mainCar.height / 2
        enemyCar.halfWidth = enemyCar.width / 2
        enemyCar.halfHeight = enemyCar.height / 2

        //Calculate the distance vector between the sprites
        vx = mainCar.centerX - enemyCar.centerX
        vy = mainCar.centerY - enemyCar.centerY

        //Figure out the combined half-widths and half-heights
        combinedHalfWidths = mainCar.halfWidth + enemyCar.halfWidth
        combinedHalfHeights = mainCar.halfHeight + enemyCar.halfHeight
        //Check for a collision on the x axis
        if (Math.abs(vx) < combinedHalfWidths) {
            //A collision might be occurring. Check for a collision on the y axis
            hit = Math.abs(vy) < combinedHalfHeights
        } else {
            //There's no collision on the x axis
            hit = false
        }
        //`hit` will be either `true` or `false`
        return hit
    }

    /**
     * Удаление вражеских автомобилей с game-поля
     */
    clearAllEnemies = () => {
        const { enemyCars, app } = this.state
        enemyCars.forEach((enemyCar) => {
            app.stage.removeChild(enemyCar.enemy)
        })
    }

    /**
     * Запуск новой игры
     */
    onRestartGameClick = () => {
        const { gameCar, app } = this.state
        app.ticker.start()
        this.setState({
            isCrashing: false,
            stopTimer: false,
            gameReward: 0
        })
        this.props.setMoveDirection('stop')
        this.setInitialGameCarPosition(gameCar, app.view)
        this.intervalId = this.startEnemyCreation()
    }

    /**
     * Устаановка начального положения игрового автомобиля
     *
     * @param gameCar
     * @param gameField
     */
    setInitialGameCarPosition = (gameCar, gameField) => {
        gameCar.position.set(gameField.width - gameField.width / 4 + gameCar.width / 2 + 35, gameField.height - 50)
    }

    /**
     * Подсчет продолжительности игры
     *
     * @param callback
     */
    calcGameDuration = (callback) => {
        this.setState({
            gameDuration: callback()
        })
    }

    render() {
        const { isCrashing, gameReward, stopTimer, gameDuration } = this.state
        return (
            <div className="app-container">
                <div ref={this.rootContainerRef} className="game-container">
                    <GameStatusBar
                        gameReward={gameReward}
                        gameDuration={this.calcGameDuration}
                        stopTimer={stopTimer}
                    />
                    {isCrashing &&
                    <GameOver
                        gameReward={gameReward}
                        onRestartGameClick={this.onRestartGameClick}
                        finalTime={gameDuration}
                    />
                    }
                </div>
            </div>
        )
    }
}

MainGame.contextType = GameContext;

export default MainGame
