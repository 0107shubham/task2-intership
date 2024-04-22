import React from "react";

const Quality = () => {
  return (
    <div className="flex flex-col items-center bg-yellow-400 h-[100%] w-full">
      <div className="flex flex-col items-center my-3">
        <p>Popular Designs</p>
        <h1 className="text-white text-5xl">
          We Provide Amazing <br />
        </h1>
        <h2 className="text-white text-5xl"> Web Solutions</h2>
      </div>
      <div className="flex relative h-[80%] w-full flex-row justify-center">
        <div className="bg-orange-500 flex relative flex-col justify-end h-[30%] mx-1 w-[22%]">
          <div className="bg-black z-50 h-[70%] w-[70%] absolute right-0 top-0">
            <p className="text-white"></p>
          </div>
          <img
            className="h-[50%] w-full "
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1704393933/benefits-of-recruitment-process-scaled-1_1_zpywiz.png"
            alt="chair"
          />
        </div>
        <div className="bg-orange-500 h-[30%] mx-1  w-[22%]">hii</div>
        <div className="bg-orange-500 h-[30%] mx-1  w-[22%]">hii</div>
      </div>
    </div>
  );
};

export default Quality;
