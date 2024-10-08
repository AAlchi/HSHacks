import React from 'react'
import ProfileBlock from './ProfileBlock'

const Team = () => {
  return (
    <div className='flex justify-center'>

    <div className='text-white pt-20 lg:md:px-20 w-full px-5' style={{maxWidth: "1500px"}}>
      <div className='items-start flex flex-col w-full'>
        <h1 className='text-3xl font-extrabold pb-3'>Our Team</h1>
        <div className='w-full border-b-2 border-white' />
      </div>  
        <div className='py-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
          <ProfileBlock image="/profile/Ali.jpg" name="Ali Alchikh Ibrahim" school="John Hersey HS" />
          <ProfileBlock image="/profile/Matthew.webp" name="Matthew Lundeen" school="Prospect HS" />
          <ProfileBlock image="/profile/Eric.webp" name="Eric Wetzel" school="John Hersey HS" />
          <ProfileBlock image="default" name="Zuzanna Latosa" school="John Hersey HS" />
          <ProfileBlock image="/profile/Efe.png" name="Efe Ozalp" school="Prospect HS" />
          <ProfileBlock image="/profile/Albert.jpeg" name="Albert Kim" school="Prospect HS" />
          <ProfileBlock image="default" name="Richard Fetyko" school="John Hersey HS" />
          <ProfileBlock image="default" name="Amanuel Mikhael" school="John Hersey HS" />
        </div> 
    </div>
    </div>
  )
}

export default Team