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
          <ProfileBlock image="/profile/Ali.jpg" name="Ali AI" school="John Hersey HS" />
          <ProfileBlock image="/profile/Eric.webp" name="Eric W" school="John Hersey HS" />
          <ProfileBlock image="default" name="Zuzanna L" school="John Hersey HS" />
          <ProfileBlock image="/profile/Efe.png" name="Efe O" school="Prospect HS" />
          <ProfileBlock image="/profile/Albert.jpeg" name="Albert K" school="Prospect HS" />
          <ProfileBlock image="default" name="Richard F" school="John Hersey HS" />
          <ProfileBlock image="default" name="Amanuel M" school="John Hersey HS" />
          <ProfileBlock image="default" name="Calliope" school="John Hersey HS" />
          <ProfileBlock image="default" name="Chris P" school="Prospect HS" />
        </div> 
    </div>
    </div>
  )
}

export default Team
