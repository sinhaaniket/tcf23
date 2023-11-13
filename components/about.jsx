import React from "react";
import Button from "./button";

function About() {
  return (
    <>
    <div className="md:flex-row justify-center items-center bg-gradient-to-br from-fuchsia-950 to-fuchsia-900 flex md:w-screen flex-col w-screen">
      <div className="md:flex md:flex-col md:pl-16 md:pt-32 md:h-screen md:w-2/3 ">
        <p className="text-white text-2xl font-normal h-24 text-center md:text-left">Experience</p>
        <p className="font-bold text-7xl text-white h-36 w-max">LOREM IPSUM</p>
        <p className="text-white text-2xl font-normal text-center md:text-left pb-36">
          LOREM IPSUM
        </p>
        <div className="flex pb-8">
        <div className="flex flex-col mr-8">
        <img src="/bxs_cube.png" alt="" className="h-16 w-16"/>
            <p className="font-bold text-2xl text-white w-64">Technical</p>
            <p className="w-64 text-white">
              Experience the latest advancements in technology through
              workshops, competitions, and exhibitions.
            </p>
            </div>
            <div className="flex flex-col">
          <img src="/bxs_cube.png" alt="" className="h-16 w-16" />
            <p className="font-bold text-2xl text-white w-64">Cultural</p>
            <p className="w-64 text-white">
              Immerse yourself in the vibrany cultural performances, arth
              exhibitions, and music concerts.
            </p>
            </div>
        </div>
        <div className="flex items-center justify-center md:justify-start"><Button/></div>
        
      </div>
          <div className="md:w-1/3 w-full h-screen flex justify-center items-center">
            <div className="md:w-4/5 md:h-4/5 md:px-28 md:my-28  w-1/2 h-1/2 bg-slate-300"></div>
          </div>
      </div>
    </>
  );
}

export default About;
