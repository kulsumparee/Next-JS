import React, { useState, useEffect } from 'react'
import * as style from './Styled'
import Logo from "../../Assests/Logo/Frame.svg"
import Image from 'next/image'
import { FaBars } from 'react-icons/fa';

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

 


    return (

        // Updated Index.jsx with Tailwind CSS for responsiveness
        <style.NavContent className="bg-teal-500 text-white flex items-center justify-between p-4 lg:flex md:flex lg:flex-1 ">

            <div className={`lg:hidden block absolute justify-center text-center left-[50%] z-10 top-[25%] w-[50%] h-80  bg-black transition ${menuOpen ? 'block' : 'hidden'} `}>
                <ul  className=''>
                    <li className='my-4 py-4  border-b border-slate-600 hover:bg-slate-200 hover:text-black hover:rounded cursor-pointer'>Services</li>
                    <li className='my-4 py-4 border-b border-slate-600 hover:bg-slate-200 hover:text-black  hover:rounded cursor-pointer'>Our Team</li>
                    <li className='my-4 py-4 border-b border-slate-600 hover:bg-slate-200 hover:text-black  hover:rounded cursor-pointer'>Contact Us</li>

                </ul>
            </div>

            <style.ListItems className="flex items-center">
                <Image src={Logo} alt='logo' width={68} height={68} layout='fixed' />
                <style.Heading className="ml-4">Logo</style.Heading>
            </style.ListItems>
            <ul className=" gap-6 cursor-pointer hidden lg:flex   ">
                <li>Services</li>
                <li>Our Team</li>
                <li>Contact Us</li>

            </ul>

            <div className="block lg:hidden transition">
                <FaBars onClick={toggleMenu} className="cursor-pointer" />
            </div>
        </style.NavContent>

    );
}

export default NavBar
