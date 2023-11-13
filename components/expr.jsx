import React from "react";
import Button from "./button";

function Expr() {
  return (
    <>
      <div className="bg-gradient-to-br from-violet-900 to-fuchsia-900 pl-16 pt-32 pr-14 flex flex-col items-center md:w-screen w-screen">
        <div className="text-5xl text-white font-bold w-max h-36">
          Experience The Events
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="flex flex-col items-center md:items-start md:w-1/3">
          <div className="w-screen md:w-2/3 h-56 bg-white"></div>
            <p className="md:text-3xl text-xl font-bold text-white md:h-20 text-left">Explore a wide range of events and competitions</p>
            <p className="text-lg font-semibold text-slate-400  md:h-16">Choose from various categories and showcase your skills</p>
            <div className="flex md:justify-start pb-10"><Button/></div>
          </div>
          <div className="flex flex-col md:items-start items-center md:w-1/3">
          <div className="md:w-2/3 w-screen h-56 bg-white"></div>
            <p className="md:text-3xl text-xl md:h-20 text-left font-bold text-white">Connect with like-minded individuals and form teams</p>
            <p className="text-lg  font-semibold text-slate-400  md:h-16">Collaborate with others to create something amazing </p>
            <div className="flex md:justify-start pb-10"><Button/></div>
          </div>
          <div className="flex flex-col md:items-start items-center md:w-1/3">
          <div className="md:w-2/3 w-screen h-56 bg-white"></div>
            <p className="md:text-3xl text-xl md:h-20 text-left font-bold text-white">Experience the thrill of competing and winning </p>
            <p className="text-lg font-semibold text-slate-400 w-full md:h-16">
              Participate in various events and stand a chance to win exciting
              prizess
            </p>
            <div className="flex md:justify-start pb-10"><Button/></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expr;
