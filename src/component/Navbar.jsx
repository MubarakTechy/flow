import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { RiCloseLargeFill } from "react-icons/ri";
import mad1 from "../image/forest (3).png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='fixed w-full bg-[#022C22] p-5'>
            <div className='flex items-center justify-between'>
                <img src={mad1} alt="" className='h-[35px]' />
                {/* Desktop Menu */}
                <ul className='hidden md:flex font-bold text-[20px] text-white cursor-pointer gap-8'>
                    <li className='hover:text-[#BEF264]'>Team</li>
                    <li className='hover:text-[#BEF264]'>Solution</li>
                    <li className='hover:text-[#BEF264]'>Blog</li>
                </ul> 
                <button className='hidden md:block font-bold p-2 rounded-[15px] text-white hover:text-[#BEF264] border-solid border-2 border-white'>
                Get In Touch
                </button>
                
                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className='md:hidden text-white'>
                {isOpen ? <RiCloseLargeFill /> : <IoIosMenu />}
                </button>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden mt-4'>
                <ul className='flex flex-col font-bold text-[20px] text-white cursor-pointer gap-4'>
                    <li className='hover:text-[#BEF264]'>Team</li>
                    <li className='hover:text-[#BEF264]'>Solution</li>
                    <li className='hover:text-[#BEF264]'>Blog</li>
                </ul>
                <button className='font-bold p-2 mt-4 rounded-[15px] text-white hover:text-[#BEF264] border-solid border-2 border-white w-full'>
                    Get In Touch
                </button>
                </div>
            )}
    </nav>
  );
};

export default Navbar;