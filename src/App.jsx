import React from "react";
import Header from "./components/header";
import ButtonMain from "./components/ButtonMain";
import hero from "./assets/hero.webm";
import imgBg from "./assets/img-bg.svg"

const App = () => {
  return (
    <>
      <Header />
      <div className="hero-section w-full h-full">
        {/* vedio background */}
        <div className="w-full h-full flex justify-center items-center ">
          <video autoPlay loop muted className=" scale-x-[1.3] max-[1300px]:scale-y-[1.1] mr-30">
            <source src={hero} type="video/mp4" />
          </video>
        </div>


        {/* image background */}
        {/* <img
          src={imgBg}
          className="absolute top-[-100px] right-[-40px] z-30 opacity-0 hover:opacity-10 transition-opacity duration-500"
        /> */}


        <div className="w-full h-[900px]  absolute top-0 left-0 bg-no-repeat bg-cover bg-amber-400" style={{backgroundImage:`url(${imgBg})`}}>
          <div className="pattern">
            <div className="w-20 h-20 border border-neutral-700"></div>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default App;
