import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import StatBoxes from './StatBoxes'
import { useRouter } from 'next/router'
import Button from '../../global/button/Button'

const Summary = () => {
  const router = useRouter()

  const images = [
    '/pictures/one.jpg',
    '/pictures/two.jpg',
    '/pictures/three.jpg',
    '/pictures/four.jpg',
    '/pictures/five.jpg',
    '/pictures/six.jpg',
    '/pictures/seven.jpg'
  ]

  return (
    <div className='text-white py-20 flex lg:px-20 px-2 gap-10 justify-evenly lg:flex-row flex-col items-center bg-gradient-to-r from-indigo-600 via-blue-800 to-indigo-900'>
      <div className='flex flex-col text-center justify-center items-center lg:justify-start lg:items-start lg:text-start gap-3 w-full lg:w-1/2'>
        <h1 className='font-extrabold text-4xl'>What is HSHacks?</h1>
        <p className='text-lg lg:w-4/5 w-10/12 flex items-start'>HSHacks is a 12-hour, in-person hackathon where you can chill, code, and get prizes! You can team up (max 5) or go solo to solve a theme-related problem!</p>
        <br></br>
        <div className='flex flex-col gap-1 lg:w-2/5 w-11/12'>
          <StatBoxes icon="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" text="120+ expected participants" />
          <StatBoxes icon="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" text="12 hour hackathon"/>
          <StatBoxes icon="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" text="$42000+ total giveaways + prizes" />
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
                <img src={src} alt={`Carousel image ${index + 1}`} className='object-cover h-full w-auto' />
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
  )
}

export default Summary
