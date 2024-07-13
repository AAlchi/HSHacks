import Image from 'next/image'
import React from 'react'
import List from './List'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
    return (
        <header className='fixed w-full z-10 text-white text-xl flex flex-col border-b-2 border-gray-500'>
            <div className='p-4 text-white text-xl flex justify-between items-center'> 
                <Image onClick={() => router.push("/")} width="150" height="0" style={{height: "30px", objectFit: "cover", cursor: "pointer"}}  src="/HSHacks_Logo.png" alt="logo" /> 
                <ul className='sm:flex hidden gap-5 font-medium text-slate-300'>
                    <li className="cursor-pointer text-lg" onClick={() => router.push("/history")}>History</li>
                    <li className="cursor-pointer text-lg" onClick={() => router.push("/sponsors")}>For Sponsors</li> 
                </ul>
            </div> 
            <div className='sm:hidden flex text-black font-semibold px-3 pb-3 overflow-auto'>
                <ul className='flex gap-3'>
                    <List name="History" />
                    <List name="For Sponsors" /> 
                </ul>
            </div>
        </header>
    )
}

export default Header