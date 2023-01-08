import React from "react";
import Navbar from "../Navbar/Navbar";
import {FaDotCircle} from 'react-icons/fa'

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 px-10 py-3 flex w-full min-h-screen flex-col lg:flex-row">
        <div className="w-full  min-h-[350px] flex items-center lg:w-1/2 lg:min-h-full">
          <div className="px-10">
            <h1 className="text-6xl md:text-9xl">
              VOTE<span className="text-purple-700">M</span>
            </h1>
            <h5 className="text-3xl md:text-5xl">
              Democracy on the{" "}
              <span className="text-purple-500">BLOCKCHAIN</span>
            </h5>
          </div>
        </div>

        <div className="min-h-[400px] max-w-full flex items-center justify-end lg:w-1/2 lg:min-h-full ">
          <ul
            className="p-5 text-gray-500 gap-10 max-w-full h-full bg-white  flex items-center justify-center flex-col md:gap-16 lg:w-[95%]"
          >
            <li className="text-sm font-medium w-full shadow-lg border rounded-md max-h-1/3 flex items-center p-3 cursor-pointer hover:animate-pulse lg:w-[80%] lg:text-md">
              <FaDotCircle className="inline text-purple-600 mr-2" />A
              blockchain based decentralized e-voting system
            </li>
            <li className="text-sm  text-white bg-purple-600 font-medium w-[80%] shadow-lg border rounded-md max-h-1/3 flex items-center p-3 ml-auto cursor-pointer hover:animate-pulse lg:w-[80%] lg:text-md">
              <FaDotCircle className="inline text-white mr-2" />
              Ensure Security and Privacy to your votes{" "}
            </li>
            <li className="text-sm font-medium w-full shadow-lg border rounded-md max-h-1/3 flex items-center p-3 cursor-pointer hover:animate-pulse lg:w-[80%] lg:text-md">
              <FaDotCircle className="inline text-purple-600 mr-2" />A More
              Convenience and Auditability
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
