import React from 'react'
import FAQBlock from './FAQBlock'

const FAQ = () => {
  return (
    <div className='text-white bg-blue-850 py-10 lg:md:px-20 px-5 justify-center items-center flex-col flex'>
        <div className='items-start flex flex-col w-full'>
            <h1 className='text-3xl font-extrabold pb-3'>Frequently Asked Questions</h1>
            <div className='w-full border-b-2 border-white' style={{ height: "2px" }} />
        </div> 
        <div className='flex gap-10 w-full flex-col items-center justify-center pt-10'>
            <FAQBlock question="What do I do if registeration is over?" answer="If you miss the registeration process, then you can contact our team at <team@hshacks.org> for the late registeration form."/>
            <FAQBlock question="What do I need to bring to HSHacks?" answer="You don't need to bring anything besides an ID! We provide food and computers. If you have any alergies, we recommend bringing a lunch in case our lunches run out. We also recommend bringing your own computer since we might run out."/>
            <FAQBlock question="Is there an age limit for HSHacks?" answer="HSHacks is only open to middle schoolers and high schoolers so unfortunatly, if you are not in grades 6-12, we can't offer you a place as a participant."/>
            <FAQBlock question="How do I check-in at HSHacks?" answer="To check-in, simply give us your name when you enter and we will get you setup for the hackathon. Everyone is required to have an ID when they enter."/>
            <FAQBlock question="What if I don't have an ID?" answer="If you don't have an ID, have a parent/guardian check you in. Note: If you don't have a state ID, you can use your school ID."/>
            <FAQBlock question="Is HSHacks free?" answer="Yup! Completely free :)"/>
        </div>
    </div>
  )
}

export default FAQ