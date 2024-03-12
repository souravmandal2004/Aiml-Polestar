import React from 'react';
import serviceImg from "../assets/imageForServices.png";
import subService1 from "../assets/sub-service-1.png";
import subService2 from "../assets/sub-service-2.png";
import subService3 from "../assets/sub-service-3.png";
import subService4 from "../assets/sub-service-4.png";
import subService5 from "../assets/sub-service-5.png";
import subService6 from "../assets/sub-service-6.png";
import partnershipImg from "../assets/partnershipImg.jpg";

function Services() {
    return (
        <div name="service" className='bg-[#0a192f] w-full overflow-x-hidden'>

            {/* title and image */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>

                {/* description */}
                <div className='sm:px-10 mx-auto'>
                    <p className='text-[#CCD6F6] text-3xl py-12'> Precision Engineering for Data Excellence </p>
                </div>

                {/*image */}
                <div className='max-w-full md:w-[1600px] h-auto mx-auto'>
                    <img src={serviceImg} alt="Image" loading='lazy' />
                </div>
            </div>

            {/* Highlights section */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1000px] mx-auto gap-10 mt-24'>
                {/* box-1  */}
                <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-center flex-col gap-y-3'>
                    <h3 className='text-2xl text-[#de909e] font-semibold'>Cloud-Native Expertise </h3>
                    <p>Expertly integrating cloud platforms for agile, scalable data transformations, ensuring cutting-edge cloud data engineering </p>
                </div>
                {/* box-2  */}
                <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-center flex-col gap-y-3'>
                    <h3 className='text-2xl text-[#de909e] font-semibold'>Enhanced Data Warehousing  </h3>
                    <p>Tailored design for advanced analytics and smarter decision-making </p>
                </div>

                {/* box-3  */}
                <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-center flex-col gap-y-3'>
                    <h3 className='text-2xl text-[#de909e] font-semibold'>Data Quality Assurance</h3>
                    <p>Ensure accuracy and reliability with our management strategies, preventing errors. . Instant Insights: Utilize real-time data tech for actionable operational impact</p>
                </div>

                {/* box-4  */}
                <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-center flex-col gap-y-3'>
                    <h3 className='text-2xl text-[#de909e] font-semibold'>AI-Ready ETL Mastery </h3>
                    <p>Building efficient, AI-compatible data foundations with our ETL expertise, preparing for future tech and analytics advancements.</p>
                </div>
            </div>


            {/* Sub Services */}

            <div className='mt-36 max-w-[1000px] mx-auto'>
                <h3 className='text-4xl text-white flex justify-center items-center mb-12'>Sub Services</h3>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <img src={subService1} alt="" loading='lazy' />
                        <h3 className='text-2xl text-[#de909e] font-semibold'>Data Pipelines</h3>
                        <p>Craft Seamless Data Flows: Our data pipeline services empower you to effortlessly move, transform, and manage data from diverse sources. Whether structured or unstructured, batch or real-time, we design and implement pipelines that ensure a continuous and reliable flow of data. By optimizing data movement and transformation, we enable you to derive real-time insights and make informed decisions faster.</p>
                    </div>

                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <img src={subService2} alt="" loading='lazy' />
                        <h3 className='text-2xl text-[#de909e] font-semibold'>Web-Scale Automation</h3>
                        <p>Unleash Operational Efficiency: Manual tasks can slow down your operations. Our web-scale automation solutions eliminate bottlenecks by automating data-related processes from ingestion to deployment. This not only boosts efficiency but also enables seamless scaling, allowing your systems to adapt dynamically to changing demands without human intervention.</p>
                    </div>

                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <img src={subService3} alt="" loading='lazy' />
                        <h3 className='text-2xl text-[#de909e] font-semibold'>Security & Governance</h3>
                        <p>Fortify Data Assets: In the age of data breaches and compliance requirements, data security and governance are paramount. We provide end-to-end security solutions that safeguard your data throughout its lifecycle. Our robust governance frameworks ensure that your data is managed ethically, accurately, and in compliance with industry regulations. </p>
                    </div>

                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <img src={subService4} alt="" loading='lazy' />
                        <h3 className='text-2xl text-[#de909e] font-semibold'>Cloud Integration</h3>
                        <p>End to end escrow automation functionality, from contract management to transaction and party execution. Stitched together upstream and downstream API journeys to integrate with the bank’s core systems and automate accounting. Automated reconciliation, budget tracking and reporting including offering lean operations teams the ability to manage exceptions </p>
                    </div>

                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <img src={subService5} alt="" loading='lazy' />
                        <h3 className='text-2xl text-[#de909e] font-semibold'>ETL Expertise</h3>
                        <p>Mastering Data Transformation: Extract, transform, load (ETL) processes are where raw data transforms into actionable insights. Our ETL expertise ensures that data is extracted accurately, transformed comprehensively, and loaded seamlessly into target systems. This ensures the quality and consistency of data for downstream consumption.</p>
                    </div>

                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        <img src={subService6} alt="" loading='lazy' />
                        <h3 className='text-2xl text-[#de909e] font-semibold'>Data Quality Management</h3>
                        <p>Data Accuracy and Consistency: Poor data quality can lead to costly mistakes and inaccurate insights. Our data quality management strategies encompass data profiling, cleansing, enrichment, and monitoring. By maintaining data accuracy and consistency, we prevent errors from propagating downstream and empower you to make sound decisions.</p>
                    </div>
                </div>
            </div>

            {/* Partnership  */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>

                {/* description */}
                <div className='sm:px-10 mx-auto flex flex-col gap-6'>
                    <h3 className='text-[#de909e] text-4xl font-bold'>Databricks Partnership</h3>
                    <p className='text-white'>Explore advanced data solutions through the strategic collaboration of DataNimbus, Inc. and Databricks. Uniting expertise, we reshape data utilization for insights and innovation.</p>
                    <button className='text-black border-2 p-2 rounded-lg bg-[#f6abb9] hover:bg-[#e9afbb] transition-all duration-300'>Know More</button>
                </div>

                {/*image */}
                <div className='max-w-full md:w-[1600px] h-auto mx-auto'>
                    <img src={partnershipImg} alt="Image" loading='lazy' className='rounded-lg ' width={500} />
                </div>
            </div>

        </div>
    );
}
export default Services;