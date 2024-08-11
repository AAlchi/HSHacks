import React from 'react'   
import FAQBlock from '../../global/faq/FAQBlock'

const FAQ = () => {
  return (
    <div className='flex justify-center bg-slate-700 py-10'>
    <div className='text-white bg-blue-850 py-10 lg:md:px-20 w-full px-5 justify-center items-center flex-col flex' style={{maxWidth: "1500px"}}>
        <div className='items-start flex flex-col w-full'>
            <h1 className='text-3xl font-extrabold pb-3'>Frequently Asked Questions</h1>
            <div className='w-full border-b-2 border-white' style={{ height: "2px" }} />
        </div> 
        <div className='flex gap-3 w-full flex-col items-center justify-center pt-10'>
            <FAQBlock question="What do I do if registeration is over?" answer="If you miss the registeration process, then you can contact our team at team@hshacks.org."/>
            <FAQBlock question="What do I need to bring to HSHacks?" answer="You aren't requried to bring anything besides an ID! We provide food and computers, but we highly recommend bringing your own computer, if you're able to, since we might run out. If you have any allergies, we recommend bringing a lunch in case our allergy-free lunches run out."/>
            <FAQBlock question="Is there an age limit for HSHacks?" answer="HSHacks is only open to high schoolers so unfortunately, if you are not in grades 9-12, we can't offer you a place as a participant. Contact team@hshacks.org for any questions."/>
            <FAQBlock question="How do I check-in at HSHacks?" answer="To check-in, simply give us your name and show us an ID when you enter."/>
            <FAQBlock question="What if I don't have an ID?" answer="Everyone is required to have a state or school ID. If you don't have an ID, have a parent/guardian check you in using theirs."/>
            <FAQBlock question="Is HSHacks free?" answer="Yup! Completely free. :)"/>
        </div>
    </div>
    </div>
  )
}

export default FAQ