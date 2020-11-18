import React, { useState, useEffect } from 'react'

import {GameDescription, GameHelloWindow, GameInfoLinks, MainGame} from "./components";
import {initSpeechRecognitionModel, predictWord} from "./neuronal-network/speach-recognition";
import {GameContext} from './gameContext'

import './App.css'
import {frameWorks, socialNetworks} from "./constants";

const App = (props) => {
    const [isNNEnable, setNNEnable] = useState(false)
    const [isHelloWindowShow, setHelloWindowShow] = useState(true)
    const [isNNLoaded, setLoaded] = useState(false)
    const [isPaused, togglePaused] = useState(false)
    const [moveDirection, setMoveDirection] = useState('stop')

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'KeyW':
                case'ArrowUp': {
                    setMoveDirection('up')
                    break
                }
                case 'KeyD':
                case 'ArrowRight': {
                    setMoveDirection('right')
                    break
                }
                case 'KeyS':
                case 'ArrowDown': {
                    e.preventDefault()
                    setMoveDirection('down')
                    break
                }
                case 'KeyA':
                case 'ArrowLeft': {
                    setMoveDirection('left')
                    break
                }
                case 'Space': {
                    setMoveDirection('stop')
                    break
                }
            }
        })
    }, [])

    const changeCarDirectionByVoice = (direction) => {
        setMoveDirection((prevState) => {
            if (prevState !== direction) {
                console.log('Change direction to: ', direction)
                return direction
            }
        })
    }

    const onInitButtonClick = (value) => {
        setNNEnable(value)
        console.log('value', value)
        if (value) {
            initSpeechRecognitionModel()
                .then((recognizer) => {
                    predictWord(recognizer, changeCarDirectionByVoice, isPaused);
                    console.log('LOADED')
                    setLoaded(true)
                    setHelloWindowShow(false)
                })
        } else {
            setHelloWindowShow(false)
        }
    }

    return (
        <div className="container">
            {isHelloWindowShow &&
                <GameHelloWindow
                    onInitButtonClick={onInitButtonClick}
                />
            }
            {!isHelloWindowShow && (!isNNEnable || isNNLoaded) &&
                <>
                    <GameDescription
                        isTextNeed
                        infoTitle="App build with"
                        infoLinks={frameWorks}
                    />
                    <GameContext.Provider value={moveDirection}>
                        <MainGame
                            setNNPaused={togglePaused}
                            moveDirection={moveDirection}
                            setMoveDirection={setMoveDirection}
                        />
                    </GameContext.Provider>
                    <GameDescription
                        infoTitle="Follow us"
                        infoLinks={socialNetworks}
                    />
                </>
            }
        </div>
    )
}

export default App
