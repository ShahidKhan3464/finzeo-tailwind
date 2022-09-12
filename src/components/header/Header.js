import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const links = ['Products', 'Business Types', 'Developers', 'ISO Partnership', 'Blog', 'About Us', 'Contact Us']

    return (
        <header className='container mx-auto pt-5 px-4 md:px-16 md:pt-11'>
            <nav className='relative flex items-center justify-between'>
                <div className="w-20 h-16 md:w-32 md:h-24">
                    <img className='w-full h-full object-contain' src={logo} alt="logo" />
                </div>
                <div
                    className={`${isOpen ? 'absolute top-full left-auto w-full flex flex-col items-center space-y-7 shadow bg-[#FFFFFF] py-2.5' : 'hidden'} lg:py-0 lg:flex`}
                >
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href="#home"
                            className='font-mont font-medium text-grey pl-0 text-xs md:text-sm lg:pl-7'
                        >
                            {link}
                        </a>
                    ))}
                </div>
                <button
                    className='hidden bg-transparent w-48 h-14 rounded-full border-2 border-solid border-golden font-mont font-medium text-golden text-sm hover:bg-golden hover:text-[white] lg:block'
                >
                    Get A Quote
                </button>
                <div className="block lg:hidden">
                    {isOpen
                        ? <FaTimes className='text-base' onClick={() => setIsOpen(!isOpen)} />
                        : <FaBars className='text-base' onClick={() => setIsOpen(!isOpen)} />
                    }
                </div>
            </nav>
        </header >
    )
}

export default Navbar