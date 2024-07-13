import React from 'react'

interface FAQBlockInterface {
    question: string;
    answer: string
}

const FAQBlock: React.FC<FAQBlockInterface> = ({
    question,
    answer
}) => {
  return (
    <div className='bg-white text-black rounded-lg p-4 lg:w-2/5 w-full'>
        <h1 className='border-b-2 border-gray-200 text-lg pb-2 font-extrabold'>{question}</h1>
        <p className='pt-2'>{answer}</p>
    </div>
  )
}

export default FAQBlock