import Image from 'next/image'
import React from 'react'

interface PicturesInterface {
    link: string
}

const Pictures: React.FC<PicturesInterface> = ({
    link
}) => {
  return (
    <Image width={500} height={500} className='w-full object-cover rounded-lg' style={{height: "300px" }} src={link} alt='Image could not be loaded' priority placeholder='blur' blurDataURL={link}/>
  )
}

export default Pictures