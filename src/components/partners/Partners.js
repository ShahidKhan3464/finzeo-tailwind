import React from 'react'
import Underline from '../underline/Underline'
import Button from '../button/Button'
import partner from '../../assets/images/partner.png'
import partnerCircle from '../../assets/images/partner-circle.png'

const Partners = () => {

    return (
        <section className='container mx-auto flex flex-col items-center mt-12 px-4 md:px-16 md:mt-24 lg:flex-row'>
            <div className="w-full flex flex-col space-y-5 md:space-y-10 lg:w-2/4">
                <div className="w-16 h-16 md:w-20 md:h-20">
                    <img className='w-full h-full object-contain' src={partner} alt="partner" />
                </div>
                <div className="flex flex-col">
                    <h6
                        className='font-mont font-medium text-2xl text-grey lg:text-3xl'
                    >
                        The Right Financial Partners
                    </h6>
                    <h6
                        className='font-mont font-medium text-lg text-grey pt-1 md:pt-3 lg:text-2xl'
                    >
                        Make All the Difference
                    </h6>
                    <Underline />
                </div>
                <div className="flex flex-col space-y-3 md:space-y-6">
                    <p className='font-mont font-medium text-xs text-lightGrey md:text-base'>
                        At FinZeo, we understand that having access to the right banks and financial institutions can transform your business and increase profitability dramatically. That's why we've worked hard to create an "insiders only" banking network that connects our customers with the right banks to help us meet their needs.
                    </p>
                    <p className='font-mont font-medium text-xs text-lightGrey md:text-base'>
                        Thanks to those relationships, we're able to offer flexible payment processing services with no reserve requirements, no escrow requirements, and low transaction fees, even for high-risk merchant accounts. Let us handle the behind the scenes work to connect you to the right banks so you can keep your attention on growing your business.
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-4 space-x-0 md:flex-row md:space-x-7 md:space-y-0">
                    <Button text='Our Features' dropShadow={true} />
                    <Button text='Our Services' dropShadow={true} />
                </div>
            </div>
            <div className="w-full max-w-[300px] h-[300px] md:max-w-[740px] md:h-[770px] lg:w-2/4 ">
                <img className='w-full h-full object-contain' src={partnerCircle} alt="partner-circle" />
            </div>
        </section>
    )
}

export default Partners