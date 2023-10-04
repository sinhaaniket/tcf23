import React from "react";

function Foter(){
return(<>
    <div className="flex bg-fuchsia-200 md:justify-between flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col">
            <img src="public/Logo.png" alt="" className="w-68 h-64"/>
            <div className="ml-36">Address:</div>
            <div className="ml-36">NIT Patna,Ashok Rajpath</div>
            <div className="ml-36">Contact</div>
            <div className="ml-36">123456789</div>
        </div>
        <div><img src="public/map.jpeg" className="w-68 h-64 mt-20"alt="" /></div>
        <div className="flex mt-20">
        <div className="flex flex-col pr-24 font-bold">
            <div className="mb-8 text-xl">Link one</div>
            <div className="mb-8 text-xl">Link one</div>
            <div className="mb-8 text-xl">Link one</div>
            <div className="mb-8 text-xl">Link one</div>
            <div className="mb-8 text-xl">Link one</div>
        </div>
        <div className="flex flex-col pr-24 font-bold">
            <div className="mb-8 text-xl">Link one</div>
            <div className="mb-8 text-xl">Link one</div>
            <div className="mb-8 text-xl">Link one</div>
            <div className="mb-8 text-xl">Link one</div>
            <div className="mb-8 text-xl">Link one</div>
        </div>
        </div>
    </div>
</>)
}

export default Foter;