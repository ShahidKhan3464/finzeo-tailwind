import React from 'react'
import Button from '../button/Button'
import computer from '../../assets/images/computer.png'

const Hero = () => {

    return (
        <section className='flex flex-col items-center space-y-6 px-4 mt-12 md:mt-24 lg:px-0'>
            <div className="flex flex-col space-y-3.5 max-w-[300px] w-full md:max-w-[826px]">
                <h6 className='font-mont font-semibold text-lg text-grey text-center md:text-2xl'>
                    Digital Payment Technology For The Modern Business
                </h6>
                <p className='font-mont font-medium text-xs text-grey text-center px-1.5 md:text-sm'>
                    We make it easy for Businesses of all sizes to
                    process financial transactions in office, store oronline using our website plugins, API’s
                    or software. Processing payments has never been easier! In fact, over 97% of Businesses save on processing fees when they get FinZeo
                </p>
            </div>
            <div className="flex flex-col items-center space-y-4 space-x-0 md:flex-row md:space-x-7 md:space-y-0">
                <Button text='Get Started' />
                <Button text='Request Free Fee Audit' />
            </div>
            <div className="w-full max-w-[300px] h-[230px] md:pt-10 md:max-w-[900px] md:h-[525px]">
                <img className='w-full h-full object-contain' src={computer} alt="computer" />
            </div>
        </section>
    )
}

export default Hero