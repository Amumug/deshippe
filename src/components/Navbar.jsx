import React, { useState } from "react";

import logo from "../assets/logo.svg";
import arrow from "../assets/ep_arrow-down.svg";
import world from "../assets/world.svg"
import { FiMenu, FiX } from 'react-icons/fi';

const NavLinks = () => {
  return (
    <>
      <NavLinks>About</NavLinks>
      <NavLinks>About</NavLinks>
      <NavLinks>About</NavLinks>
    </>
  )
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
  <div className="w-full flex flex-col md:flex-row justify-between items-center gap-[20px]">
    <div className="flex justify-start items-center gap-[10px] w-full md:w-auto">
      <img src={logo} alt="logo" className="ml-0 md:ml-auto" />
      <div className="md:hidden flex ml-auto">
            <button onClick={toggleMenu} className="text-3xl">
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
      <div className="hidden md:flex justify-start items-center gap-[22px]">
        <div className="flex justify-start items-center gap-2">
          <div className="text-zinc-800 text-xl font-medium font-['Inter', sans-serif]">Products</div>
          <div className="w-[18px] h-[18px] relative" />
        </div>
        <div className="flex justify-start items-center gap-2">
          <div className="text-zinc-800 text-xl font-medium font-['Inter', sans-serif]">Industries</div>
          <div className="w-[18px] h-[18px] relative" />
        </div>
        <div className="flex justify-start items-center gap-2">
          <div className="text-zinc-800 text-xl font-medium font-['Inter', sans-serif]">About</div>
          <div className="w-[18px] h-[18px] relative" />
        </div>
        <div className="flex justify-start items-center gap-2">
          <div className="text-zinc-800 text-xl font-medium font-['Inter', sans-serif]">Pricing</div>
        </div>
      </div>
    </div>
    <div className="hidden lg:flex flex-col md:flex-row justify-end items-center gap-[20px] mt-4 md:mt-0 md:gap-[40px] ml-auto">
      <div className="flex justify-start items-center gap-2">
        <div className="text-zinc-800 text-xl font-medium font-['Inter', sans-serif]">Contact</div>
      </div>
      <div className="text-zinc-800 text-xl font-medium font-['Inter', sans-serif]">Book a demo</div>
      <div className="relative">
        <img src={world} alt="world" className="w-6 h-6" />
      </div>
    </div>
  </div>
  {isMenuOpen && (
    <div className="flex flex-col items-center">
      <NavLinks/> 
    </div>
  )}
</>

  );
};

export default Navbar;
