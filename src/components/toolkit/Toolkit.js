import React from 'react'
import Underline from '../underline/Underline'
import Button from '../button/Button'
import toolkit from '../../assets/images/toolkit.png'
import capture from '../../assets/images/capture.png'

const Toolkit = () => {

    return (
        <section className='container mx-auto flex flex-col items-center mt-12 px-4 md:px-16 md:mt-24 lg:flex-row'>
            <div className="flex flex-col space-y-5 md:space-y-10 lg:w-2/3">
                <div className="w-16 h-16 md:w-20 md:h-20">
                    <img className='w-full h-full object-contain' src={toolkit} alt="toolkit" />
                </div>
                <div className="flex flex-col">
                    <h6
                        className='font-mont font-medium text-2xl text-grey lg:text-3xl'
                    >
                        All-In-One Business Building Tool Kit
                    </h6>
                    <h6
                        className='w-full font-mont font-medium text-lg text-grey mt-3 md:6 max-w-[300px] md:max-w-[600px] md:pt-3 lg:text-2xl'
                    >
                        FinZeo Technology makes it easy for Business and Consumers
                        to easily perform financial transactions
                    </h6>
                    <Underline />
                </div>
                <div className="flex flex-col">
                    <h6 className='font-mont font-medium text-sm text-grey md:text-base'>Every Developers Dream</h6>
                    <h6 className='font-mont font-normal text-lg text-grey mt-1.5 md:mt-2.5 md:text-2xl'>Powerful and Easy-to-Use APIs</h6>
                    <p className='w-full font-mont font-medium text-xs text-lightGrey max-w-[560px] h-[135px] mt-3 md:mt-6 md:text-base'>
                        We know for developers, one of the worse things to deal with is a bad undocumented API. That’s why we are proud to say our API’s are built by Senior Developers for Developers because a good API makes it so much easier to complete your project; on budget, on time and with no headaches!
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-4 space-x-0 md:flex-row md:space-x-7 md:space-y-0">
                    <Button text="See API's" dropShadow={true} />
                    <Button text='See Documentation' dropShadow={true} />
                </div>
            </div>
            <div className="w-full max-w-[300px] h-[300px] md:max-w-[570px] md:h-[510px] mt-12 lg:mt-auto lg:w-1/3">
                <img className='w-full h-full object-contain' src={capture} alt="capture" />
            </div>
        </section>
    )
}

export default Toolkit