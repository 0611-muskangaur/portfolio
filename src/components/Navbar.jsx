import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black text-gray-400">
      <div className="h-[100px] max-w-full mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold primary-color ml-4 ">Muskan Gaur</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          <li className="p-5">
            <a href="#about">About</a>
          </li>
          <li className="p-5">
            <a href="#skills">My Skills</a>
          </li>
          <li className="p-5">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className="block md:hidden mr-6 cursor-pointer">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[60%] h-full bg-[#202121] ease-in-out duration-500'
              : 'fixed left-[-100%] top-0 h-full ease-in-out duration-500'
          }
        >
          <h1 className="text-3xl primary-color m-4">Muskan Gaur</h1>
          <ul className="p-8 text-2xl">
            <li className="p-2">
              <a href="#about">About</a>
            </li>
            <li className="p-2">
              <a href="#work">Work</a>
            </li>
            <li className="p-2">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
