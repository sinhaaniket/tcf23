import "./App.css";
import Button from "../components/button";
import Nav from "../components/nav";
import About from "../components/about";
import Details from "../components/details";
import Expr from "../components/expr";
import Cnm from "../components/CnM";
import Previous from "../components/previous";
import Last from "../components/last";
import Foter from "../components/footer";
import Cr from "../components/cr"

function App() {
  return (
    <>
      <div className="bg-[url('/public/BG23.png')] bg-cover h-screen">
        <Nav />

  
    <div className="flex justify-between">
            <div className="flex flex-col place-content-around pl-16 mt-36 h-80 w-max">
              <p className="md:font-bold md:text-7xl font-bold text-3xl text-white">
                Experience the Fusion
              </p>
              <p className="md:font-bold md:text-7xl font-bold text-3xl text-white">
                of Technology and
              </p>
              <p className="md:font-bold md:text-7xl  font-bold text-3xl md:pb-16 text-white">Culture</p>

          <div className=" md:font-medium md:text-2xl text-white md:mb-28 mb-20 w-fit">
            Join us for an unforgettable celebration of innovation and
            creativity.
          </div>
          
        <div><Button /></div>
            </div>
        <div>
          <img src="./public/TCF23.png" alt="" />
        </div>
        </div>
      </div>
      <div>
<About/>
      </div>
      <Details/>
      <Expr/>
      <Cnm/>
      <Previous/>
      <Last/>
      <Foter/>
      <div className="bg-slate-400 h-0.5 w-full">
    
      </div>
      <Cr/>
    </>
  );
}

export default App;
