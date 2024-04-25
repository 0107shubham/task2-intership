import React from "react";
import { RxCross2 } from "react-icons/rx";
import { BsAlignTop } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { AiFillRobot } from "react-icons/ai";

const styles = {
  fontSize: "170px",
  color: "black",

  textShadow:
    "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white",
};

const Quality = () => {
  return (
    <div className="flex flex-col items-center bg-black  h-[130vh] w-full">
      <div className="  h-[50%] w-full">
        <div className="flex h-[20%] flex-col items-center my-3">
          <p className="text-text-color">Popular Designs</p>
          <h1 className="text-white text-5xl">
            We Provide Amazing <br />
          </h1>
          <h2 className="text-white text-5xl"> Web Solutions</h2>
        </div>
        <div className="flex relative h-[80%] w-full flex-row items-center justify-center">
          <div className=" flex relative flex-col  justify-end h-[75%] mx-1 w-[22%]">
            <div className="bg-[#1a0600]  pl-3  flex flex-col justify-around z-50 h-[75%] w-[70%] absolute right-0 top-0">
              <RxCross2 className="text-text-color text-4xl" />
              <p className="text-white">
                Web Design & <br />
                Development
              </p>
            </div>
            <img
              className="h-[50%] w-full "
              src="https://res.cloudinary.com/drvjsegeb/image/upload/v1704393933/benefits-of-recruitment-process-scaled-1_1_zpywiz.png"
              alt="chair"
            />
          </div>
          <div className="bg-orange-500 flex relative flex-col justify-end  h-[75%] mx-1 w-[22%]">
            <div className="bg-[#1a0600]   pl-3  flex flex-col justify-around z-50 h-[100%] w-[70%] absolute right-0 top-0">
              <BsAlignTop className="text-white text-4xl" />
              <p className="text-white text-xl">
                Id labore
                <br />
                Incididunt eiusmod{" "}
              </p>
              <p className="w-[60%] text-white text-sm">
                Pariatur ex exercitation officia cupidatat nostrud
              </p>
              <div className="bg-amber-600 rounded-full w-[28px]  h-[28px]">
                <MdArrowOutward className="mx-auto my-auto text-white text-2xl" />
              </div>
            </div>
            <img
              className="h-[100%] w-full "
              src="https://res.cloudinary.com/drvjsegeb/image/upload/v1707025669/str2_gimsb5.jpg"
              alt="chair"
            />
          </div>
          <div className=" flex relative flex-col justify-end  h-[75%] mx-1 w-[22%]">
            <div className="bg-[#1a0600]   pl-3  flex flex-col justify-around z-50 h-[75%] w-[70%] absolute right-0 top-0">
              <AiFillRobot className="text-text-color text-4xl" />
              <p className="text-white">
                Ex enim <br /> reprehenderit qui
              </p>
            </div>
            <img
              className="h-[50%] w-full bg-cover "
              src="https://res.cloudinary.com/drvjsegeb/image/upload/v1713856084/istockphoto-2007876967-2048x2048_nsdui4.jpg"
              alt="chair"
            />
          </div>
        </div>
      </div>
      <div className=" h-[50%] flex flex-col justify-center tracking-widest  leading-[90px] w-full">
        <p className="text-white text-[170px] tracking-widest  leading-none   ">
          WEB DESIGN
        </p>
        <p
          className=" flex justify-end m-0 p-0  tracking-widest "
          style={styles}
        >
          COPY WRITTING
        </p>
      </div>
    </div>
  );
};

export default Quality;
