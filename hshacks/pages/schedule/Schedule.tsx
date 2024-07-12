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
      name: "Open Coding Time"
    },
    {
      _id: 2,
      name: "Intro to HTML, CSS, JS"
    },
    {
      _id: 3,
      name: "Team Formation"
    },
    {
      _id: 4,
      name: "APIs w/ Postman"
    },
    {
      _id: 5,
      name: "Build Your Programming Toolbox: Workshop"
    },
    {
      _id: 6,
      name: "Build a Mini-Calendar w/ React"
    },
    {
      _id: 7,
      name: "Build a RESTful API w/ Node.js & MongoDB"
    }]
  },
  {
    time: "12:00 PM",
    items: [{
      _id: 1,
      name: "Lunch Arrives"
    },
    {
      _id: 2,
      name: "AMA w/ Larry Schrof"
    },
    ]
  },
  {
    time: "1:00 PM",
    items: [{
      _id: 1,
      name: "Open Coding Time"
    },
    {
      _id: 2,
      name: "AI MNIST Digit Recognition Workshop"
    },
    {
      _id: 3,
      name: "Minigame"
    },
    {
      _id: 4,
      name: "Project Presentation Workshop"
    },
    ]
  },
  {
    time: "5:30 PM",
    items: [{
      _id: 1,
      name: "Presentations to SWE Judges"
    },
    {
      _id: 2,
      name: "Dinner Available"
    }
    ]
  },
  {
    time: "7:30 PM",
    items: [{
      _id: 1,
      name: "Closing Ceremony"
    }
    ]
  }
]

const Schedule = () => {
  return (
    <div className='text-white py-10 px-10 w-full'>
      <div className='items-start flex flex-col w-full'>
        <h1 className='text-3xl font-extrabold pb-3'>Schedule</h1>
        <div className='w-full border-b-2 border-white' />
      </div> 
        <div className='flex flex-col w-full'>
          
           {ScheduleData.map(data => ( 
                <div key={data.time} className='flex w-full lg:flex-row md:flex-row flex-col'>
                  
                <div className='border-r-0 lg:border-r-2 md:border-r-2 border-white lg:justify-end md:justify-end justify-start lg:w-2/12 md:w-2/12 w-full flex'> 
                  <h1 className='pr-7 pt-10 whitespace-nowrap'>{data.time}</h1> 
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-2 flex-wrap pt-8 pl-5'>
                 {data.items.map(data => ( 
                    <ScheduleBlock name={data.name} /> 
                 ))}   
                </div>
              </div>  
           ))}
        </div> 
    </div>
  )
}

export default Schedule