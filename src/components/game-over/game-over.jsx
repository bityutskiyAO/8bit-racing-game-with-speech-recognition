import React from 'react'

import './style.scss'

export const GameOver = (props) => {
    const { onResetGame, finalTime } = props
    return (
        <div className="game-over-alert">
            <p> GAME OVER </p>
            <p>{finalTime}</p>
            <button onClick={onResetGame} >RESTART</button>
        </div>
    )
}
