import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import List from './List'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight * 0.25
            if (window.scrollY > threshold) {
                setHasScrolled(true)
            } else {
                setHasScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`fixed w-full z-10 text-white text-xl flex flex-col transition-colors duration-300 ${hasScrolled ? 'bg-gray-900' : 'bg-transparent'}`}>
            <div className='p-4 text-white text-xl flex justify-between items-center'> 
                <Image onClick={() => router.push("/")} width="150" height="0" style={{height: "30px", objectFit: "cover", cursor: "pointer"}} src="/HSHacks_Logo.png" alt="logo" /> 
                <ul className='flex gap-5 font-medium text-slate-300'>
                    <li className="cursor-pointer text-lg" onClick={() => router.push("/history")}>History</li>
                    <li className="cursor-pointer text-lg" onClick={() => router.push("/sponsors")}>For Sponsors</li> 
                </ul>
            </div> 
            {/* <div className='sm:hidden flex text-black font-semibold px-5 pb-3 overflow-auto'>
                <ul className='flex gap-3'>
                    <List onClick={"/history"} name="History" />
                    <List onClick={"/sponsors"} name="For Sponsors" /> 
                </ul>
            </div> */}
        </header>
    )
}

export default Header
