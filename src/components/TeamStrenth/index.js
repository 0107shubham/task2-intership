import React from "react";
import { motion } from "framer-motion";

const TeamStrength = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        paddingTop: "50px",
        alignItems: "center",
        height: "80vh",
        backgroundColor: "black",
      }}
    >
      <motion.div
        style={{ marginRight: "-50px" }}
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 5, repeatType: "mirror" }}
      >
        <h1 className="text-6xl text-white flex flex-row">
          DIGITAL DESIGN DEVELOPMENT
        </h1>
      </motion.div>
      <motion.div
        style={{ marginRight: "50px" }}
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ duration: 5, repeatType: "mirror" }}
      >
        <h1 className="text-4xl text-white  flex flex-row">
          {" "}
          UI DESIGN DIGITAL WEB SITE
        </h1>
      </motion.div>

      <div className="flex flex-row justify-around">
        <div className="w-[40%] text-white  ml-11">
          <p className="m-2 text-2xl text-text-color">About Content</p>
          <h1 className="m-2 text-4xl">
            Best Creative & Modern <br />
            Agency{" "}
          </h1>
          <div className="flex flex-row items-center">
            <div className="bg-red-700 w-2 h-20"></div>
            <div className="mx-2">
              Ut deserunt officia laboris velit incididunt enim dolore deserunt
              Lorem exercitation adipisicing adipisicing pariatur do. Tempor
              laboris pariatur mollit Lorem minim deserunt. Est Lorem officia
              tempor incididunt. Reprehenderit laborum et est laboris culpa in
              ipsum.
            </div>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <div>
              <p className="text-5xl">48</p>
              <p>Expert Team Member</p>
            </div>
            <div>
              <p className="text-5xl">30+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="w-[40%] flex justify-center">
          <img
            style={{
              clipPath:
                " polygon(0% 19.25%, 26.5% 0%, 50.39% 15.63%, 26.5% 65.33%, 50.71% 19.25%, 52.71% 41.96%, 63.04% 32.76%, 45.56% 72.94%, 46.25% 43.53%, 26.5% 65.33%, 0% 54.75%)",
            }}
            className=" h-[350px] w-[90%]"
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1706722987/article1_ciaqob.jpg"
            alt="office"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamStrength;
