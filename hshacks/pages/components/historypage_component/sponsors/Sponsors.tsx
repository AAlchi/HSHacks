import React from 'react' 
import SponsorCard from '../../global/sponsors/SponsorCard'

const sponsorsConst = [
    {
        color: "platinum", 
        description: "Normandy Remodeling is a Chicago-area remodeling company specializing in home, kitchen, and bathroom models. Thank you for supporting HSHacks!",
        image: "/pictures/normandy_remodeling.png",
        website: "https://normandyremodeling.com/"
    },
    {
        color: "platinum", 
        description: "Legat Architects is forward-thinking architecture company that aims to inspire curiosity with their amazing designs. Throughout the decades, they have built a reputation for designs that enhance learning, living, and working environments. Thank you for your support!",
        image: "/pictures/Legat-Logo-Tagline-Color-RGB.png",
        website: "https://www.legat.com/"
    },
    {
        color: "platinum", 
        description: "Township District 214 is a Blue Ribbon School District that offers a complete academic program, comprehensive extracurricular offerings, and life-long learning opportunities! Thank you for supporting HSHacks!",
        image: "/pictures/D214_logo.png",
        website: "https://www.d214.org/"
    },
    {
        color: "platinum", 
        description: "For over 40 years O’Reilly has provided technology and business training, knowledge, and insight to help companies succeed. Our unique network of experts and innovators share their knowledge and expertise through books, articles, and our online learning platform. O’Reilly online learning gives you on-demand access to live training courses, in-depth learning paths, interactive coding environments, certification prep materials, and a vast collection of text and video from O’Reilly and 200+ other publishers. For more information visit oreilly.com. Thank you for supporting HSHacks!",
        image: "/pictures/OReilly_logo_rgb.png",
        website: "https://www.oreilly.com/"
    },
    {
        color: "platinum", 
        description: "CodeCrafters offers hands-on learning for programmers. Programmers get to learn how existing developer tools work by building similar ones themselves! Thank you for supporting HSHacks!",
        image: "/pictures/code_crafters.png",
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
        image: "/pictures/aops.png",
        website: "https://artofproblemsolving.com/"
    }, 
    {
        color: "gold", 
        description: "Mathworks is an amazing company that focuses on mathematical computing softwares like MATLAB and Simulink, which include data analysis and simulation. Thank you for your support!",
        image: "/pictures/mathworks.png",
        website: "https://www.mathworks.com/"
    }, 
    {
        color: "gold", 
        description: "Are you looking for a tool to help make your ideas a reality? Blasamiq offers an amazing product that allows you to create quick product mockups for your business or project! Thank you for all of your support with HSHacks!",
        image: "/pictures/balsamiq-logo-screen.png",
        website: "https://balsamiq.com/"
    }, 
    {
        color: "gold", 
        description: "Interview Cake is an amazing place to prepare for your programming interviews! Over 45 practice questions, an integrated coding sandbox, and more! Thank you for supporting HSHacks!",
        image: "/pictures/cake_logo_blue_gray.png",
        website: "https://www.interviewcake.com/"
    }, 
    {
        color: "silver", 
        description: "Jimmy John's is a fast-food sandwich chain dedicated to serving you high quality, great sandwiches as fast as possible. Not only do you get your food fast, but you also get to choose from many sandwiches because of their large menu options. Thank you for supporting HSHacks!",
        image: "/pictures/Jimmy_John's.png",
        website: "https://www.jimmyjohns.com/"
    },
    {
        color: "silver", 
        description: "Sticker Ninja is a sticker print shop that makes high quality, amazing vinyl stickers. Their stickers are long lasting, UV resistant, and also waterproof! Thank you for supporting HSHacks!",
        image: "/pictures/sticker_ninja.png",
        website: "https://stickerninja.com/"
    },
    {
        color: "silver", 
        description: "Desmos is a dynamic mathematical tool that transforms the way students and educators engage with mathematical concepts! Users can graph functions, plot data, evaluate equations, explore transformations, and much more! Thank you for your support!",
        image: "/pictures/desmos_logo.png",
        website: "https://desmos.com/"
    }
]

const Sponsors = () => {
    return (
        <div className='bg-gray-100 flex justify-center'>
        <div className='text-white py-20 lg:md:px-20 px-2 justify-center items-center flex-col flex' style={{maxWidth: "1500px"}}>
            <div className='items-start flex flex-col w-full p-3'>
                <h1 className='text-3xl font-extrabold pb-3 text-black'>Our Sponsors from HSHacks 2025</h1>
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


