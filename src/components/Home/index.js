import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

import { PiStarFourThin } from "react-icons/pi";
import { IoNavigate } from "react-icons/io5";
import Header from "../Header";

const styles = {
  fontSize: "70px",
  color: "black",

  textShadow:
    "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white",
};

const totalAvatars = 24;
const shownAvatars = 4;
const remainingAvatars = totalAvatars - shownAvatars;

const Home = () => {
  return (
    <div className="h-[100vh]">
      <Header />
      <div className="flex flex-row mx-32 h-[40vh]">
        <div>
          <p className="text-white flex text-7xl flex-row">
            Welcome
            <PiStarFourThin className="text-7xl" />
          </p>
          <p className="text-white text-7xl">
            Develop
            <span
              className="text-7xl font-bold text-transparent mx-5 text-white"
              style={styles}
            >
              Agency
            </span>
          </p>
        </div>
        <div className=" w-full flex  flex-row justify-center opacity-70  bg-gradient-radial">
          <img
            className="h-[70%] text-gray-300 mix-blend-multiply "
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1713971371/spiral4_boavte.jpg"
            alt="spiral"
          />
          {/* <PiSpiralThin /> */}
        </div>
      </div>

      <div className="flex h-[30vh] flex-row ">
        <div className="w-[50%] ml-32">
          <img
            className="rounded-full h-[250px] w-[70%]"
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1706722987/article1_ciaqob.jpg"
            alt="office"
          />
          <div className="relative bottom-32 left-[420px] h-28 w-28 bg-[#EEBC5C] rounded-full flex items-center justify-center">
            <span className="text-black text-lg flex flex-col justify-center items-center font-bold">
              <IoNavigate />
              <p>Explore</p>
              <p>More</p>
            </span>
          </div>
        </div>
        <div className="w-[30%] flex flex-col justify-around  items-center">
          <p className="text-white">
            Lorem cillum ad cupidatat duis laborum ut eu veniam anim ad.Sit est
            et qui quis eiusmod laborum deserunt nisi minim voluptate. Anim
            fugiat quis veniam nisi excepteur do anim velit minim laboris
            commodo nulla nisi. Et dolore eu ut elit Lorem aliqua et labore ut
          </p>
          <div className="h-1 w-full bg-gray-50"></div>
          <div className="flex justify-start w-full">
            <AvatarGroup>
              <Avatar
                style={{ zIndex: "1" }}
                alt="Remy Sharp"
                src="https://res.cloudinary.com/drvjsegeb/image/upload/v1707025674/str3_jcfd6g.jpg"
              />
              <Avatar
                style={{ zIndex: "2" }}
                alt="Travis Howard"
                src="https://res.cloudinary.com/drvjsegeb/image/upload/v1707032669/articleAuthor_r0v9h9.jpg"
              />
              <Avatar
                style={{ zIndex: "3" }}
                alt="Agnes Walker"
                src="https://res.cloudinary.com/drvjsegeb/image/upload/v1707025674/str3_jcfd6g.jpg"
              />
              <Avatar
                style={{ zIndex: "4" }}
                alt="Trevor Henderson"
                src="https://res.cloudinary.com/drvjsegeb/image/upload/v1707032669/articleAuthor_r0v9h9.jpg"
              />
              <Avatar style={{ backgroundColor: "#EEBC5C", zIndex: "5" }}>
                <p>25</p>
              </Avatar>
            </AvatarGroup>
            <div className=" px-2">
              <p className="text-white"> reprehe </p>
              <p className="text-white">aliquip excepteur </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
