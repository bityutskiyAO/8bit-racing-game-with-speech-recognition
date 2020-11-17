import React from 'react'
import PropTypes from 'prop-types'
import * as images from '../../assets/images'

import './style.scss'

export const GameInfoLinks = props => {
    const { imgLinks, title } = props

    return (
        <div className="info-links info-links__container">
            <h3>{title}</h3>
            <div className="info-links__links-container">
                {imgLinks.map((image) => {
                    return (
                        <a href={image.link}>
                            <img src={images[image.name]} width={image.width || 64} height={image.height || 64} alt={title}/>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

GameInfoLinks.propTypes = {
    imgLinks: PropTypes.array.isRequired,
    title: PropTypes.string
}
