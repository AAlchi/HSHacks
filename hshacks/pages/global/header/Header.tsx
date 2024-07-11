import Image from 'next/image'
import React from 'react'
import List from './List'

const Header = () => {
    return (
        <header className='fixed w-full z-10 text-white text-xl flex flex-col border-b-2 border-gray-500'>
            <div className='p-4 text-white text-xl flex justify-between items-center'> 
                <Image width="150" height="0" style={{height: "30px", objectFit: "cover"}} src="/HSHacks_Logo.png" alt="logo" /> 
                <ul className='sm:flex hidden gap-5 font-medium text-slate-300'>
                    <li className="cursor-pointer text-lg">History</li>
                    <li className="cursor-pointer text-lg">For Sponsors</li>
                    <li className="cursor-pointer text-lg">Contact Us</li>
                </ul>
            </div> 
            <div className='sm:hidden flex text-black font-semibold px-3 pb-3 overflow-auto'>
                <ul className='flex gap-3'>
                    <List name="History" />
                    <List name="For Sponsors" />
                    <List name="Contact Us" />
                </ul>
            </div>
        </header>
    )
}

export default Header