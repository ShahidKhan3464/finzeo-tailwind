import React from 'react'
import Underline from '../underline/Underline'
import LearnMore from '../learnMore/LearnMore'
import Button from '../button/Button'
import payment from '../../assets/images/payment.png'
import platform from '../../assets/images/platform.png'
import api from '../../assets/images/api.png'
import pay from '../../assets/images/pay.png'
import report from '../../assets/images/report.png'

const Payment = () => {

    return (
        <section className='container mx-auto mt-12 px-4 md:px-16 md:mt-24'>
            <div className="flex flex-col items-center space-y-5 md:space-y-10">
                <div className="w-16 h-16 md:w-20 md:h-20">
                    <img className='w-full h-full object-contain' src={payment} alt="payment" />
                </div>
                <div className="flex flex-col items-center">
                    <h6
                        className='font-mont font-medium text-2xl text-center text-grey lg:text-3xl'
                    >
                        Our All-In-One Payment Processing Platform
                    </h6>
                    <h6
                        className='font-mont font-medium text-lg text-center text-grey pt-1 md:pt-3 lg:text-2xl'
                    >
                        We get you approved where others can't.
                    </h6>
                    <Underline />
                </div>
                <div className="flex flex-col space-y-3 px-2.5 md:space-y-6">
                    <p className='w-full font-mont font-medium text-xs text-lightGrey md:text-base lg:max-w-[1020px]'>
                        FinZeo’s payment processing platform is a technology stack built for big and small businesses to scale without headache. No matter your business type, online, storefront or both our payment platforms, website plugins, API’s, payment gateway’s, custom built processing solutions and everything in between is built to your success! You can start accepting payments or sending payouts online or in person in 15 minutes.
                    </p>
                    <p className='w-full font-mont font-medium text-xs text-lightGrey md:text-base lg:max-w-[1020px]'>
                        We can even help businesses send money in real-time using our Instant Funding Technology, issue virtual and physical debit cards, get business financing, send invoices, help with digital marketing, via text, reward cards and more.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center py-6 md:py-12">
                <div
                    className="flex flex-col w-full max-w-[550px] shadow rounded bg-[#FFFFFF] px-7 py-6"
                >
                    <div className="w-10 h-7">
                        <img src={platform} alt="platform" />
                    </div>
                    <h6 className='font-mont font-semibold text-sm text-lightGrey mt-8 mb-3.5 md:text-base'>FinZeo Platform</h6>
                    <p
                        className='font-mont font-medium text-xs text-lightGrey mb-6 md:text-base'
                    >
                        Use our standalone payment platform to handle all of your processing needs for high-risk merchant accounts. Our streamlined merchant gateway makes collecting payments faster and easier than ever when it comes to eCheck payment processing, ACH payment processing, cash processing, and credit card payment processing.
                    </p>
                    <LearnMore />
                </div>

                <div
                    className="flex flex-col w-full max-w-[550px] shadow rounded bg-[#FFFFFF] mt-5 px-7 py-6 lg:ml-5 lg:mt-0"
                >
                    <div className="w-6 h-7">
                        <img src={api} alt="api" />
                    </div>
                    <h6 className='font-mont font-semibold text-sm text-lightGrey mt-8 mb-3.5 md:text-base'>FinZeo API</h6>
                    <p
                        className='font-mont font-medium text-xs text-lightGrey mb-6 md:text-base'
                    >
                        Not ready to implement an all-in-one merchant gateway solution or need to add payment processing features to support your high-risk business? Our robust API allows your developers to integrate a specialized payments gateway into your existing platform that is catered to the specific needs of your business.
                    </p>
                    <LearnMore />
                </div>

                <div
                    className="flex flex-col w-full max-w-[550px] shadow rounded bg-[#FFFFFF] mt-5 px-7 py-6"
                >
                    <div className="w-9 h-7">
                        <img src={pay} alt="pay" />
                    </div>
                    <h6 className='font-mont font-semibold text-sm text-lightGrey mt-8 mb-3.5 md:text-base'>FinPay</h6>
                    <p
                        className='font-mont font-medium text-xs text-lightGrey mb-6 md:text-base'
                    >
                        Need a fast, easy-to-implement solution that allows your website to start taking online payments today? Our revolutionary Tpay technology installs on your site in seven minutes or less to facilitate eCheck payment processing, ACH payment processing, debit card payment processing, and online credit card payment processing for your high-risk merchant account.
                    </p>
                    <LearnMore />
                </div>

                <div
                    className="flex flex-col w-full max-w-[550px] shadow rounded bg-[#FFFFFF] mt-5 px-7 py-6 lg:ml-5"
                >
                    <div className="w-8 h-7">
                        <img src={report} alt="report" />
                    </div>
                    <h6 className='font-mont font-semibold text-sm text-lightGrey mt-8 mb-3.5 md:text-base'>FinZeo Reports</h6>
                    <p
                        className='font-mont font-medium text-xs text-lightGrey mb-6 md:text-base'
                    >
                        Every one of our payment processing solutions gives you access to real-time data about your portfolio to track performance and cashflow. Our clear and transparent reporting allows you to monitor your transactions at every point in the payment process.
                    </p>
                    <LearnMore />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 space-x-0 md:flex-row md:space-x-7 md:space-y-0">
                <Button text='Our Features' dropShadow={true} />
                <Button text='Our Services' dropShadow={true} />
            </div>
        </section>
    )
}

export default Payment