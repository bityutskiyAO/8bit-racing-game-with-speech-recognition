import React, {useRef, useState} from 'react'

import './style.scss'
import {Button8Bit} from "..";

export const GameHelloWindow = (props) => {
    const { onInitButtonClick } = props
    const [isLoading, setLoading] = useState(false)

    const btnYesRef = useRef(null)

    const handleButtonOnClick = (e) => {
        onInitButtonClick(e.target.id === 'enableButton')
        setLoading(true)
    }

    const handleKeyUp = (e) => {
        console.log(e.code)
        if (e.code === 'Enter') {
            btnYesRef.current.click()
        }
    }

    return (
        <div className="start-game-container" onKeyUp={handleKeyUp} tabIndex="0">
            <div className="game-container-1">
                <h1>Speech manipulation racing v0.0.1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos exercitationem hic, labore magni reiciendis vitae? Beatae fugit, harum iusto perspiciatis quo reprehenderit sint suscipit voluptate? Amet illum tempora voluptatibus.</p>
                {!isLoading
                    ?
                    <>
                        <p>Turn on Speech recognition?</p>
                        <div className="button-container">
                            <Button8Bit
                                reference={btnYesRef}
                                id="enableButton"
                                title="Yes"
                                handleButtonOnClick={handleButtonOnClick}
                            />
                            <Button8Bit
                                id="disableButton"
                                title="No"
                                handleButtonOnClick={handleButtonOnClick}
                            />
                        </div>
                    </>
                    :
                    <p className="nn-loader" >Neuronal Network loading...</p>
                }
            </div>
            <div className="game-container-2"/>
            <div className="game-container-3"/>
        </div>
    );
};


