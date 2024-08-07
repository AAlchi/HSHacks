import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
    const [hasScrolled, setHasScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight * 0.15
            setHasScrolled(window.scrollY > threshold)
        }

        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className={`fixed w-full z-10 text-white text-xl transition-colors duration-300 ease-in-out ${hasScrolled || menuOpen ? 'bg-header' : 'bg-transparent'}`}>
            <div className='p-5 flex justify-between items-center'>
                <Image 
                    onClick={() => router.push("/")} 
                    width={150} 
                    height={30} 
                    className="cursor-pointer"
                    src="/HSHacks_Logo.png" 
                    alt="logo" 
                    priority
                />
                <div className='hidden sm:flex gap-5 font-medium text-slate-300'>
                    <li className="cursor-pointer text-lg list-none" onClick={() => router.push("/history")}>History</li>
                    <li className="cursor-pointer text-lg list-none" onClick={() => router.push("/sponsors")}>For Sponsors</li> 
                </div>
                <div className='sm:hidden'>
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {!menuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
            </div> 
            <div className={`fixed w-full z-10 text-white text-xl pb-3 transition-colors duration-300 ease-in-out ${menuOpen ? 'bg-header' : 'bg-transparent'}`}>
                <div className={`${!menuOpen ? "hidden" : "flex"} flex-col items-center`}>
                    <button className='text-lg text-white py-3 px-4 transition-transform duration-300 ease-in-out transform hover:scale-105' onClick={() => { router.push("/history"); setMenuOpen(false); }}>History</button>
                    <button className='text-lg text-white py-3 px-4 transition-transform duration-300 ease-in-out transform hover:scale-105' onClick={() => { router.push("/sponsors"); setMenuOpen(false); }}>For Sponsors</button>
                </div>
            </div> 
        </header>
    )
}

export default Header
