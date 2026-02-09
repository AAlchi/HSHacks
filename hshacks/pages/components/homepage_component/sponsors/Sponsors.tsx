import React from 'react' 
import SponsorCard from '../../global/sponsors/SponsorCard'

export const sponsorsConst = [
    {
        color: "platinum", 
        description: "Normandy Remodeling is a Chicago-area remodeling company specializing in home, kitchen, and bathroom models. Thank you for supporting HSHacks!",
        image: "/pictures/normandy_remodeling.png",
        website: "https://normandyremodeling.com/"
    },
    {
        color: "gold", 
        description: "Looking for a cool domain for your website? XYZ offers great top level domains for any project you're coding. Thank you XYZ for your sponsorship!",
        image: "/pictures/xyz-logo-color.png",
        website: "https://gen.xyz/"
    },
    {
        color: "gold", 
        description: "Are you looking for a tool to help make your ideas a reality? Blasamiq offers an amazing product that allows you to create quick product mockups for your business or project! Thank you for all of your support with HSHacks!",
        image: "/pictures/balsamiq-logo-screen.png",
        website: "https://balsamiq.com/"
    }, 
    {
        color: "gold", 
        description: "InterviewCake is an amazing place to prepare for your programming interviews! Over 45 practice questions, an integrated coding sandbox, and more! Thank you for supporting HSHacks!",
        image: "/pictures/cake_logo_blue_gray.png",
        website: "https://www.interviewcake.com/"
    }, 
    {
        color: "silver", 
        description: "Sticker Ninja is a sticker print shop that makes high quality, amazing vinyl stickers. Their stickers are long lasting, UV resistant, and also waterproof! Thank you for supporting HSHacks!",
        image: "/pictures/sticker_ninja.png",
        website: "https://stickerninja.com/"
    },
    {
        color: "gold", 
        description: "Looking to prepare for an interview? InterviewBuddy is an amazing company that specializes in getting you ready for your next interview. You get access to mock sessions, feedback, and also coaching personalized to you! Thank you for supporting HSHacks!",
        image: "/pictures/interviewbuddy_logo.png",
        website: "https://interviewbuddy.net/"
    }, 
    {
        color: "silver", 
        description: "Tugo Tea House gives you the perfect taste of Taiwan. Located in Arlington Heights, IL, Tugo Tea House offers a variety of delicious teas and boba. Thank you for supporting HSHacks!",
        image: "/pictures/tugo_tea_house.webp",
        website: "https://tugoteahouse.square.site/"
    }, 
]

const Sponsors = () => {
    return (
        <div className='bg-gray-100 flex justify-center'>
        <div className='text-white py-20 lg:md:px-20 px-2 justify-center items-center flex-col flex' style={{maxWidth: "1500px"}}>
            <div className='items-start flex flex-col w-full p-3'>
                <h1 className='text-3xl font-extrabold pb-3 text-black'>HSHacks Sponsors</h1>
                <div className='w-full border-b-2 border-gray-300' style={{ height: "2px" }} />
            </div>
            <div className='flex p-2 gap-10 flex-wrap justify-center pt-10'>
                <div className='flex flex-col w-full p-5 rounded-lg gap-4 bg-gradient-to-r from-slate-900 to-transparent'>
                    <h1 className='text-2xl font-extrabold'>Platinum</h1>
                </div>
                <div className='grid w-full lg:grid-cols-2 grid-cols-1 gap-2'>
                    {sponsorsConst.map(card => (
                        card.color == "platinum" && (
                            <SponsorCard color="platinum" key={card.description} image={card.image} description={card.description} website={card.website} />
                        )
                    ))}
                </div>
                <div className='flex flex-col w-full p-5 rounded-lg gap-4 bg-gradient-to-r from-yellow-500 to-transparent'>
                    <h1 className='text-2xl font-extrabold'>Gold</h1>
                </div>
                <div className='grid w-full lg:grid-cols-2 grid-cols-1 gap-2'>
                    {sponsorsConst.map(card => (
                        card.color == "gold" && ( 
                            <SponsorCard color="gold" key={card.description} image={card.image} description={card.description} website={card.website} /> 
                        )
                    ))}
                </div>
                <div className='flex flex-col w-full p-5 rounded-lg gap-4 bg-gradient-to-r from-gray-400 to-transparent'>
                    <h1 className='text-2xl font-extrabold'>Silver</h1>
                </div>
                <div className='grid w-full lg:grid-cols-2 grid-cols-1 gap-2'>
                    {sponsorsConst.map(card => (
                        card.color == "silver" && ( 
                            <SponsorCard color="silver" key={card.description} image={card.image} description={card.description} website={card.website} />
                        )
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Sponsors