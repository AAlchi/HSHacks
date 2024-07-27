import Image from 'next/image'
import React from 'react'
import Map from './Map'
import ContactBlock from './ContactBlock'

const Footer = () => {
    return (
        // <div className='bg-black flex justify-center'>
        <footer className='py-10 px-5 w-full bg-black text-white flex lg:flex-row flex-col'> 
                <div className='flex-initial lg:w-3/5 w-full flex items-start flex-col'>
                    <div className='w-full border-b-2 border-white flex items-center mb-5' style={{ height: "60px" }}>
                        <Image width="150" height="0" style={{ objectFit: "cover" }} src="/HSHacks_Logo.png" alt="logo" />
                    </div> 
                    <Map />
                </div>
                <div className='flex-initial lg:w-2/5 w-full flex items-start flex-col lg:pt-0 pt-10'>
                    <div className='w-full border-b-2 border-white flex items-center mb-5' style={{ height: "60px" }}>
                        <h1 className='text-2xl'>Contact Us</h1>
                    </div>
                    <ContactBlock name="HSHacks Team" email='team@hshacks.org' label='Team email'/>
                    <ContactBlock name="Ali Alchikh Ibrahim" email='aalchikhibrahim6522@stu.d214.org' label='Director'/>
                    <ContactBlock name="Matthew Lundeen" email='mlundeen5270@stu.d214.org' label='Director'/>
                </div> 
        </footer>
        // </div>
    )
}

export default Footer