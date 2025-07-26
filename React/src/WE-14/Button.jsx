import React from 'react'

const Button = ({ title, backgroundColor }) => {
    return (
        <button style={{ backgroundColor: backgroundColor }}>{title}</button>
    )
}

export default Button