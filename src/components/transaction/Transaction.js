import React, { useState } from 'react'
import Underline from '../underline/Underline'
import LearnMore from '../learnMore/LearnMore'
import Button from '../button/Button'
import transaction from '../../assets/images/transaction.png'
import transactionImg from '../../assets/images/transaction-img.png'
import done from '../../assets/images/done.png'

const Transaction = () => {
    const [selected, setSelected] = useState(0);
    const tabs = ['ACH Processing', 'E-Check Processing', 'Instant Funding', 'Credit Processing', 'Bank Verification']
    const lists = ['No reserves needed', 'Establish late cut off-times', 'Set up single and reoccurring payments', 'Pay bill easily']

    return (
        <section className='container mx-auto mt-12 px-4 md:px-16 md:mt-24'>
            <div className="flex flex-col space-y-5 md:space-y-10">
                <div className="w-16 h-16 md:w-20 md:h-20">
                    <img className='w-full h-full object-contain' src={transaction} alt="transaction" />
                </div>
                <div className="flex flex-col">
                    <h6
                        className='font-mont font-medium text-2xl text-grey lg:text-3xl'
                    >
                        Transactions-as-a-Service
                    </h6>
                    <h6
                        className='w-full font-mont font-medium text-lg text-grey mt-3 md:6 max-w-[300px] md:max-w-[600px] md:pt-3 lg:text-2xl'
                    >
                        Smart Financial Technology to Maximize Your Businesses
                    </h6>
                    <Underline />
                </div>
                <div className="flex space-x-9 overflow-auto">
                    {tabs.map((tab, index) => (
                        <a
                            key={index}
                            href="#home"
                            className={`font-mont font-medium ${selected === index ? 'text-golden underline underline-offset-18 decoration-3 lg:underline-offset-2' : 'text-lightGrey'} text-xs lg:text-sm`}
                            onClick={() => setSelected(index)}
                        >
                            {tab}
                        </a>
                    ))}
                </div>
            </div>
            <div className="w-full max-w-[870px] border-t border-solid border-[#C9C9C9] mt-1"></div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='pt-10 md:pt-28'>
                    <p className='font-mont font-medium text-lightGrey text-xs md:text-base'>
                        We offer simple, safe, and speedy electronic ACH credits and debits directly to and from your customers' bank accounts.
                    </p>
                    <div className="mb-10">
                        {lists.map((list, index) => (
                            <div key={index} className="flex space-x-5 mt-5">
                                <div className="w-4 h-4 md:w-6 md:h-6">
                                    <img className='w-full h-full object-contain' src={done} alt="done" />
                                </div>
                                <p className='font-mont font-medium text-lightGrey text-xs md:text-base'>{list}</p>
                            </div>
                        ))}
                    </div>
                    <LearnMore />
                </div>
                <div className="w-full max-w-[300px] h-[300px] md:max-w-[470px] md:h-[470px] mt-5 md:mt-10">
                    <img className='w-full h-full object-contain' src={transactionImg} alt="transaction-img" />
                </div>
            </div>
            <div
                className="flex flex-col items-center justify-center space-y-4 space-x-0 mt-6 md:mt-10 md:flex-row md:space-x-7 md:space-y-0"
            >
                <Button text="Our Guide" dropShadow={true} />
                <Button text='Get Started' dropShadow={true} />
            </div>
        </section>
    )
}

export default Transaction