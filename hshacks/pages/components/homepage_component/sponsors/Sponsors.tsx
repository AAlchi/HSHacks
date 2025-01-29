import React from 'react' 
import SponsorCard from '../../global/sponsors/SponsorCard'

const sponsorsConst = [
    {
        color: "platinum", 
        description: "CodeCrafters offers hands-on learning for programmers. Programmers get to learn how existing developer tools work by building similar ones themselves! Thank you for supporting HSHacks!",
        image: "/pictures/code-crafters.png",
        website: "https://codecrafters.io/"
    },
    {
        color: "platinum", 
        description: "Looking for a cool domain for your website? XYZ offers great top level domains for any project you're coding. Thank you XYZ for your sponsorship!",
        image: "/pictures/xyz-logo-color.png",
        website: "https://gen.xyz/"
    },
    {
        color: "gold", 
        description: "Art of Problem Solving provides advanced online Math learning resources, classes, and books for students from Elementary to High School, enabling them to expand their mathematical problem-solving skills! Thank you for sponsoring our hackathon!",
        image: "https://i.ibb.co/Vj0WLD7/Group-200-1.png",
        website: "https://artofproblemsolving.com/"
    }, 
    {
        color: "gold", 
        description: "Are you looking for a tool to help make your ideas a reality? Blasamiq offers an amazing product that allows you to create quick product mockups for your business or project! Thank you for all of your support with HSHacks!",
        image: "https://balsamiq.com/assets/company/brandassets/balsamiq-logo-screen.png",
        website: "https://balsamiq.com/"
    }, 
    {
        color: "silver", 
        description: "Sticker Ninja is a sticker print shop that makes high quality, amazing vinyl stickers. Their stickers are long lasting, UV resistant, and also waterproof! Thank you for supporting HSHacks!",
        image: "https://stickerninja.com/wp-content/themes/sticker-ninja/dist/images/logo-dark_3e368c83.png",
        website: "https://stickerninja.com/"
    },
    {
        color: "silver", 
        description: "Desmos is a dynamic mathematical tool that transforms the way students and educators engage with mathematical concepts! Users can graph functions, plot data, evaluate equations, explore transformations, and much more! Thank you for your support!",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Desmos_logo.svg/1200px-Desmos_logo.svg.png",
        website: "https://desmos.com/"
    }
]

const Sponsors = () => {
    return (
        <div className='bg-gray-100 flex justify-center'>
        <div className='text-white py-20 lg:md:px-20 px-2 justify-center items-center flex-col flex' style={{maxWidth: "1500px"}}>
            <div className='items-start flex flex-col w-full p-3'>
                <h1 className='text-3xl font-extrabold pb-3 text-black'>Our Sponsors</h1>
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