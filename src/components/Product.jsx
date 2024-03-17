import React from 'react';
import productImg from "../assets/product.jpg";

function Product() {
    return (



        <div name="product" className='bg-[#0a192f] w-full overflow-x-hidden'>

            <div className="mt-20 h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${productImg})` }}>
            </div>


            {/* Use Case Delivered  */}
            <div className='mt-36 max-w-[1000px] mx-auto'>
                <h3 className='text-5xl text-[#de909e] flex justify-center items-center mb-12 font-bold'>Use Case Delivered</h3>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xl'>

                    {/* first  */}
                    <div className='border-white border-2 p-[2em] rounded-lg  hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <p className='text-white font-semibold'>Transaction Fraud Detection</p>
                    </div>

                    {/* second */}
                    <div className='border-white border-2 p-[2em] rounded-lg  hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <p className='text-white font-semibold'>Early Settlement Prediction</p>
                    </div>
                    {/* third */}
                    <div className='border-white border-2 p-[2em] rounded-lg  hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <p className='text-white font-semibold'>New Customer Acquisition</p>
                    </div>

                    {/* fourth */}
                    <div className='border-white border-2 p-[2em] rounded-lg  hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <p className='text-white font-semibold'>Electrical Equipment Failure Prediction</p>
                    </div>

                    {/* fifth */}
                    <div className='border-white border-2 p-[2em] rounded-lg  hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <p className='text-white font-semibold'>Lifespan calculation of Thermal Component</p>
                    </div>

                    {/* sixth */}
                    <div className='border-white border-2 p-[2em] rounded-lg  hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <p className='text-white font-semibold'>Data Lake Design for a Retail Platform</p>
                    </div>

                    {/* seventh */}
                    <div className='border-white border-2 p-[2em] rounded-lg  hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <p className='text-white font-semibold'>Patient 360 for Leading Healthcare Institution</p>
                    </div>

                    {/* eight */}
                    <div className='border-white border-2 p-[2em] rounded-lg  hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <p className='text-white font-semibold'>GenAI Implementation for Operational Efficiency</p>
                    </div>

                    {/* Ninth  */}
                    <div className='border-white border-2 p-[2em] rounded-lg  hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <p className='text-white font-semibold'>SQLBot to empower operations to query database Financial plan using NLP</p>
                    </div>

                    {/* Tenth  */}
                    <div className='border-white border-2 p-[2em] rounded-lg  hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <p className='text-white font-semibold'>Medical Report Analysis using GenAI</p>
                    </div>

                    {/* Eleventh  */}
                    <div className='border-white border-2 p-[2em] rounded-lg  hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <p className='text-white font-semibold'>Personal Health Assistance using GenAI</p>
                    </div>

                    {/* Twelve  */}
                    <div className='border-white border-2 p-[2em] rounded-lg  hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <p className='text-white font-semibold'>Patient Health Score</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;