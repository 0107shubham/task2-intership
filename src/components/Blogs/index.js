import React from "react";
import { motion } from "framer-motion";
import { TbIrregularPolyhedron } from "react-icons/tb";
import { GiSilverBullet } from "react-icons/gi";
import { AiFillGolden } from "react-icons/ai";
import { FaRegSquareCheck } from "react-icons/fa6";

const Blogs = () => {
  return (
    <div className="bg-black h-[80vh] w-full ">
      <div className="w-full flex flex-col items-center py-5">
        <p className="text-[#AA7627] text-xs">Blogs & News</p>
        <p className="text-white text-4xl">Our Latest News & Blogs Get </p>
        <p className="text-white text-4xl">Every Updates</p>
      </div>
      <div className="h-[60vh] flex justify-center items-center w-full bg-black">
        <motion.div
          whileHover={{ scale: 1.1 }} // Scale up by 1.25 on hover
          className="w-[22%]  mx-4 h-[70%]  bg-[#1B1718] rounded-lg overflow-hidden"
        >
          <p className="text-white text-xs  m-2  ">
            Est est reprehenderit voluptate
          </p>
          <p className="text-white text-2xl  m-2  ">
            Est est reprehenderit voluptate
          </p>
          <img
            className="w-full h-[75%]"
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1705924585/pexels-rachel-claire-6752433_qdcbkw.jpg"
            alt="blogs"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }} // Scale up by 1.25 on hover
          className="w-[22%]  mx-4 h-[70%]  bg-[#1B1718] rounded-lg overflow-hidden"
        >
          <p className="text-white text-xs  m-2  ">
            Est est reprehenderit voluptate
          </p>
          <p className="text-white text-2xl  m-2  ">
            Est est reprehenderit voluptate
          </p>
          <img
            className="w-full h-[75%]"
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1705924585/pexels-rachel-claire-6752433_qdcbkw.jpg"
            alt="blogs"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }} // Scale up by 1.25 on hover
          className="w-[22%]  mx-4 h-[70%]  bg-[#1B1718] rounded-lg overflow-hidden"
        >
          <p className="text-white text-xs  m-2  ">
            Est est reprehenderit voluptate
          </p>
          <p className="text-white text-2xl  m-2  ">
            Est est reprehenderit voluptate
          </p>
          <img
            className="w-full h-[75%]"
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1705924585/pexels-rachel-claire-6752433_qdcbkw.jpg"
            alt="blogs"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
