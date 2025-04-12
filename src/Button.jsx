import React from 'react'

const Button = ({ title, bgColor }) => {
    // const {title} = props
    return (
        <div style={{ backgroundColor: bgColor }}>{title}</div>
    )
}

export default Button