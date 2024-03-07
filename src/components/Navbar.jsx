import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes} from "react-icons/fa";
import Logo from "../assets/logo.png";

function Navbar() {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (

        <div className='fixed w-full h-[80px] flex justify-around items-center px-4  bg-[#0a192f] text-gray-300'>

            <div className='h-[px]'>
                <img src={Logo} alt='Logo Image' style={{ width: '250px' }} />
            </div>


            {/* menu */}
            <ul className='hidden md:flex gap-8 cursor-pointer'>
                <li>
                    <Link to='home' smooth={true} duration={400}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='product' smooth={true} duration={400}>
                        Product
                    </Link>
                </li>
                <li>
                    <Link to='service' smooth={true} duration={400}>
                        Service
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={400}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={400}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;