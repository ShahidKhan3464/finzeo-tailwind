import React from 'react'

const Button = ({ text, dropShadow }) => {
    const styleBtn = {
        background: 'linear-gradient(180deg, #FFF100 -9.65%, #FFF100 -9.64%, #E4A518 52.6%)'
    }

    return (
        <button
            style={styleBtn}
            className={`${dropShadow ? 'drop-shadow' : ''} w-40 h-10 rounded-full font-mont font-medium text-xs text-[#FFFFFF] md:text-base md:w-56 md:h-14 lg:font-bold`}
        >
            {text}
        </button>
    )
}

export default Button