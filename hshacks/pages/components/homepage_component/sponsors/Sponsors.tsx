import React from 'react' 
import SponsorCard from '../../global/sponsors/SponsorCard'

const sponsorsConst = [
    {
        color: "platinum", 
        description: "CodeCrafters offers hands-on learning for programmers. Programmers get to learn how existing developer tools work by building similar ones themselves! Thank you for supporting HSHacks!",
        image: "https://lh3.googleusercontent.com/fife/ALs6j_Fr4B6sypE37bqSMZsgLHVbLA62sl1d02TLWRXOl3w2ykhwPeMKx8V7MD8xW-ulsDYuHwrcox1fgs7VKRLXHdC27_j6BJYdMcCOZC2-kVvZepEe4qg4p-E6ZssIc1698tXG2z1s8hNOUiEgJ3zPMGqPVPahHfFhqxgWg9xxoAmm9rZ83A46FLCoSiPq8vvtsYK0N2l2hzFU91hc74rH2r9O7l8PY2xb0pkkQtCqKNvmWjkDw55TxO0Q__2t4fFlV-OuCvE5-9KHL9ncVPLU2GwjmrOG98CwihHaWb0_92SVuZ21GiVUZGLrcQfMm9jEmB9Lg4bcjwfo7NKXsvod_2Q2VRERIyvDXxQ-whZu_PZrGEVFI4iq4ASpe10ENpDCrDku6apNohmFUpZzoocxorZuW-z6lCkyxmYktB3wf0tid1TNExBsDilF2j6lql59Wm2bZnux4YW_LMOqJzvGAxOD9TvJyNdic1anwiJIZZbf3GgX9Bjjwbsvk5GWqxuO85I5x7i4v-ARdnBREiswri5vlAIJLXtZGRYWiZrxlS-8CdJTB5NP3uzOB5HEL4Vdxa0OpzXQ5K7_r9hRZ-Zbp0ggBuFJ1Xnub02UQNyHI3Dkxguc6nEiXkUhShkArPEhn5ZvKODXKtTm5j61SnM_tVXdb2H5d7tHfY7k65TblShawjNWMCAAW-SKtswl1MAkFHJ4Q23XzlDWeD1s9qSoGOZMT-kE6mUOdwdSjh1wFYKSl0wnxQKWSFNNhQxIu06zBSwy9_PQxHhHuu_fEZJHMvA5LetbdijEbNEQ2xa1JwVRHF9Ra48JN1yLZXf0hAm6AR9Uprpu7_cKRBSAX9uXneaUBLRAFkRavVjvGy7LlRyZyNPCYOGTX1Xmsz4cgTHCOfgCW7I1VYcJEsiffvNGEceqpho4DBGU0ri3c_RwYD96bFCwC3NQOpgK2BTFL5xN-FIjC0HmOQt_-nzCgptDbEHsuoJyQuaS1qd15IQkUO_YjiD8u3WFNr0ePfAGKzXRWr7RaT6Z-3MjJwzELmm_sIG8G1yxfdWcfZvkWSVM8azzY-VPyfe8bmu7r4t7boMFywUD05tpvdsfIfG1HvRbq3RN3iKmX_r4q6EuUpv1WGWGsCc_RrldIqz3zjO26zw9zbVULRU1H4pKXaXCFpoXL__GkNBiZVscYFMdB87KlgGAMVpmiEAuceq5MOwL8MIdhScC9hK7VDdJkgVs-Zv8sBgTpng0_Go5F-JExC23ciSAkrPuXz2-rp9IDnsXILXDpVW9rkxlkZtd1iiL29OObCQLCUcunqcjTNBnkx_jK2_-MSgda8EiFcyjSQNb9LU-dXI_2u-2gdgKjqUEVhtvfKe3Dj8qXeCwnqogJPLtZ0KO54DpdpDMtnraH4bpaF5BlQJCgVi50o-PkXLeqDq0J3bXgrwBu_7ZebvgdZL39ub25WAxzkQNfLkNtkG5WdX1gp109qJK_xgpBHVUvzF_SIB4gxl8nFJLG0HWl2w3PyVf_4D6xCrN-LxRrjVJc_h9j4s6axa14qJrlrgseM1FDbRCsYgls96Q2Z3N9mtL3_SPh49CPyJYZceUtWfR0hTLfzaUN4x8y9ZU1Gf-lN80WqpUZzu_yJ4xbREKLciS_rkif7Oq42Qv4Z8dErRB9BuaNEcb5Aq0W6WRRLgJrLpZrorB3Qf6oxfIYmLqeN1FdMter9p2z_1S_Vm1g9Dgyho1vYPTiZA-Zs5Y6A1ogGhku1Y-G8Tgxw=w2880-h1576",
        website: "https://codecrafters.io/"
    },
    {
        color: "platinum", 
        description: "Looking for a cool domain for your website? XYZ offers great top level domains for any project you're coding. Thank you XYZ for your sponsorship!",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/.xyz_logo.svg/298px-.xyz_logo.svg.png",
        website: "https://gen.xyz/"
    },
    {
        color: "gold", 
        description: "Art of Problem Solving provides advanced online Math learning resources, classes, and books for students from Elementary to High School, enabling them to expand their mathematical problem-solving skills! Thank you for sponsoring our hackathon!",
        image: "https://i.ibb.co/Vj0WLD7/Group-200-1.png",
        website: "https://artofproblemsolving.com/"
    }, 
    {
        color: "silver", 
        description: "Sticker Ninja is a sticker print shop that makes high quality, amazing vinyl stickers. Their stickers are long lasting, UV resistant, and also waterproof! Thank you for supporting HSHacks!",
        image: "https://stickerninja.com/wp-content/themes/sticker-ninja/dist/images/logo-dark_3e368c83.png",
        website: "https://stickerninja.com/"
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