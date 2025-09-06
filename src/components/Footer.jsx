import React from "react";
import ButtonMain from "./ButtonMain";
const Footer = () => {
  return (
    <>
      <div className="bg-[#090a0c] w-full h-screen relative">
        <div className="flex justify-center items-center w-full h-full absolute top-0 left-[-27%] bg-[#090a0c] ">
          <img src="/clockbg.jpg" className=" h-full" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-[-19.4%] left-[16%] scale-[0.42]  rounded-full"
          >
            <source src="/clock.mp4" type="video/mp4" />
          </video>
        </div>
        {/* side text */}
        <div className="side-txt absolute top-0 right-0 text-neutral-200 pr-[10rem] py-[8rem]  ">
          <h1 className="text-[5rem] font-semibold leading-[0.8] tracking-tight">
            Join the <br /> Movement
          </h1>
          <p className="text-[1.125rem] mt-6 mb-8 text-neutral-300 font-medium">
            Unlock the future Of productivity with Huly. <br /> Remember, this
            joumey is just gettirtg started.
          </p>
          <div className="flex gap-8">
            <ButtonMain />
            <button className="flex items-center gap-2 py-1 px-4 border border-neutral-500 rounded-4xl">
              <img src="/blob/chakri.svg" className="w-5 h-5" />
              Join our slack
            </button>
          </div>
        </div>
        {/* bottom section */}
        <div className="w-full absolute bottom-0 left-0 flex justify-between items-center px-8 pb-5  text-neutral-500">
          <div className="left-side">
            <div className="logos flex items-center gap-4">
              <div className="w-5 h-5">
                <img src="/icons/X.svg" className="w-full h-full"/>
              </div>
              <div className="w-5 h-5">
                <img src="/icons/linkden.svg" className="w-full h-full"/>
              </div>
              <div className="w-5 h-5">
                <img src="/icons/github.svg" className="w-full h-full"/>
              </div>
              <div className="w-5 h-5">
                <img src="/icons/youtube.svg" className="w-full h-full"/>
              </div>
              <div className="w-5 h-5">
                <img src="/blob/chakri.svg" className="w-full h-full invert-50"/>
              </div>
              <div className="w-4 h-4">
                <div className="w-full h-full rotate-45 rounded bg-neutral-600 flex justify-center items-center">
                  <div className="w-[40%] h-[40%] rounded-full bg-black">
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[0.85rem] font-medium pt-4">Copyright &copy; 2025 Huly Labs. All rights reserved.</p>
          </div>
          <div className="right-side">
            <div className=" pt-4 flex items-center gap-6">
              <p className="text-[0.85rem] font-semibold text-neutral-200">
               Terms of Service
              </p>
              <p className="text-[0.85rem] font-semibold text-neutral-200">
               Privacy Policy
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2.5">
              <div className="w-6 ">
                <img src="/blob/heart.png" className="w-full h-auto"/>
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
