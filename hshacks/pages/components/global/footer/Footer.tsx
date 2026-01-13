import Image from 'next/image'
import Map from './Map'
import ContactBlock from './ContactBlock'
import Button from '../button/Button'

const Footer = () => {
    return (
        // <div className='bg-black flex justify-center'>
        <footer className='w-full bg-black py-10 px-5 lg:px-10'>
            <div className='text-white flex lg:flex-row flex-col pb-5'>
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
                    <ContactBlock name="HSHacks Team" email='team@hshacks.org' label='Team email' />
                    <ContactBlock name="Ali AI" email='aalchikhibrahim6522@stu.d214.org' label='Director' />
                    <ContactBlock name="Angel B" email='abitsov7028@stu.d214.org' label='Director' />
                </div>
            </div>
            <div className='text-white pt-5'>
                <h1 className='pb-2'>Quick Links</h1>
                <div className='border-t-2'></div>
                <div className='flex flex-col gap-3 pt-5'> 
                    <div className='flex gap-3 flex-wrap'>
                        <Button color='bg-gray-400' name='History' navigate='/history' icon=''/>
                        <Button color='bg-gray-400' name='For Sponsors' navigate='/sponsors' icon=''/>
                        <Button color='bg-gray-400' name='Register' navigate='/registeration' icon=''/>
                        <Button color='bg-gray-400' name='Code of Conduct' navigate='/codeofconduct' icon=''/> 
                    </div>
                </div>
            </div>
        </footer>
        // </div>
    )
}

export default Footer