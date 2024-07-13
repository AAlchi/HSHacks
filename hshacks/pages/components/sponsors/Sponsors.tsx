import React from 'react'
import SponsorCard from './SponsorCard'

const sponsorsConst = [
    {
        color: "diamond",
        name: "Sponsor Name",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et molestiae sapiente soluta voluptatem hic beatae fugiat optio minus aliquid laudantium non magnam est numquam at veniam, suscipit sunt molestias. Odit nisi ab dolor consequuntur voluptatum illo nam dolores inventore voluptates.",
        website: "https://hshacks.org"
    },
    {
        color: "diamond",
        name: "Sponsor Name",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et molestiae sapiente soluta voluptatem hic beatae fugiat optio minus aliquid laudantium non magnam est numquam at veniam, suscipit sunt molestias. Odit nisi ab dolor consequuntur voluptatum illo nam dolores inventore voluptates.",
        website: "https://hshacks.org"
    },
    {
        color: "gold",
        name: "Sponsor Name",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et molestiae sapiente soluta voluptatem hic beatae fugiat optio minus aliquid laudantium non magnam est numquam at veniam, suscipit sunt molestias. Odit nisi ab dolor consequuntur voluptatum illo nam dolores inventore voluptates.",
        website: "https://hshacks.org"
    },
    {
        color: "gold",
        name: "Sponsor Name",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et molestiae sapiente soluta voluptatem hic beatae fugiat optio minus aliquid laudantium non magnam est numquam at veniam, suscipit sunt molestias. Odit nisi ab dolor consequuntur voluptatum illo nam dolores inventore voluptates.",
        website: "https://hshacks.org"
    },
    {
        color: "silver",
        name: "Sponsor Name",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et molestiae sapiente soluta voluptatem hic beatae fugiat optio minus aliquid laudantium non magnam est numquam at veniam, suscipit sunt molestias. Odit nisi ab dolor consequuntur voluptatum illo nam dolores inventore voluptates.",
        website: "https://hshacks.org"
    },
    {
        color: "silver",
        name: "Sponsor Name",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et molestiae sapiente soluta voluptatem hic beatae fugiat optio minus aliquid laudantium non magnam est numquam at veniam, suscipit sunt molestias. Odit nisi ab dolor consequuntur voluptatum illo nam dolores inventore voluptates.",
        website: "https://hshacks.org"
    }
]

const Sponsors = () => {
    return (
        <div className='text-white py-10 px-10 justify-center items-center flex-col flex'>
            <div className='items-start flex flex-col w-full'>
                <h1 className='text-3xl font-extrabold pb-3'>Our Sponsors</h1>
                <div className='w-full border-b-2 border-white' style={{ height: "2px" }} />
            </div>
            <div className='flex p-2 gap-10 flex-wrap justify-center pt-10'>
                <div className='flex flex-col w-full p-5 rounded-lg gap-4 bg-gradient-to-r from-cyan-600 to-transparent'>
                    <h1 className='text-2xl font-extrabold'>Diamond</h1>
                </div>
                <div className='grid w-full lg:grid-cols-2 grid-cols-1 gap-2'>
                    {sponsorsConst.map(card => (
                        card.color == "diamond" && (
                            <SponsorCard color="diamond" name={card.name} description={card.description} website={card.website} />
                        )
                    ))}
                </div>
                <div className='flex flex-col w-full p-5 rounded-lg gap-4 bg-gradient-to-r from-yellow-500 to-transparent'>
                    <h1 className='text-2xl font-extrabold'>Gold</h1>
                </div>
                <div className='grid w-full lg:grid-cols-2 grid-cols-1 gap-2'>
                    {sponsorsConst.map(card => (
                        card.color == "gold" && ( 
                            <SponsorCard color="gold" name={card.name} description={card.description} website={card.website} /> 
                        )
                    ))}
                </div>
                <div className='flex flex-col w-full p-5 rounded-lg gap-4 bg-gradient-to-r from-slate-300 to-transparent'>
                    <h1 className='text-2xl font-extrabold'>Silver</h1>
                </div>
                <div className='grid w-full lg:grid-cols-2 grid-cols-1 gap-2'>
                    {sponsorsConst.map(card => (
                        card.color == "silver" && (

                            <SponsorCard color="silver" name={card.name} description={card.description} website={card.website} />
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sponsors