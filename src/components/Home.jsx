import React from 'react'
// import homeImage from "../assets/homeImage.png";
// import yesBank from "../assets/yesBank.png";
// import cureBay from "../assets/cureBay.png";
// import turnPoint from "../assets/turnPoint.png";
// import veritas from "../assets/veritas.png";
import AiImage from "../assets/AiImageHomepage.jpg";

function Home() {
    return (
        <div name="home" className='bg-[#0a192f] w-full overflow-x-hidden bg-cover bg-center h-screen sm:bg-contain sm:bg-left' style={{ backgroundImage: `url(${AiImage})`, backgroundSize: 'cover' }}>

            <div className='max-w-[1600px] flex flex-col mx-auto justify-center h-full'>
                <div className='flex flex-col md:flex-row gap-12'>

                    {/* description */}
                    <div className='sm:px-10'>
                        <h3 className='text-white text-7xl font-extrabold'>AIML Polestar</h3>
                        <p className='text-white text-3xl font-semibold mt-6'>Empowering and Equipping your Organisations by providing World-Class Solutions in the Space of
                        <span className='text-yellow-300'> Advanced Technologies.</span></p>
                    </div>

                    {/*image */}
                    <div className='max-w-full md:w-[1600px] h-auto mx-auto'>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
