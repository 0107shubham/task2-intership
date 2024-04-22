import React from "react";
import Header from "../Header";
import { PiStarFourThin } from "react-icons/pi";
import { IoNavigate } from "react-icons/io5";
import { PiSpiralThin } from "react-icons/pi";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row mx-32">
        <div>
          <p className="text-white flex text-7xl flex-row">
            Welcome
            <PiStarFourThin className="text-7xl" />
          </p>
          <p className="text-white text-7xl">
            Develop
            <span
              className="text-7xl font-bold text-transparent mx-5 text-white"
              style={{ WebkitTextStroke: "2px white", textStroke: "2px white" }}
            >
              Agency
            </span>
          </p>
        </div>
        <div className=" w-full flex flex-row justify-center bg-gradient-radial">
          <PiSpiralThin className="text-[250px] text-gray-300 " />
        </div>
      </div>
      <div className="flex flex-row bg-orange-600">
        <div className="w-[50%] ml-32 bg-yellow-400">
          <img
            className="rounded-full h-[250px] w-[70%]"
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1706722987/article1_ciaqob.jpg"
            alt="office"
          />
          <div className="relative bottom-32 left-[420px] h-28 w-28 bg-icon-bg rounded-full flex items-center justify-center">
            {/* Content inside the circle */}
            <span className="text-black text-lg flex flex-col justify-center font-bold">
              <IoNavigate />
              <p>Explore</p>
              <p>More</p>
            </span>
          </div>
        </div>
        <div className="w-[30%] flex flex-col justify-star items-center bg-orange-800">
          <p className="text-white">
            Lorem cillum ad cupidatat duis laborum ut eu veniam anim ad.Sit est
            et qui quis eiusmod laborum deserunt nisi minim voluptate. Anim
            fugiat quis veniam nisi excepteur do anim velit minim laboris
            commodo nulla nisi. Et dolore eu ut elit Lorem aliqua et labore ut
          </p>
          <div className="h-1 w-full bg-gray-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
