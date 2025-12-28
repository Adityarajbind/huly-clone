import React from "react";
import ButtonMain from "./ButtonMain";
const Footer = () => {
  return (
    <>
      <div className="bg-[#090a0c] w-full min-h-screen relative overflow-hidden z-9999">
        {/* for pc top-[-19.5%] and left-[-30%] is center */}
        <img
          src="/ClockBg.png"
          className="absolute top-[-6.5%] max-lg:top-[-9%] left-[-17%] w-[89%] z-1 max-md:top-[10%] max-md:left-[7%] max-md:scale-[1.7] "
        />
        <div className="w-full flex max-md:flex-col justify-center items-center gap-40 max-lg:gap-5 py-20 relative z-10">
          {/* vedio of clock */}
          <div className="flex items-center ">
            <video
              autoPlay
              muted
              loop
              playsInline3
              className=" rounded-full w-[340px] h-[340px] max-[768px]:w-[300px] max-[768px]:h-[300px] max-[500px]:w-[250px] max-[500px]:h-[250px] shadow-[0_0_60px_60px_#070609]"
            >
              <source src="/clock.mp4" type="video/mp4" />
            </video>
            <img src="/ClockButton.png" className="w-6 h-8" />

          </div>
          {/* side text */}
          <div className="side-txt text-neutral-200 max-md:text-center">
            <h1 className="text-[5rem] max-[850px]:text-[4rem] max-[425px]:text-[3rem] font-semibold leading-[0.8] tracking-tight">
              Join the <br /> Movement
            </h1>
            <p className="text-[1.125rem] max-[425px]:text-[1rem] mt-6 mb-8 text-neutral-300 font-medium">
              Unlock the future Of productivity with Huly. <br className="max-[500px]:hidden" /> Remember, this
              joumey is just gettirtg started.
            </p>
            <div className="flex justify-around items-center gap-2 max-md:flex-col">
              <div className="w-[11rem] ">
              <ButtonMain  />
              </div>
              <button className="flex items-center gap-4 py-2 px-5 border w-[11rem] border-neutral-500 rounded-4xl">
                <img src="/blob/chakri.svg" className="w-5 h-5" />
                Join our slack
              </button>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="w-full relative z-10 flex max-sm:flex-col justify-between items-center px-8 pb-5  text-neutral-500">
          <div className="left-side max-sm:flex max-sm:items-center max-sm:flex-col">
            <div className="logos flex  items-center gap-4">
              <div className="w-5 h-5">
                <img src="/icons/X.svg" className="w-full h-full" />
              </div>
              <div className="w-5 h-5">
                <img src="/icons/linkden.svg" className="w-full h-full" />
              </div>
              <div className="w-5 h-5">
                <img src="/icons/github.svg" className="w-full h-full" />
              </div>
              <div className="w-5 h-5">
                <img src="/icons/youtube.svg" className="w-full h-full" />
              </div>
              <div className="w-5 h-5">
                <img
                  src="/blob/chakri.svg"
                  className="w-full h-full invert-50"
                />
              </div>
              <div className="w-4 h-4">
                <div className="w-full h-full rotate-45 rounded bg-neutral-600 flex justify-center items-center">
                  <div className="w-[40%] h-[40%] rounded-full bg-black"></div>
                </div>
              </div>
            </div>
            <p className="text-[0.85rem] font-medium pt-4 max-sm: text-center">
              Copyright &copy; 2025 Huly Labs. All rights reserved.
            </p>
          </div>
          <div className="right-side max-sm:flex max-sm:items-center max-sm:flex-col max-sm:mt-4">
            <div className=" flex items-center gap-6">
              <p className="text-[0.85rem] font-semibold text-neutral-200">
                Terms of Service
              </p>
              <p className="text-[0.85rem] font-semibold text-neutral-200">
                Privacy Policy
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2.5 ">
              <div className="w-6 ">
                <img src="/blob/heart.png" className="w-full h-auto" />
              </div>
              <p className="text-[0.85rem] font-medium">
                Made with passion and Huly
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
