import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import StatBoxes from './StatBoxes'
import Button from '../../global/button/Button'
import Image from 'next/image'

const Summary = () => {

  const images = [
    '/pictures/one.jpg',
    '/pictures/two.jpg',
    '/pictures/three.jpg',
    '/pictures/four.jpg',
    '/pictures/five.jpg',
    '/pictures/six.jpg'
  ]

  return (
    <div className='bg-gradient-to-r from-indigo-600 via-blue-800 to-indigo-900 justify-center flex'>
    <div className='text-white py-20 flex lg:px-20 px-2 gap-10 justify-evenly lg:flex-row flex-col items-center' style={{maxWidth: "1500px"}}>
      <div className='flex flex-col text-center justify-center items-center lg:justify-start lg:items-start lg:text-start gap-3 w-full lg:w-1/2'>
        <h1 className='font-extrabold text-4xl'>What is HSHacks?</h1>
        <p className='text-lg lg:w-4/5 w-10/12 flex items-start'>HSHacks is a 12-hour, in-person hackathon where you can chill, code, and get prizes! You can team up (max 5) or go solo to solve a theme-related problem!</p>
        <br></br>
        <div className='flex flex-col gap-1 lg:w-2/5 w-11/12'>
          <StatBoxes icon="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" text="120+ expected participants" />
          <StatBoxes icon="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" text="12 hour hackathon" />
          <StatBoxes icon="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" text="In-person" />
        </div>
      </div>
      <div className='flex flex-col items-center lg:w-2/5 w-11/12'>
        <div className='relative flex flex-col items-end justify-center'>
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false} // Remove the "x of y" counter
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            className='rounded-md max-h-80'
          >
            {images.map((src, index) => (
              <div key={index} className='h-80 flex items-center justify-center rounded-lg overflow-hidden'> 
                <Image width={600} height={600} src={src} alt={`Carousel image ${index + 1}`} className='object-cover h-full w-auto' priority placeholder='blur' blurDataURL={src}/>
              </div>
            ))}
          </Carousel>
          <br></br>
          <Button name='2024 Recap' color='bg-black' navigate='/history' icon='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'></Button>
          {/* <button 
            className='mt-3 flex items-center text-xl font-bold bg-indigo-700 hover:bg-indigo-800 px-4 py-2 rounded-md transition-all duration-300'
            onClick={() => router.push("/history")}
          >
          
            2024 Recap
          </button> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Summary
