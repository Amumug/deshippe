import React, { useState } from "react";
import logo from "../assets/logo.svg";
import arrow from "../assets/ep_arrow-down.svg";
import world from "../assets/world.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  // nav is starting of false
  const [nav, setNav] = useState(false);

  // so when user clicks the hamburger button, it goes from false(!nav) to true(nav)

  const handleClick = () => setNav(!nav);

  return (
    <>
      <nav className="flex justify-between p-8 items-center ">
        <div className="flex items-center gap-6">
          <img src={logo} alt="" />
          <ul className="hidden md:flex gap-6 text-xl font-medium font-[Inter, sans-serif]  ">
            <Link>
              <li className="justify-start items-end gap-2 inline-flex hover:text-zinc-700">
                Products
                <img src={arrow} />
              </li>
            </Link>
            <Link>
              <li className="justify-start items-end gap-2 inline-flex hover:text-zinc-700">
                Industries
                <img src={arrow} />
              </li>
            </Link>
            <Link>
              <li className="justify-start items-end gap-2 inline-flex hover:text-zinc-700">
                About
                <img src={arrow} />
              </li>
            </Link>
            <Link>
              <li className="hover:text-zinc-700">Pricing</li>
            </Link>
          </ul>
        </div>
        <ul className="hidden lg:flex items-center gap-6 text-xl font-medium font-[Inter, sans-serif] ">
          <Link>
            <li className="hover:text-zinc-700">Contact</li>
          </Link>
          <Link>
            <li className="hover:text-zinc-700">Book a demo</li>
          </Link>
          <Link>
            <li>
              <img src={world} alt="" />
            </li>
          </Link>
        </ul>
        {/* Humburger or Close Icon */}
        <div className="md:hidden z-50" onClick={handleClick}>
          {nav ? <IoClose size={35} color='white'/> : <IoMenu size={35} />}
        </div>
        {/* Mobile Menu */}
        <ul className={`${nav ? 'translate-x-0' : '-translate-y-full'} transition-transform duration-300 fixed top-0 left-0 w-full h-screen bg-zinc-800 text-white flex flex-col justify-center items-center text-xl font-medium font-[Inter, sans-serif] z-40 opacity-90`}>
          <Link>
            <li className="py-2 hover:text-zinc-300">
              Products
            </li>
          </Link>
          <Link>
            <li className="py-2 hover:text-zinc-300">
              Industries
            </li>
          </Link>
          <Link>
            <li className="py-2 hover:text-zinc-300">
              About
            </li>
          </Link>
          <Link>
            <li className="py-2 hover:text-zinc-300">Pricing</li>
          </Link>
          <Link>
            <li className="py-2 hover:text-zinc-300">Contact</li>
          </Link>
          <Link>
            <li className="py-2 hover:text-zinc-300">Book a demo</li>
          </Link>
        </ul>
      </nav>
      
    </>
  );
};

export default Navbar;
