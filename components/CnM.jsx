import React from "react";

function Cnm() {
  return (
    <>
      <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 pl-16 pr-14 md:block flex flex-col md:w-screen w-screen">
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex flex-col w-2/3 pt-32">
              <p className="font-bold md:text-6xl text-4xl text-white text-center pb-10">
                Experience the Best of Corona and Melange
              </p>
              <p className="font-bold md:text-xl text-base text-slate-300 text-center">
                During the fest, we provide a wide range of facilities and
                services to ensure an unforgettable experience for all
                participants. From state-of-the-art venues to top-notch
                accomodations, we have everything you need to make the most of
                your time at Corona and Melange.
              </p>
            </div>
            <img src="/CnM23.png" alt="" className="md:w-max w-1/3 pt-20 h-1/3" />
          </div>
          <div className="flex">
            <div className="flex flex-col justify-center items-center mt-10 pr-10 w-1/3">
              <img src="/bxs_cube.png" alt="" className="h-16 w-16" />
              <div className="text-xl md:text-5xl font-bold text-white text-center">
                Top-Notch Venues and Facilities
              </div>
              <p className="md:text-xl text-base font-normal text-slate-300 text-center">
                Our fest offers world class venues equipped with the latest
                technology and amenities to host a variety of events and
                activities
              </p>
            </div>
            <div className="flex flex-col justify-center items-center pr-10 w-1/3">
              <img src="/bxs_cube.png" alt="" className="h-16 w-16" />
              <p className="md:text-5xl text-xl font-bold text-white text-center">
                Comfortable Accommodations
              </p>
              <p className="md:text-xl text-base font-normal text-slate-300 text-center">
                We provide comfortable accommodations for participants, ensuring
                a pleasant stay throughout the fest.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/3">
              <img src="/bxs_cube.png" alt="" className="h-16 w-16" />
              <p className="md:text-5xl text-xl font-bold text-white text-center">
                Delicious Food and Refreshments
              </p>
              <p className="md:text-xl text-lg font-normal text-slate-300 text-center">
                Enjoy a wide range of delicious food and refreshing beverages
                from our careful curated menu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cnm;
