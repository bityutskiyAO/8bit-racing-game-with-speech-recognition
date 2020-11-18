import React from 'react'
import PropTypes from 'prop-types'

import {GameInfoLinks} from ".."
import {keyBoardArrows} from "../../assets/images"

import './style.scss'

export const GameDescription = (props) => {
    const { isTextNeed, infoTitle, infoLinks } = props
    return (
        <div className="game-description-container">
            {isTextNeed &&
                <>
                    <h1 className="game-description-title">
                        8-bit Racing v0.0.1
                    </h1>
                    <div className="game-description-rules">
                        <p><strong>How to play:</strong></p>
                        <p>If you turn on speech recognition use voice commands - <strong>'UP'</strong>, <strong>'LEFT''</strong>, <strong>'RIGHT'</strong>, <strong>'DOWN',</strong> <strong>'STOP' </strong>- for controlling your car.</p>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <p>Else opportunity, you can use default keyboards arrow keys</p>
                            <img src={keyBoardArrows} alt="arrow-keys" width={64} height={64}/>
                        </div>
                    </div>
                </>
            }<strong>
      </strong>      <div className="game-description-links">
                <GameInfoLinks
                    title={infoTitle}
                    imgLinks={infoLinks}
                />
            </div>
        </div>
    )
}

GameDescription.propTypes = {
    isTextNeed: PropTypes.bool.isRequired,
    infoTitle: PropTypes.string.isRequired,
    infoLinks: PropTypes.array.isRequired
}
