import React from 'react'
import homeImage from "../assets/homeImage.png";

function Home() {
    return (
        <div  name="home" className='bg-[#0a192f] w-full h-screen'>

            <div className='max-w-[1000px] flex flex-col mx-auto justify-center h-full'>
                <div className='flex flex-col md:flex-row gap-12'>

                    {/* description */}
                    <div className='sm:px-10 mx-auto'>
                        <p className='text-[#CCD6F6] text-3xl py-12'>Empowering Financial Institutions and Enterprises through <span className='text-[#de909e]'>paym﻿ent modernization, data and AI advancements </span> for net-new revenue, operational efficiency, and risk mitigation.</p>
                    </div>

                    {/*image */}
                    <div className='max-w-full md:w-[1600px] h-auto mx-auto'>
                        <img src={homeImage} alt="Image" loading='lazy'/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;