import React from "react";
import logo from "../assets/logo.svg";
import arrow from "../assets/ep_arrow-down.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="" />
        <div className=" justify-start items-end gap-2 inline-flex">
          <p className="text-zinc-800 text-xl font-medium font-[Inter, sans-serif]">
            Products
          </p>
          <img src={arrow} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
