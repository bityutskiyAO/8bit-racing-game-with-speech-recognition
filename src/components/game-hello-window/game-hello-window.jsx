import React, {useState} from 'react'

import './style.scss'

export const GameHelloWindow = (props) => {
    const { onInitButtonClick } = props
    const [isLoading, setLoading] = useState(false)
    const handleButtonOnClick = (e) => {
        onInitButtonClick(e.target.id === 'enableButton')
        setLoading(true)
    }

    return (
        <div className="start-game-container">
            <div className="game-container-1">
                <h1>Speech manipulation racing v0.0.1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos exercitationem hic, labore magni reiciendis vitae? Beatae fugit, harum iusto perspiciatis quo reprehenderit sint suscipit voluptate? Amet illum tempora voluptatibus.</p>
                {!isLoading
                    ?
                    <>
                        <p>Turn on Speech recognition?</p>
                        <div className="button-container">
                            <div id="enableButton" className="button-8bit" onClick={handleButtonOnClick}/>
                            <div id="disableButton" className="button-8bit" onClick={handleButtonOnClick}/>
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


