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
        color: "gold", 
        description: "CodeCrafters offers hands-on learning for programmers. Programmers get to learn how existing developer tools work by building similar ones themselves! Thank you for supporting HSHacks!",
        image: "/pictures/code_crafters.png",
        website: "https://codecrafters.io/"
    },
    {
        color: "gold", 
        description: "Township District 214 is a Blue Ribbon School District that offers a complete academic program, comprehensive extracurricular offerings, and life-long learning opportunities! Thank you for supporting HSHacks!",
        image: "/pictures/D214_logo.png",
        website: "https://www.d214.org/"
    },
    {
        color: "gold", 
        description: "Hack Club is a global network of student-led coding clubs. They provide the resources, community, and support you need to start and sustain a coding club at your school. Thank you for sponsoring the HSHacks Hackathon!",
        image: "/pictures/hack_club_logo.png",
        website: "https://hackclub.com/"
    },
    {
        color: "gold",  
        description: "Draftbit is a tool to build native mobile apps, responsive web apps, and internal tools visually and collaboratively. Thank you for providing us with Draftbit access!",
        image: "/pictures/draftbit_logo.png",
        website: "https://draftbit.com/"
    },
    {
        color: "silver",  
        description: "MobileMakersEdu by Uncharted Learning offers iOS development courses that enable students to learn coding, design, and collaboration skills to bring mobile app ideas to life! Thank you for sponsoring the HSHacks Hackathon.",
        image: "/pictures/mobile_makers_edu_logo.png",
        website: "https://www.unchartedlearning.org/student-programs/mobilemakersedu"
    },
    {
        color: "silver",  
        description: "United Coder offers instructor-led project-based software development and test automation engineer training programs, enabling anyone to pursue new careers in these fields! Thank you for sponsoring the HSHacks Hackathon.",
        image: "/pictures/unitedcoder_logo.png",
        website: "https://www.unitedcoder.com/"
    },
    {
        color: "silver",  
        description: "StickerNinja is a sticker printing company that provides awesome, high-quality stickers at a low cost for all of your sticker needs! Thank you for providing us with HSHacks stickers!",
        image: "/pictures/sticker_ninja.png",
        website: "https://stickerninja.com/"
    },
    {
        color: "silver",  
        description: "Postman is a collaboration platform for API development. Postman's features simplify each step of building an API and streamline collaboration so you can create better APIs—faster.",
        image: "/pictures/postman_logo.png",
        website: "https://www.postman.com/"
    },
    {
        color: "silver",  
        description: "Wolfram is a technology company that specializes in the development of mathematical software, programming languages, and data analysis tools! Thank you for providing us with Wolfram|One access!",
        image: "/pictures/wolfram_language_logo.png",
        website: "https://www.wolfram.com/"
    },
    {
        color: "silver",  
        description: "For over 40 years O’Reilly has provided technology and business training, knowledge, and insight to help companies succeed. Our unique network of experts and innovators share their knowledge and expertise through books, articles, and our online learning platform. O’Reilly online learning gives you on-demand access to live training courses, in-depth learning paths, interactive coding environments, certification prep materials, and a vast collection of text and video from O’Reilly and 200+ other publishers. For more information visit oreilly.com.",
        image: "/pictures/OReilly_logo_rgb.png",
        website: "https://www.oreilly.com/"
    },
    {
        color: "silver",  
        description: "InterviewCake is an online software engineering course offering a structured approach to preparing for tech interviews with in-depth readings, practical questions, step-by-step solutions, and valuable tips.",
        image: "/pictures/cake_logo_blue_gray.png",
        website: "https://www.interviewcake.com/"
    },
    {
        color: "silver",  
        description: "Echo3D is a 3d asset management company for developers, focusing on API and cloud infrastructure for 3d asset management. Thank you for providing us with Echo3D access!",
        image: "/pictures/echo3D_logo.png",
        website: "https://www.echo3d.com/"
    },
    {
        color: "silver",  
        description: "InterviewBuddy is a platform that provides virtual face-to-face mock interviews with industry experts, enabling developers and students to practice and prepare for their next tech job interview!",
        image: "/pictures/interviewbuddy_logo.png",
        website: "https://www.interviewbuddy.net/"
    },
    {
        color: "silver",  
        description: "Art of Problem Solving provides advanced online Math learning resources, classes, and books for students from Elementary to High School, enabling them to expand their mathematical problem-solving skills!",
        image: "/pictures/aops.png",
        website: "https://artofproblemsolving.com/"
    },
    {
        color: "silver",  
        description: "Axure is a powerful tool for creating prototypes and specifications for websites and applications, simplifying the process of bringing your digital ideas to life.",
        image: "/pictures/axure_logo.png",
        website: "https://www.axure.com/"
    },
    {
        color: "silver",  
        description: "Balsamiq is a rapid wireframing software that combines the simplicity of paper sketching with the power of a digital tool so that teams can focus on what's important!",
        image: "/pictures/balsamiq-logo-screen.png",
        website: "https://balsamiq.com/"
    },
    {
        color: "silver",  
        description: "Desmos is a dynamic mathematical tool that transforms the way students and educators engage with mathematical concepts! Users can graph functions, plot data, evaluate equations, explore transformations, and much more!",
        image: "/pictures/desmos_logo.png",
        website: "https://www.desmos.com/"
    }
]

const Sponsors = () => {
    return (
        <div className='bg-gray-100 flex justify-center'>
        <div className='text-white py-20 lg:md:px-20 px-2 justify-center items-center flex-col flex' style={{maxWidth: "1500px"}}>
            <div className='items-start flex flex-col w-full p-3'>
                <h1 className='text-3xl font-extrabold pb-3 text-black'>Our Sponsors from HSHacks 2024</h1>
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


