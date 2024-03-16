import React from 'react';
import aboutUsImg from "../assets/aboutUs.jpg";
import knowHistory from "../assets/knowOurImage.png";
import firstTeamMember from "../assets/partnershipImg.jpg";

function About() {
    return (
        <div name="about" className='bg-[#0a192f] w-full overflow-x-hidden'>
            <div className='flex bg-black mt-24 '>
                <div className='flex justify-center items-center'>
                    <h3 className='text-white text-9xl font-extrabold p-52'>ABOUT US</h3>
                </div>
                <img src={aboutUsImg} alt="Image of about us page" />
            </div>

            {/* Know our history  */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>

                {/*image */}
                <div className='max-w-full md:w-[1600px] h-auto mx-auto'>
                    <img src={knowHistory} alt="Image" loading='lazy'/>
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto flex flex-col gap-6'>
                    <h3 className='text-[#de909e] text-5xl font-bold'>Know Our History</h3>
                    <p className='text-white text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae sint maxime omnis asperiores ducimus, veritatis suscipit quod harum ipsa illo iste voluptates facere ea ratione odit numquam quia ipsam beatae. Sunt dolorem amet dolor.</p>
                </div>
            </div>

            {/* Our team  */}

            <div className='mt-36 max-w-[1000px] mx-auto'>
                <div className='flex justify-center items-center mt-16 mb-16'>
                        <h3 className='text-5xl font-semibold text-white'>Our Team Members</h3>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                    {/* team member-1  */}
                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        {/* image */}
                        <div className='flex justify-center items-center h-full w-full'>
                            <img src={firstTeamMember} alt=""  className='rounded-full w-[100px] h-[100px]'/>
                        </div>

                        {/* heading/name  */}
                        <h2 className='text-3xl font-bold text-[#de909e] mx-auto'>Bijan Dash</h2>

                        {/* Role */}
                        <h3 className='font-semibold text-xl mx-auto'>CEO and CO-Founder</h3>

                        <p className='w-full leading-6 mx-auto'>Responsible for driving innovation, forging relationship & successful delivery of data projects across client base 20 years of experience with track record of successfully setting up Data Science functions in Goldman Sachs, JP Morgan Chase & Qualcomm; US Patent Holder.</p>
                    </div>
                    
                    {/* team member-2  */}
                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        {/* image */}
                        <div className='flex justify-center items-center h-full w-full'>
                            <img src={firstTeamMember} alt=""  className='rounded-full w-[100px] h-[100px]'/>
                        </div>

                        {/* heading/name  */}
                        <h2 className='text-3xl font-bold text-[#de909e] mx-auto'>Bijan Dash</h2>

                        {/* Role */}
                        <h3 className='font-semibold text-xl mx-auto'>CEO and CO-Founder</h3>

                        <p className='w-full leading-6 mx-auto'>Responsible for driving innovation, forging relationship & successful delivery of data projects across client base 20 years of experience with track record of successfully setting up Data Science functions in Goldman Sachs, JP Morgan Chase & Qualcomm; US Patent Holder.</p>
                    </div>

                    {/* team member-3  */}
                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        {/* image */}
                        <div className='flex justify-center items-center h-full w-full'>
                            <img src={firstTeamMember} alt=""  className='rounded-full w-[100px] h-[100px]'/>
                        </div>

                        {/* heading/name  */}
                        <h2 className='text-3xl font-bold text-[#de909e] mx-auto'>Bijan Dash</h2>

                        {/* Role */}
                        <h3 className='font-semibold text-xl mx-auto'>CEO and CO-Founder</h3>

                        <p className='w-full leading-6 mx-auto'>Responsible for driving innovation, forging relationship & successful delivery of data projects across client base 20 years of experience with track record of successfully setting up Data Science functions in Goldman Sachs, JP Morgan Chase & Qualcomm; US Patent Holder.</p>
                    </div>


                    {/* team meamber-4  */}
                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        {/* image */}
                        <div className='flex justify-center items-center h-full w-full'>
                            <img src={firstTeamMember} alt=""  className='rounded-full w-[100px] h-[100px]'/>
                        </div>

                        {/* heading/name  */}
                        <h2 className='text-3xl font-bold text-[#de909e] mx-auto'>Bijan Dash</h2>

                        {/* Role */}
                        <h3 className='font-semibold text-xl mx-auto'>CEO and CO-Founder</h3>

                        <p className='w-full leading-6 mx-auto'>Responsible for driving innovation, forging relationship & successful delivery of data projects across client base 20 years of experience with track record of successfully setting up Data Science functions in Goldman Sachs, JP Morgan Chase & Qualcomm; US Patent Holder.</p>
                    </div>


                    {/* team member-5  */}
                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        {/* image */}
                        <div className='flex justify-center items-center h-full w-full'>
                            <img src={firstTeamMember} alt=""  className='rounded-full w-[100px] h-[100px]'/>
                        </div>

                        {/* heading/name  */}
                        <h2 className='text-3xl font-bold text-[#de909e] mx-auto'>Bijan Dash</h2>

                        {/* Role */}
                        <h3 className='font-semibold text-xl mx-auto'>CEO and CO-Founder</h3>

                        <p className='w-full leading-6 mx-auto'>Responsible for driving innovation, forging relationship & successful delivery of data projects across client base 20 years of experience with track record of successfully setting up Data Science functions in Goldman Sachs, JP Morgan Chase & Qualcomm; US Patent Holder.</p>
                    </div>

                    {/* team member-6  */}
                    <div className='border-2 border-white rounded-lg text-white p-[2em] flex justiy-center items-start flex-col gap-y-3 hover:bg-[#214392] transition duration-300 cursor-pointer'>
                        {/* image */}
                        <div className='flex justify-center items-center h-full w-full'>
                            <img src={firstTeamMember} alt=""  className='rounded-full w-[100px] h-[100px]'/>
                        </div>

                        {/* heading/name  */}
                        <h2 className='text-3xl font-bold text-[#de909e] mx-auto'>Bijan Dash</h2>

                        {/* Role */}
                        <h3 className='font-semibold text-xl mx-auto'>CEO and CO-Founder</h3>

                        <p className='w-full leading-6 mx-auto'>Responsible for driving innovation, forging relationship & successful delivery of data projects across client base 20 years of experience with track record of successfully setting up Data Science functions in Goldman Sachs, JP Morgan Chase & Qualcomm; US Patent Holder.</p>
                    </div>
                </div>

            </div>



            {/* Why work with us  */}
            <div>
                <div className='flex justify-center items-center mt-16'>
                    <h3 className='text-5xl font-semibold text-white'>Why Work With Us ?</h3>
                </div>

                <div className='max-w-[1000px] mx-auto mt-24'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                        {/* box-1  */}
                        <div className='border-2 border-white rounded-lg p-[2em] text-white flex flex-col gap-3 justify-center items-start hover:scale-110 hover:shadow transition-all duration-800 cursor-pointer hover:bg-[#214392]'>
                            {/* icon  */}
                            <svg _ngcontent-ng-c235455634="" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><path _ngcontent-ng-c235455634="" d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"></path></svg>

                            {/* title  */}
                            <h3 className='text-green-500 text-2xl font-semibold'>Technology</h3>

                            {/* description  */}
                            <p className='text-lg'>We stand as pioneers in cutting-edge technologies, dedicated to addressing our clients' most pressing challenges through the strategic utilization of data, Analytics, artificial intelligence, and machine learning. By joining ByteIQ, you not only gain proficiency in these invaluable skills but also actively engage in applying them to solve real-world issues. </p>
                        </div>
                        

                        {/* box-2 */}
                        <div className='border-2 border-white rounded-lg p-[2em] text-white flex flex-col gap-3 justify-center items-start hover:scale-110 hover:shadow transition-all duration-800 cursor-pointer hover:bg-[#214392]'>
                            {/* icon  */}
                            <svg _ngcontent-ng-c235455634="" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><path _ngcontent-ng-c235455634="" d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"></path></svg>

                            {/* title  */}
                            <h3 className='text-green-500 text-2xl font-semibold'>Technology</h3>

                            {/* description  */}
                            <p className='text-lg'>We stand as pioneers in cutting-edge technologies, dedicated to addressing our clients' most pressing challenges through the strategic utilization of data, Analytics, artificial intelligence, and machine learning. By joining ByteIQ, you not only gain proficiency in these invaluable skills but also actively engage in applying them to solve real-world issues. </p>
                        </div>

                        {/* box-3  */}
                        <div className='border-2 border-white rounded-lg p-[2em] text-white flex flex-col gap-3 justify-center items-start hover:scale-110 hover:shadow transition-all duration-800 cursor-pointer hover:bg-[#214392]'>
                            {/* icon  */}
                            <svg _ngcontent-ng-c235455634="" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><path _ngcontent-ng-c235455634="" d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"></path></svg>

                            {/* title  */}
                            <h3 className='text-green-500 text-2xl font-semibold'>Technology</h3>

                            {/* description  */}
                            <p className='text-lg'>We stand as pioneers in cutting-edge technologies, dedicated to addressing our clients' most pressing challenges through the strategic utilization of data, Analytics, artificial intelligence, and machine learning. By joining ByteIQ, you not only gain proficiency in these invaluable skills but also actively engage in applying them to solve real-world issues. </p>
                        </div>

                        {/* box-4  */}
                        <div className='border-2 border-white rounded-lg p-[2em] text-white flex flex-col gap-3 justify-center items-start hover:scale-110 hover:shadow transition-all duration-800 cursor-pointer hover:bg-[#214392]'>
                            {/* icon  */}
                            <svg _ngcontent-ng-c235455634="" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><path _ngcontent-ng-c235455634="" d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"></path></svg>

                            {/* title  */}
                            <h3 className='text-green-500 text-2xl font-semibold'>Technology</h3>

                            {/* description  */}
                            <p className='text-lg'>We stand as pioneers in cutting-edge technologies, dedicated to addressing our clients' most pressing challenges through the strategic utilization of data, Analytics, artificial intelligence, and machine learning. By joining ByteIQ, you not only gain proficiency in these invaluable skills but also actively engage in applying them to solve real-world issues. </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;