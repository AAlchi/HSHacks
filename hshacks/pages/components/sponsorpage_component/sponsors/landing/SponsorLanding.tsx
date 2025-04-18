import React from 'react'
import { motion } from "framer-motion";

const SponsorLanding = () => {
    return (
        <div className='background'>
            <div className='flex flex-col text-white'>
                <div className='text-center flex flex-col gap-10 items-center pt-20 justify-center px-4 md:px-8 lg:px-16' style={{ minHeight: "600px", flex: "2" }}>
                    <div className='flex flex-col gap-3'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 2,
                              ease: "easeOut"
                            }}
                            style={{  
                                background: "linear-gradient(to left, #007cbf, #fff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent", 
                            }}
                        >
                            <h1 className='text-5xl font-extrabold'>Make a Difference for <span className="HSBlue">HSHacks</span></h1>
                        </motion.div>
                    </div>
                    <div className='flex gap-3 lg:flex-row flex-col justify-center'>
                        <button 
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = 'HSHacks 2025 Prospectus.pdf';
                                link.download = 'HSHacks 2025 Prospectus.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }} 
                            className="buttonStyle flex gap-2 rounded-lg px-5 py-3 font-bold whitespace-nowrap bg-white text-black hover:opacity-55"
                            >
                            {"Download Prospectus"}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 8.25.22-.22a.75.75 0 0 1 1.28.53v6.441c0 .472.214.934.64 1.137a3.75 3.75 0 0 0 4.994-1.77c.205-.428-.152-.868-.627-.868h-.507m-6-2.25h7.5M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='w-full bg-white text-black landingFooter flex justify-evenly' style={{ opacity: 0.8 }}>
                    <h1 className='text-lg py-4 text-center w-4/5'>Questions? Contact us at <span className='font-bold'>team@hshacks.org</span></h1>
                </div>
            </div>
        </div>
    )
}

export default SponsorLanding