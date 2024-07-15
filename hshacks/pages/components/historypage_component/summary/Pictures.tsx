import Image from 'next/image'
import React from 'react'

interface PicturesInterface {
    link: string
}

const Pictures: React.FC<PicturesInterface> = ({
    link
}) => {
  return (
    <Image width={100} height={100} className='w-full object-cover rounded-lg' style={{height: "300px", boxShadow: "0px 0px 5px 1px white" }} src={link} alt='Image could not be loaded' />
  )
}

export default Pictures