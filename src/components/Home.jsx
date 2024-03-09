import React from 'react'
import homeImage from "../assets/homeImage.png";
import yesBank from "../assets/yesBank.png";
import cureBay from "../assets/cureBay.png";
import turnPoint from "../assets/turnPoint.png";
import veritas from "../assets/veritas.png";

function Home() {
    return (
        <div  name="home" className='bg-[#0a192f] w-full h-screen overflow-x-hidden'>

            <div className='max-w-[1000px] flex flex-col mx-auto justify-center h-full'>
                <div className='flex flex-col md:flex-row gap-12'>

                    {/* description */}
                    <div className='mt-24 sm:px-10 mx-auto'>
                        <p className='text-[#CCD6F6] text-3xl py-12'>Empowering Financial Institutions and Enterprises through <span className='text-[#de909e]'>paym﻿ent modernization, data and AI advancements </span> for net-new revenue, operational efficiency, and risk mitigation.</p>
                    </div>

                    {/*image */}
                    <div className='max-w-full md:w-[1600px] h-auto mx-auto'>
                        <img src={homeImage} alt="Image" loading='lazy'/>
                    </div>
                </div>

                <div>
                {/* Trusted by  */}
                    <div className='flex justify-center items-center mt-20'>
                        {/* button  */}
                        <button className='border-2 border-red-900 text-white rounded-full p-3 bg-red-500 cursor-pointer hover:bg-red-900 transition duration-300'>
                            Trusted by Industry Leaders 
                        </button>
                    </div>

                    {/* Name of the companies  */}
                    <div className='flex flex-row mt-12  gap-24 mx-auto'>
                        <img src={yesBank} alt="image of yes bank" className='hidden md:flex' loading='lazy'/>
                        <img src={cureBay} alt="image of cure bay"  className='hidden md:flex' loading='lazy'/>
                        <img src={turnPoint} alt="image of turn point" loading='lazy'/>
                        <img src={veritas} alt="image of veritas"  loading='lazy'/>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Home;