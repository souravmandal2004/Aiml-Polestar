import React from 'react';
import productImage from "../assets/productImage.jpg";
import useCasesImg from "../assets/use-cases.png";

function Product() {
    return (
        <div name="product" className='bg-[#0a192f] w-full overflow-x-hidden'>

            {/* Heading of the Product */}
            <div className='flex justify-center items-center mt-20'>
                <h2 className='text-4xl font-bold text-white underline'>Product</h2>
            </div>

            {/* title and image */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>

                {/* description */}
                <div className='sm:px-10 mx-auto flex flex-col gap-6'>
                    <h3 className='text-[#de909e] text-4xl font-bold'>Unlock Operational Excellence and Revenue Growth</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae sint maxime omnis asperiores ducimus, veritatis suscipit quod harum ipsa illo iste voluptates facere ea ratione odit numquam quia ipsam beatae. Sunt dolorem amet dolor.</p>
                </div>
                {/*image of the product */}
                <div className='max-w-full md:w-[1600px] h-auto mx-auto'>
                    <img src={productImage} alt="Image" loading='lazy'/>
                </div>
            </div>

            {/* Highlights */}
            <div>
                {/* heading  */}
                <div className='flex justify-center items-center mt-24'>
                    <h2 className='text-4xl font-bold text-white underline'>Highlights</h2>
                </div>

                {/* total 6 boxes */}
                <div className='mt-12 max-w-[1000px] mx-auto'>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {/* box-1  */}
                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] hover:border-pink-900 transition duration-300 cursor-pointer'>
                        <h3 className='text-2xl text-[#de909e] font-semibold'>Financial Solutions</h3>
                        <p>We offer Escrow account in Sectors like Real Estate,Trust and Retention Account, Foreign Direct Investment, Project Financing, Mergers and Acquisition and many more.</p>
                    </div>

                    {/* box-2  */}
                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] hover:border-pink-900 transition duration-300 cursor-pointer'>
                        <h3 className='text-2xl text-[#de909e] font-semibold'>Tailor Made</h3>
                        <p>Our escrow platform offers configurable products tailored to meet diverse banking requirements.</p>
                    </div>

                    {/* box-3  */}
                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] hover:border-pink-900 transition duration-300 cursor-pointer'>
                        <h3 className='text-2xl text-[#de909e] font-semibold'>Dynamic Payment and Retention Plans</h3>
                        <p>Adapt to complex payment, retention, and surplus instructions with varied frequencies, all automated for ultimate convenience.</p>
                    </div>

                    {/* box-4  */}
                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] hover:border-pink-900 transition duration-300 cursor-pointer'>
                        <h3 className='text-2xl text-[#de909e] font-semibold'>Streamlined Budget and Risk Management</h3>
                        <p>Automated budgeting tools for TRA and Project Finance coupled with advanced features like 6-eye workflow and deferral tracking ensure top-tier risk management.</p>
                    </div>

                    {/* box-5  */}
                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] hover:border-pink-900 transition duration-300 cursor-pointer'>
                        <h3 className='text-2xl text-[#de909e] font-semibold'>Compliance Simplified</h3>
                        <p>Robust reports and reconciliation tools make adhering to regulatory guidelines a breeze, offering you peace of mind in compliance.</p>
                    </div>

                    {/* box-6  */}
                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] hover:border-pink-900 transition duration-300 cursor-pointer'>
                        <h3 className='text-2xl text-[#de909e] font-semibold'>Empowered User Experience</h3>
                        <p>A self-service customer portal with single sign-on capabilities allows for easy view and initiation of transactions, requiring approvals for secure pay-ins and pay-outs lorem100 </p>
                    </div>
                    </div>
                </div>
            </div>

            {/* Use cases  */}
            <div className='flex flex-col justify-center items-center mt-16 max-w-[700px] mx-auto'>
                <h2 className='text-4xl font-bold text-white'>Use Cases</h2>
                <p className='font-semibold text-white mt-6'>With the DataNimbus FinHub platform, we offer a whole range of escrow management. The platform structures complex payment contracts, manages relationships amongst parties, and automates payments associated with the contracts – all under one roof.</p>
            </div>

            {/* boxes for use cases  */}
            <div className='mt-12 max-w-[1000px] mx-auto'>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                        {/* box-1  */}
                        <div className='border-r-2 border-b-2 border-red-900'>
                            <div className='text-white p-[2em] flex justiy-center items-start flex-col gap-y-3'>
                                <img src={useCasesImg} loading='lazy' />
                                <h3 className='text-2xl text-[#de909e] font-semibold'>Empowered User Experience</h3>
                                <p>Automate movement of money between e-commerce platforms, aggregators, merchants, logistic partners, payment gateways, etc.</p>
                            </div>
                        </div>

                        {/* box-2  */}
                        <div className='border-l-2 border-b-2 border-r-2 border-red-900'>
                            <div className='text-white p-[2em] flex justiy-center items-start flex-col gap-y-3'>
                                    <img src={useCasesImg} loading='lazy' />
                                    <h3 className='text-2xl text-[#de909e] font-semibold'>Empowered User Experience</h3>
                                    <p>Automate movement of money between e-commerce platforms, aggregators, merchants, logistic partners, payment gateways, etc.</p>
                            </div>
                        </div>

                        {/* box-3  */}
                        <div className='border-l-2 border-b-2 border-red-900'>
                            <div className='text-white p-[2em] flex justiy-center items-start flex-col gap-y-3'>
                                        <img src={useCasesImg} loading='lazy' />
                                        <h3 className='text-2xl text-[#de909e] font-semibold'>Empowered User Experience</h3>
                                        <p>Automate movement of money between e-commerce platforms, aggregators, merchants, logistic partners, payment gateways, etc.</p>
                            </div>
                        </div>

                        {/* box-4  */}
                        <div className='border-t-2 border-r-2 border-red-900'>
                            <div className='text-white p-[2em] flex justiy-center items-start flex-col gap-y-3'>
                                        <img src={useCasesImg} loading='lazy' />
                                        <h3 className='text-2xl text-[#de909e] font-semibold'>Empowered User Experience</h3>
                                        <p>Automate movement of money between e-commerce platforms, aggregators, merchants, logistic partners, payment gateways, etc.</p>
                            </div>
                        </div>

                        {/* box-5  */}
                        <div className='border-t-2 border-r-2 border-l-2 border-red-900'>
                            <div className='text-white p-[2em] flex justiy-center items-start flex-col gap-y-3'>
                                        <img src={useCasesImg} loading='lazy' />
                                        <h3 className='text-2xl text-[#de909e] font-semibold'>Empowered User Experience</h3>
                                        <p>Automate movement of money between e-commerce platforms, aggregators, merchants, logistic partners, payment gateways, etc.</p>
                            </div>
                        </div>

                        {/* box-6  */}
                        <div className='border-l-2 border-t-2 border-red-900'>
                            <div className='text-white p-[2em] flex justiy-center items-start flex-col gap-y-3'>
                                        <img src={useCasesImg} loading='lazy' />
                                        <h3 className='text-2xl text-[#de909e] font-semibold'>Empowered User Experience</h3>
                                        <p>Automate movement of money between e-commerce platforms, aggregators, merchants, logistic partners, payment gateways, etc.</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Product;