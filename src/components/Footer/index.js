import React from "react";
import { LiaStarOfLifeSolid } from "react-icons/lia";
import { MdArrowOutward } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="h-[50vh] px-[15%] w-full flex bg-[#1B1718] ">
      <div className="h-[80%] flex border-b-2 border-[#AA7627] w-[28%]">
        <div className="flex py-[10%] w-full flex-col justify-between">
          <div className="flex flex-row items-center w-[99%] ">
            <LiaStarOfLifeSolid className="text-yellow-700 text-5xl" />
            <p className="text-yellow-700 text-3xl">ConsalPro</p>
          </div>
          <div className=" w-full pl-2 ">
            <p className="text-4xl  my-2  text-white">LET'S WORK </p>
            <p className="text-3xl tracking-widest text-white">TOGETHER </p>
            <button className="bg-transparent flex h-[30%] my-1 w-[80%] justify-center items-center  border border-white rounded-lg px-4 py-2 text-white hover:bg-white hover:text-black transition-colors duration-300">
              Contect Me <MdArrowOutward className="m-1" />
            </button>
          </div>
        </div>
      </div>
      <div className="h-[100%] w-full">
        <div className="h-[80%] border-b-2 border-l-2  border-[#AA7627]  w-[100%]">
          <div className="flex justify-between px-[8%]">
            <div className="flex text-white justify-center items-center mx-1 ">
              <IoMdMail />
              xyz@gmail.com
            </div>
            <div className="flex">
              <p className="flex justify-center  text-white  mx-1 items-center">
                <FaFacebookF />
                facebook
              </p>
              <p className="flex justify-center mx-1  text-white  items-center">
                <FaTwitter />
                Twitter
              </p>
              <p className="flex justify-center mx-1 text-white   items-center">
                <FaLinkedin />
                Linkdin
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-around  text-white  mt-[10%]">
            <div>
              <p>Quick Links</p>
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
            </div>
            <div className="pt-5">
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
            </div>
            <div>
              <p>Quick Links</p>
              <p>Home</p>
              <p>Home</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-[#AA7627] rounded-full flex flex-col items-center justify-center">
                {/* You can add content inside the circle if needed */}
                {/* For example, to add text, you can use the <span> element */}
                <p className="text-black">Message </p>
                <p className="text-black"> Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center  border-l-2 border-[#AA7627] h-[20%]">
          <p className="text-white">
            &copy; 2024 Your Website Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
