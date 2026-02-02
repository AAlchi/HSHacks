import React from 'react'

interface ContactBlockInterface {
    name: string;
    email: string;
    label: string;
}

const ContactBlock:React.FC<ContactBlockInterface> = ({
    name,
    email,
    label
}) => {
  return (
    <div className='p-3 w-full rounded-lg bg-white text-black mb-2'>
        <h1 className='text-lg'>{name}</h1>
        <div className='flex gap-4 lg:flex-row flex-col justify-between items-start flex-wrap'>
            <p className='text-sm '>{email}</p>
            <p className='text-slate-500'>{label}</p>
        </div>
    </div>
  )
}

export default ContactBlock