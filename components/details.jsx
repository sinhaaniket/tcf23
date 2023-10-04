import React from "react";

function Details() {
  return (
    <>
      <div className="bg-gradient-to-br from-violet-950 to-fuchsia-950 flex md:flex-row flex-col items-center md:w-screen pl-16 pt-32 pr-14">
        <div className="w-2/3 md:1/3 md:h-96 h-80 bg-white pb-12"></div>
        <div className="flex flex-col mx-32">
          <div className=" text-white pb-11">
            <p className="font-bold text-5xl py-6 ">Exciting Fest Higlights Await</p>
            <p className="text-zinc-400"> 
              Join us for a thrilling celebration of Technology and culture at
              Corona and Melange, the Annuual fest of NIT Patna. Experience a
              wide range of events, workshops, performances, and more.
            </p>
          </div>
          <div className="text-white pb-11">
            <p className="text-5xl font-bold pb-6">Unforgettable Experiences Await</p>
            <p className="text-zinc-400">
              Get ready to be amazed by the incredible lineup of activities at
              Corona and Melange. From technical competitions to art
              exhibitions, there’s something for everyone to enjoy..
            </p>
          </div>
          <div className="text-white pb-11">
            <p className="text-5xl font-bold pb-6">Engaging Workshops and Talks</p>
            <p className="text-zinc-400">
            Expand your knowledge and skills through interactive workshops and insightful
talks by industry experts. Don’t miss this opportunity to learn from the best.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
