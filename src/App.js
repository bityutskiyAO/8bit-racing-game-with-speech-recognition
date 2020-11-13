import React, { useState } from 'react'

import {GameDescription, GameHelloWindow, MainGame} from "./components";
import {initSpeechRecognitionModel, predictWord} from "./neuronal-network/speach-recognition";
import {GameContext} from './gameContext'

import './App.css'

const App = (props) => {
    const [isNNEnable, setNNEnable] = useState(false)
    const [isHelloWindowShow, setHelloWindowShow] = useState(true)
    const [isNNLoaded, setLoaded] = useState(false)
    const [isPaused, togglePaused] = useState(false)
    const [moveDirection, setMoveDirection] = useState('stop')

    const changeCarDirectionByVoice = (direction) => {
        setMoveDirection((prevState) => {
            if (prevState !== direction) {
                console.log('Change direction to: ', direction)
                return direction
            }
        })
    }
    const onInitButtonClick = async (value) => {
        setNNEnable(value)
        if (value) {
            initSpeechRecognitionModel()
                .then((recognizer) => {
                    predictWord(recognizer, changeCarDirectionByVoice, isPaused);
                    setHelloWindowShow(false)
                    setLoaded(true)
                })
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
                <GameContext.Provider value={moveDirection}>
                    <GameDescription/>
                    <MainGame
                        setNNPaused={togglePaused}
                        moveDirection={moveDirection}
                        setMoveDirection={setMoveDirection}
                    />
                </GameContext.Provider>
            }
        </div>
    )
}

export default App
