import React from 'react'

import {GameInfoLinks} from "..";
import {frameWorks} from "../../constants";

import './style.scss'

export const GameDescription = () => {
    return (
        <div className="game-description-container">
            <h1 className="game-description-title">
                Speech manipulation racing v0.0.1
            </h1>
            <div className="game-description-rules">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci aliquam aut beatae consequatur, deserunt dolores ea eligendi esse, explicabo harum illum magnam nesciunt nostrum quidem sed sequi velit voluptatem?</span>
            </div>
            <div className="game-description-links">
                <GameInfoLinks
                    title="App build with"
                    imgLinks={frameWorks}
                />
            </div>
        </div>
    )
}
