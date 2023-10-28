import React from 'react'

const Input = ({ type, id, placeholder }) => {
    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
        />

    )
}

export default Input