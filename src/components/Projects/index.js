import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="w-full flex flex-col pt-6 items-center bg-black h-[80vh]">
      <div className="inline-block flex w-[15%] flex-row justify-center items-center rounded-full border-2 border-[#AA7627] p-2 ">
        <p className="text-2xl text-[#AA7627]  mx-1">See All projects</p>
        <FiArrowDownRight className="text-2xl " />
      </div>

      <div className="w-full mt-6 flex flex-row h-[50%]">
        <div className="w-[60%] flex flex-col items-start pl-[5%]  h-[60vh] text-white ">
          <div className=" pl-[12%]">
            <p>Key projects</p>
            <p className="my-4 text-3xl">
              Web Design Company <br />
              That You Can Trust
            </p>
          </div>
          <div className="flex  my-5 w-full flex-row justify-around">
            <div>
              <p>DEVELOP NEW PRODUCTS </p>
              <div className="border-t   opacity-25  border-white my-4"></div>

              <p className="text-xs">Ea veniam labore Lorem duis ex ut.</p>
            </div>
            <div>
              <p>GET IN TOUCH THING WAY AHEAD</p>
              <div className="border-t border-white opacity-25 my-4"></div>
              <p className="text-xs">Ea veniam labore Lorem duis ex ut.</p>
            </div>
          </div>

          <div className="flex  w-full  flex-row justify-around">
            <div>
              <p>DEVELOP NEW PRODUCTS </p>
              <div className="border-t  opacity-25  border-white my-4"></div>
              <p className="text-xs">Ea veniam labore Lorem duis ex ut.</p>
            </div>
            <div>
              <p>GET IN TOUCH THING WAY AHEAD</p>
              <div className="border-t  opacity-25  border-white my-4"></div>
              <p className="text-xs">Ea veniam labore Lorem duis ex ut.</p>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center h-[60vh] w-[40%]">
          <div
            className="bg-cover rounded-full h-[70%] flex justify-center items-center w-[50%]  "
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/drvjsegeb/image/upload/v1713856084/istockphoto-2007876967-2048x2048_nsdui4.jpg')",
            }}
          >
            <div className="h-[50%]  flex flex-col justify-center items-center w-[50%] rounded-full bg-zinc-600">
              <p className="text-8xl text-white">30</p>
              <p className="text-white"> years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
