import React from "react";

function Last(){
    return(<>
    <div className="flex flex-col justify-center items-center bg-fuchsia-800">
        <div className="h-1/3 flex justify-center py-16">
            <img src="/public/star.png" alt="" srcset="" className="w-12 h-12"/>
            <img src="/public/star.png" alt="" srcset="" className="w-12 h-12"/>
            <img src="/public/star.png" alt="" srcset="" className="w-12 h-12"/>
            <img src="/public/star.png" alt="" srcset="" className="w-12 h-12"/>
            <img src="/public/star.png" alt="" srcset="" className="w-12 h-12"/>
        </div>
        <div className="flex justify-between pb-10">
<img src="/public/ArrowL.png" alt="" className="w-16 h-16 cursor-pointer"/>
        <div className="text-2xl font-bold text-white w-1/2 text-center">The Corona and Melange fest was an incredible experience. It
provided a platform for students to showcase their talents and learn from industry experts.
</div>
<img src="/public/ArrowR.png" alt="" className="w-16 h-16 cursor-pointer"/>
</div>
    </div>
    <div className="flex bg-fuchsia-800 justify-center items-center">
    <img src="/public/dp.png" alt="" className="w-16 h-16 py-1 cursor-pointer"/>
    <div className="flex flex-col pb-10">
    <p className="text-3xl font-bold pt-10 pl-2">Saksham</p>
    <p className="text-xl font-medium pl-2">Student, ABC Inc.</p>

    </div>

    </div>

    </>)
}

export default Last;