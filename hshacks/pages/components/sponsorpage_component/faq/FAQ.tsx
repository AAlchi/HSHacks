import React from 'react'
import FAQBlock from './FAQBlock'

const FAQ = () => {
  return (
    <div className='flex justify-center'>
    <div className='text-white bg-blue-850 w-full py-20 px-10 justify-center items-center flex-col flex' style={{maxWidth: "1500px"}}>
        <div className='items-start flex flex-col w-full'>
            <h1 className='text-3xl font-extrabold pb-3'>Frequently Asked Questions</h1>
            <div className='w-full border-b-2 border-white' style={{ height: "2px" }} />
        </div> 
        <div className='flex gap-3 w-full flex-col items-center justify-center pt-10'>
            <FAQBlock question="What is HSHacks?" answer="HSHacks is 12 hour hackathon for high schoolers. Students team up to build projects centered around a theme introduced at our opening ceremony."/>
            <FAQBlock question="Where does my money go?" answer="The money will go to prizes, swag, food, other expenses, as well as future events that we host!"/>
            <FAQBlock question="Why sponsor HSHacks?" answer="By sponsoring HSHacks, you are helping a large audience of high school students with their coding career and inspiring the next generation of students in technology."/>
        </div>
        </div>
    </div>
  )
}

export default FAQ