import React from 'react'
import arrow from '../../assets/images/arrow.png'

const LearnMore = () => {

    return (
        <div className='flex space-x-2.5'>
            <a className='font-mont font-semibold text-xs text-blue md:text-base' href="#home">LEARN MORE</a>
            <div className="w-[26px]">
                <img className='w-full h-full object-contain' src={arrow} alt="arrow" />
            </div>
        </div>
    )
}

export default LearnMore