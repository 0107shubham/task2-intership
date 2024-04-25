import React from "react";
import { LiaStarOfLifeSolid } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="text-white h-20 flex flex-row justify-around items-center relative bg-transparent z-10 ">
      <div className="flex flex-row items-center ">
        <LiaStarOfLifeSolid className="text-yellow-700 bg" />
        <p>ConsalPro</p>
      </div>
      <p className="">Home</p>
      <p>About</p>
      <p>Projects</p>
      <p>Pages</p>
      <p>Screens</p>
      <p>Blogs</p>
      <IoSearch className="text-2xl" />
      <button className="outline-none rounded-full border-2 text-[ #EEBC5C] border-[#EEBC5C]  px-4 py-2 flex flex-row items-center m-3">
        Get In Touch <IoIosArrowForward className="mx-1 text-[ #EEBC5C] " />
      </button>
      <p className="flex flex-row items-center ">
        <GiHamburgerMenu className="mx-1" />
        Menu
      </p>
    </div>
  );
};

export default Header;
