import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

export const Button8Bit = props => {
    const { id, handleButtonOnClick, title, classNames, reference } = props

    return (
        <div ref={reference} className={`button-8bit ${classNames}`} onClick={handleButtonOnClick}>
            <div id={id} className="button-8bit-after">{title}</div>
        </div>
    )
}

Button8Bit.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    handleButtonOnClick: PropTypes.func.isRequired,
}
