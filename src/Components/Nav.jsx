import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo White.png";

const Nav = () => {
  return (
    <div>
      <div className=" w-[80%] m-auto p-[25px] flex justify-between items-center lg:w-[90%] md:px-[10px]">
        <Link to="/" className=" w-[15%] md:w-[25%]">
          <img src={Logo} alt="" className=" w-full" />
        </Link>
        <div className=" flex gap-10 items-center text-sm md:gap-5 md:text-[10px]">
          <Link to="/" className=" text-white hover:text-[#b1cbf5]">
            Home
          </Link>
          <Link to="/coolStuff" className=" text-white hover:text-[#b1cbf5]">
            Cool Stuff
          </Link>
          <a
            href="https://wa.me/+2348020554163"
            target="_blank"
            rel="noreferrer"
            className=" text-white hover:text-[#b1cbf5]"
          >
            Let's Chat
          </a>
        </div>
      </div>
      <hr className=" bg-[#b1cbf5] outline-none border-none h-[1px]" />
    </div>
  );
};

export default Nav;
