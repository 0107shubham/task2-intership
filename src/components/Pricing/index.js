import React from "react";
import { motion } from "framer-motion";
import { TbIrregularPolyhedron } from "react-icons/tb";
import { GiSilverBullet } from "react-icons/gi";
import { AiFillGolden } from "react-icons/ai";
import { FaRegSquareCheck } from "react-icons/fa6";

const Pricing = () => {
  return (
    <div className="bg-black h-[80vh] w-full ">
      <div className="w-full flex flex-col items-center py-5">
        <p className="text-white text-4xl">Pricing Package For </p>
        <p className="text-white text-4xl">All Web Design</p>
      </div>
      <div className="h-[60vh] flex justify-center items-center w-full bg-black">
        <motion.div
          whileHover={{ scale: 1.1 }} // Scale up by 1.25 on hover
          className="w-[20%] mx-4 h-[80%] pl-4 pt-6 bg-[#1B1718]  m-2 rounded-lg overflow-hidden"
        >
          <TbIrregularPolyhedron className="text-4xl text-white " />
          <p className="text-xl text-white">Regular Package</p>
          <p className="text-xl  text-white my-2">
            $ <span className="text-3xl  text-white">20.0</span>/ design
          </p>
          <p className="flex  text-white  my-1 items-center">
            <FaRegSquareCheck className=" mr-1 text-[#AA7627]" />
            Amet esse esse cupidatat{" "}
          </p>
          <p className="flex text-white  my-1  items-center">
            <FaRegSquareCheck className=" mr-1 text-[#AA7627]" />
            Amet esse esse cupidatat{" "}
          </p>
          <p className="flex  text-white my-1  items-center">
            <FaRegSquareCheck className=" mr-1 text-[#AA7627]" />
            Amet esse esse cupidatat{" "}
          </p>
          <p className="flex   text-white my-1 items-center">
            <FaRegSquareCheck className=" mr-1 text-[#AA7627]" />
            Amet esse esse cupidatat{" "}
          </p>
          <p className="flex  text-white my-1  items-center">
            <FaRegSquareCheck className=" mr-1 text-[#AA7627]" />
            Amet esse esse cupidatat{" "}
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }} // Scale up by 1.25 on hover
          className="w-[20%] mx-4 h-[80%] pl-4 pt-6 bg-[#1B1718]  m-2 rounded-lg overflow-hidden"
        >
          <GiSilverBullet className="text-4xl text-[#AA7627]" />
          <p className="text-xl text-white">Silver Package</p>
          <p className="text-xl text-white my-2">
            $ <span className="text-3xl">20.0</span>/ design
          </p>
          <p className="flex  text-white my-1 items-center">
            <FaRegSquareCheck className=" mr-1 text-[#AA7627]" />
            Amet esse esse cupidatat{" "}
          </p>
          <p className="flex  text-white my-1  items-center">
            <FaRegSquareCheck className=" mr-1 text-[#AA7627]" />
            Amet esse esse cupidatat{" "}
          </p>
          <p className="flex  text-white my-1  items-center">
            <FaRegSquareCheck className=" mr-1 text-[#AA7627]" />
            Amet esse esse cupidatat{" "}
          </p>
          <p className="flex  text-white  my-1 items-center">
            <FaRegSquareCheck className=" mr-1 text-[#AA7627]" />
            Amet esse esse cupidatat{" "}
          </p>
          <p className="flex  text-white my-1  items-center">
            <FaRegSquareCheck className=" mr-1 text-[#AA7627]" />
            Amet esse esse cupidatat{" "}
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }} // Scale up by 1.25 on hover
          className="w-[20%] mx-4 h-[80%] pl-4 pt-6 bg-[#1B1718]   m-2 rounded-lg overflow-hidden"
        >
          <AiFillGolden className="text-4xl text-white" />
          <p className="text-xl text-white">Golden Package</p>
          <p className="text-xl text-white my-2">
            $ <span className="text-3xl">20.0</span>/ design
          </p>
          <p className="flex  text-white my-1 items-center">
            <FaRegSquareCheck className=" mr-1 text-[#AA7627]" />
            Amet esse esse cupidatat{" "}
          </p>
          <p className="flex  text-white my-1  items-center">
            <FaRegSquareCheck className=" mr-1 text-[#AA7627]" />
            Amet esse esse cupidatat{" "}
          </p>
          <p className="flex  text-white my-1  items-center">
            <FaRegSquareCheck />
            Amet esse esse cupidatat{" "}
          </p>
          <p className="flex   text-white my-1 items-center">
            <FaRegSquareCheck className=" mr-1 text-[#AA7627]" />
            Amet esse esse cupidatat{" "}
          </p>
          <p className="flex  my-1 text-white  items-center">
            <FaRegSquareCheck className=" mr-1 text-[#AA7627]" />
            Amet esse esse cupidatat{" "}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
