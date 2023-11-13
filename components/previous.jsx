import React from "react";

function Previous(){
    return(<>
        <div className="flex flex-col h-screen items-center bg-gradient-to-br from-violet-900 to-fuchsia-900 pt-20 md:w-screen w-full">
            <div className="text-7xl font-extrabold text-white pb-5">Previous Events</div>
            <div className="text-3xl font-semibold text-white pb-10">Experience the excitement of our past events</div>
            <div className="flex h-2/3 w-2/3 items-center">
            <div className=" h-full w-1/2 bg-slate-300"></div>
            <div className="w-1/2 h-full flex items-center flex-col">
                <div className="bg-slate-300 mb-6 h-1/2 w-4/5"></div>
                <div className="bg-slate-300 h-1/2 w-4/5"></div>
            </div>

            </div>
        </div>
    </>)
}

export default Previous;