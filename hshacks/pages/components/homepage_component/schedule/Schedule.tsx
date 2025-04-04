import React from 'react'
import ScheduleBlock from './ScheduleBlock'

const ScheduleData = [
  {
    time: "8:00 AM",
    items: [{
      _id: 1,
      name: "Check-in and Breakfast"
    }]
  },
  {
    time: "8:30 AM",
    items: [{
      _id: 1,
      name: "Opening Ceremony + Sponsor & Nonprofit Intros"
    }]
  },
  {
    time: "8:45 AM",
    items: [{
      _id: 1,
      name: "Team Formation"
    }]
  },
  {
    time: "9:00 AM",
    items: [{
      _id: 1,
      name: "Intro to HTML, CSS, JS Workshop"
    }]
  },
  {
    time: "10:00 AM",
    items: [{
      _id: 1,
      name: "Mr. Khurram Workshop"
    }]
  },
  {
    time: "12:00 PM",
    items: [{
      _id: 1,
      name: "Lunch"
    }]
  },
  {
    time: "1:00 PM",
    items: [{
      _id: 1,
      name: "Miguel's Workshop"
    }]
  },
  {
    time: "2:00 PM",
    items: [{
      _id: 1,
      name: "AMA with Larry Schrof"
    }]
  },
  {
    time: "3:15 PM",
    items: [{
      _id: 1,
      name: "Ali AI's Workshop"
    }]
  },
  {
    time: "4:30 PM",
    items: [{
      _id: 1,
      name: "Project Presentation Workshop"
    }]
  },
  {
    time: "5:30 PM",
    items: [{
      _id: 1,
      name: "Judging Starts & Dinner"
    }]
  },
  {
    time: "7:30 PM",
    items: [{
      _id: 1,
      name: "Closing Ceremony"
    }]
  },
]

const Schedule = () => {
  return (
    <div className='flex justify-center'>
      <div className='text-white py-20 lg:md:px-20 px-5 w-full' style={{ maxWidth: "1500px" }}>
        <div className='items-start flex flex-col w-full'>
          <h1 className='text-3xl font-extrabold pb-3'>Schedule</h1>
          <div className='w-full border-b-2 border-white' />
        </div>
        <div className='flex flex-col w-full'>

          {ScheduleData.map(data => (
            <div key={data.time} className='flex w-full lg:flex-row md:flex-row flex-col'>

              <div className='border-r-0 lg:border-r-2 md:border-r-2 border-white lg:justify-end md:justify-end justify-start lg:w-2/12 md:w-2/12 w-full flex'>
                <h1 className='pr-7 pt-10 whitespace-nowrap text-lg'>{data.time}</h1>
              </div>
              <div className='w-full gap-1 flex-wrap pt-2 lg:pt-6 lg:pl-5 md:pl-5'>
                {data.items.map(data => (
                  <ScheduleBlock key={data._id} name={data.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Schedule