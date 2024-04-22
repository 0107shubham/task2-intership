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
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <IoSearch />
      <button className="outline-none border flex flex-row items-center m-3">
        Get In Touch <IoIosArrowForward className="mx-1" />
      </button>
      <p className="flex flex-row items-center ">
        <GiHamburgerMenu className="mx-1" />
        Menu
      </p>
    </div>
  );
};

export default Header;
