import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";

const Review = () => {
  return (
    <div className="h-[70vh] bg-black flex  w-full">
      <div className="w-[50%] h-[100%] ">
        <img
          className="w-[100%] h-[100%] "
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1713975604/flover_mk9kan.jpg"
          alt="flovers"
        />
      </div>
      <div className="w-[50%] flex justify-center items-center h-[100%] ">
        <div className="h-[80%] flex  w-[80%]">
          <div className="w-[30%] flex flex-col justify-center items-center h-[100%]  bg-[#1B1718] ">
            <img
              className="h-16 w-16 m-2 rounded-full"
              src="https://res.cloudinary.com/drvjsegeb/image/upload/v1706796679/auth2_owyahp.png"
              alt="per1"
            />
            <img
              className="h-24 w-24 rounded-full mr-9"
              src="https://res.cloudinary.com/drvjsegeb/image/upload/v1707025674/str3_jcfd6g.jpg"
              alt="per1"
            />
            <img
              className="h-16 w-16 m-2 rounded-full"
              src="https://res.cloudinary.com/drvjsegeb/image/upload/v1706796679/auth2_owyahp.png"
              alt="per1"
            />
          </div>
          <div className="w-[70%] p-6 h-[100%] flex flex-col justify-center bg-[#1B1718]  ">
            <p className="my-6  text-white ">
              Mollit commodo reprehenderit ut ut officia culpa nulla. Fugiat
              proident sunt ea anim tempor. Veniam ad ipsum mollit Lorem non ad
              nulla sunt incididunt magna duis.
            </p>
            <div className="flex justify-between ">
              <div className="w-[50%] ">
                <p className="text-3xl my-1  text-white ">Metin Luther</p>
                <p className="text-1xl  my-1  text-white ">VideoGrapher</p>
                <div className="flex flex-row">
                  <IoArrowBackOutline className="text-5xl text-white border-2 border-gray-500 px-2 py-1" />
                  <IoArrowForwardOutline className="text-5xl  text-white  border-2 border-gray-500 px-2 py-1" />
                </div>
              </div>

              <div className="w-[50%] flex justify-center  text-gray-400  items-center ">
                <RiDoubleQuotesR className="text-7xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
