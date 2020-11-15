import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import {Button8Bit} from "..";
import {reward} from "../../assets/images";

export const GameOver = (props) => {
    const { onRestartGameClick, finalTime, gameReward } = props
    return (
        <div className="game-over-alert">
            <p className="game-over-header"> GAME OVER </p>
            <div className="game-info">
                <img src={reward} width={80} alt="reward" height={50}/>
                <span>{gameReward}</span>
                <p>{finalTime}</p>
            </div>
            <Button8Bit
                id="resetBtn"
                classNames="reset-btn"
                handleButtonOnClick={onRestartGameClick}
                title="Restart"
            />
        </div>
    )
}

GameOver.propTypes = {
    onRestartGameClick: PropTypes.func.isRequired,
    finalTime: PropTypes.string.isRequired,
    gameReward: PropTypes.number.isRequired,
}
