import React, {useState} from "react";
import { FaBars , FaTimes } from "react-icons/fa"

function Nav(){
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen((prev) => !prev);
    };
    return(
        <div>
            <div className="flex flex-row-reverse md:flex-row place-content-between">
            <div className="md:flex w-1/3 place-content-around hidden">
                <span className="cursor-pointer h-fit font-bold text-2xl pt-8 text-white">About Us</span>
                <span className="cursor-pointer h-fit font-bold text-2xl pt-8 text-white">Events</span>
                <span className="cursor-pointer h-fit font-bold text-2xl pt-8 text-white">Sponsers</span>
                </div>
                <div>
                    <img className="h-28 cursor-pointer" src="/Logo.png" alt=""/>
                </div>
                <div className="-mr-2 ml-4 flex md:hidden">
                    <button type="button" onClick={handleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400">
                        <span className="sr-only text-white">Open Main Menu</span>
                        {/* <FaBars className="bg-white"/> */}
                        {open === true ? <FaTimes className="z-40 text-white font-bold" /> : <FaBars className="z-40 text-white font-bold"/>}
                    </button>
                </div>
            </div>
            {open ? (
               <div className="md:hidden">
                <div className=" pt-2 pb-3 space-y-1 sm:px-3 text-white ml-4 bg-transparent w-screen bg-blue-500 absolute items-center flex flex-col justify-around top-0 h-1/2 z-20 text-center">
                    <p className="text-3xl font-bold">About Us</p>
                    <p className="text-3xl font-bold">Events</p>
                    <p className="text-3xl font-bold">Sponsers</p>
                </div>
               </div>

            ) : null
            }
        </div>
    )
}

export default Nav;