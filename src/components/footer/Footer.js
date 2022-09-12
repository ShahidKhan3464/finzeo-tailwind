import React from 'react'
import logo from '../../assets/images/logo.png'
import footerLine from '../../assets/images/footer-line.png'
import media from '../../assets/images/media.png'

const Footer = () => {

    return (
        <footer
            className="bg-footer bg-no-repeat bg-cover bg-center mt-12 md:mt-24"
        >
            <div
                className="container mx-auto border-b border-solid border-grey grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 md:px-16"
            >
                <div className="flex flex-col space-y-6 pt-8 pb-6 md:pb-20 md:pt-32 md:space-y-8">
                    <div className="w-20 h-16 md:w-32 md:h-24">
                        <img className='w-full h-full object-contain' src={logo} alt="logo" />
                    </div>
                    <div className="flex items-center rounded-md bg-[#EBEBEB] w-[220px] h-[45px] px-5 md:w-[270px] md:h-[53px]">
                        <input
                            type="text"
                            placeholder='Email'
                            className='font-mont font-medium text-xs text-lightGrey bg-transparent w-11/12 h-full border-none outline-none md:text-base'
                        />
                        <div className="w-[34px]">
                            <img className='w-full h-full object-contain' src={footerLine} alt="footer-line" />
                        </div>
                    </div>
                    <div className='w-20'>
                        <h6 className='font-mont font-semibold text-xs text-lightGrey md:text-base' >Follow Us</h6>
                        <div className="w-14 h-5 mt-1.5">
                            <img className='w-full h-full object-contain' src={media} alt="media" />
                        </div>
                    </div>
                </div>

                <div className="pt-6 pb-6 md:pb-20 md:pt-32 lg:ml-20">
                    <h6 className='font-mont font-semibold text-lg text-golden uppercase md:text-2xl'>Company</h6>
                    <div className="flex flex-col space-y-4 mt-5 md:mt-10 md:space-y-9">
                        <a className='font-mont font-medium text-xs text-lightGrey md:text-base' href="#home">About us</a>
                        <a className='font-mont font-medium text-xs text-lightGrey md:text-base' href="#home">Contact us</a>
                    </div>
                </div>

                <div className="pt-4 pb-6 md:pb-20 lg:pt-32 lg:ml-12">
                    <h6 className='font-mont font-semibold text-lg text-golden uppercase md:text-2xl'>Resources</h6>
                    <div className="flex flex-col space-y-4 mt-5 md:mt-10 md:space-y-9">
                        <a className='font-mont font-medium text-xs text-lightGrey md:text-base' href="#home">Custome Login</a>
                        <a className='font-mont font-medium text-xs text-lightGrey md:text-base' href="#home">Blog</a>
                        <a className='font-mont font-medium text-xs text-lightGrey md:text-base' href="#home">FAQ's</a>
                    </div>
                </div>

                <div className="pt-4 pb-6 md:pb-20 lg:pt-32 lg:ml-12">
                    <h6 className='font-mont font-semibold text-lg text-golden uppercase md:text-2xl'>Our Platform</h6>
                    <div className="flex flex-col space-y-4 mt-5 md:mt-10 md:space-y-9">
                        <a className='font-mont font-medium text-xs text-lightGrey md:text-base' href="#home">Finzeo Platform</a>
                        <a className='font-mont font-medium text-xs text-lightGrey md:text-base' href="#home">Finzeo API</a>
                        <a className='font-mont font-medium text-xs text-lightGrey md:text-base' href="#home">Fin Pay</a>
                        <a className='font-mont font-medium text-xs text-lightGrey md:text-base' href="#home">Fin Reports</a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-4 px-8 md:px-16 md:py-7">
                <p className='font-mont font-medium text-xs text-lightGrey md:text-base'>ALL RIGHTS RESERVED</p>
            </div>
        </footer>
    )
}

export default Footer