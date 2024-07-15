import React from 'react'
import FAQBlock from './FAQBlock'

const FAQ = () => {
  return (
    <div className='text-white bg-blue-850 py-10 px-10 justify-center items-center flex-col flex'>
        <div className='items-start flex flex-col w-full'>
            <h1 className='text-3xl font-extrabold pb-3'>Frequently Asked Questions</h1>
            <div className='w-full border-b-2 border-white' style={{ height: "2px" }} />
        </div> 
        <div className='flex gap-10 lg:flex-wrap lg:flex-row flex-col justify-center pt-10'>  
            <FAQBlock question="Where does my money go?" answer="The money will go to prizes, swag, other expenses, as well as future events that we host!"/>
            <FAQBlock question="Why sponsor HSHacks?" answer="By sponsoring HSHacks, you are helping a large audience of middle/high school students with their coding career and helping them spark a new journey!"/>
        </div>
    </div>
  )
}

export default FAQ