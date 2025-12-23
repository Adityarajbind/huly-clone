import React from "react";


const VedioCallSection = () => {
  return (
    <div className="relative w-full h-[176vh] max-[1025px]:h-[200vh] max-[770px]:h-[170vh] max-sm:h-[140vh]  overflow-hidden">
      {/* div background */}
      <div className="w-full h-auto aspect-vedio  ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className=" w-full h-full absolute top-0 max-sm:top-[-10%]  scale-[1.45] max-sm:right-[8%] max-sm:scale-[2] right-[5rem] "
        >
          <source src="/waves blue.mp4" type="video/mp4" />
        </video>
      </div>     

      <div className="text-[#0f1115] font-bold absolute top-13 max-[440px]:mt-12 max-sm:top-2 left-[16.5%] max-[900px]:left-[14%] max-sm:left-[4%] text-[4rem] max-sm:text-[2.2rem] leading-[1.1] tracking-tighter ">
        <p>Work together.</p>
        <p>Like in the office.</p>
        <p className="text-[1.2rem] max-sm:text-[0.8rem] text-neutral-700 leading-normal tracking-normal font-normal">
          Create customized virtual office spaces for any department
          <br className="max-[425px]:hidden "/>
          or event with high quality audio and video conferencing.
        </p>
      </div>

      <div className="absolute w-[65%] max-sm:w-[89%] aspect-[1.78] top-[49%] max-sm:top-[39%] -translate-y-1/2  left-[16.5%] max-sm:left-[5%] max-[1025px]:left-[15.3%] max-[770px]:left-[12.5%] flex justify-center items-center rounded-xl overflow-hidden  ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full scale-[1.01] rounded-xl"
        >
          <source src="/meeting.mp4" type="video/mp4" />
        </video>
        <div className="absolute w-full h-full text-white select-none">
          {/* top left heading */}
          <div className="top-right-heading absolute top-2 left-3">
            <h1 className="text-white font-semibold text-[0.85rem] ">
              Onboarding Meeting
            </h1>
            <div className="flex items-center gap-2 text-xs">
              {" "}
              <img src="/blob/multiple people.svg" className="w-4 h-4" />4
              participants
            </div>
          </div>

          {/* top right section */}
          <div className="absolute right-0 top-0 w-[21.6%] h-[69.8%] flex flex-col justify-center items-center gap-2 ">
            <div className="cards w-full h-[31%] relative">
              <div className=" px-0.5 py-[0.150rem] absolute top-2 right-2 bg-blue-600 rounded-full  ">
                <img src="/blob/mic on.svg" className="w-3 h-3 " />
              </div>
              <div className="flex items-center gap-1 text-xs absolute bottom-0 left-1 ">
                {" "}
                <img src="/blob/single person.svg" className="w-2 h-2" />
                Chosen Undead
              </div>
            </div>
            <div className="cards w-full h-[31%] relative">
              <div className=" px-0.5 py-[0.150rem] absolute top-2 right-2 bg-neutral-500 rounded-full  ">
                <img src="/blob/mic off.svg" className="w-3 h-3 " />
              </div>
              <div className="flex items-center gap-1 text-xs absolute bottom-0 left-1 ">
                {" "}
                <img src="/blob/single person.svg" className="w-2 h-2" />
                Bearer Of Curse
              </div>
            </div>
            <div className="cards w-full h-[31%] relative">
              <div className=" px-0.5 py-[0.150rem] absolute top-2 right-2 bg-blue-600 rounded-full  ">
                <img src="/blob/mic on.svg" className="w-3 h-3 " />
              </div>
              <div className="flex items-center gap-1 text-xs absolute bottom-0 left-1 ">
                {" "}
                <img src="/blob/single person.svg" className="w-2 h-2" />
                Ashen One
              </div>
            </div>
          </div>

          {/* bottom controls */}
          <div className="absolute bottom-3 w-full flex justify-center items-center gap-3">
            <div className=" p-3 bg-[#68686a] rounded-full shadow-[0px_0px_20px_1px_#1e1e1e] ">
              <img src="/blob/screen share.svg" className="w-6 h-6 " />
            </div>
            <div className=" p-3 bg-[#68686a] rounded-full shadow-[0px_0px_20px_1px_#1e1e1e] ">
              <img src="/blob/mic off.svg" className="w-6 h-6 " />
            </div>
            <div className=" p-3 bg-red-500 rounded-full shadow-[0px_0px_20px_1px_#1e1e1e] ">
              <img src="/blob/cross.svg" className="w-6 h-6 " />
            </div>
            <div className=" p-3 bg-[#68686a] rounded-full shadow-[0px_0px_20px_1px_#1e1e1e] ">
              <img src="/blob/vedio off.svg" className="w-6 h-6 " />
            </div>
            <div className=" p-3 bg-[#68686a] rounded-full shadow-[0px_0px_20px_1px_#1e1e1e] ">
              <img src="/blob/full screen.svg" className="w-6 h-6 " />
            </div>
          </div>
        </div>
      </div>

      {/* second last bottom section */}
      <div className="text-black font-bold absolute bottom-[13rem]  left-[16.5%] [1025px]:left-[15.3%] max-[770px]:left-[12.5%] max-sm:left-[4%] max-[540px]:bottom-[15.5rem] max-[440px]:bottom-[17rem]  leading-[1.1] tracking-tighter ">
        <p className="text-[1.3rem] max-[770px]:text-[1rem] max-sm:text-[0.9rem] text-neutral-700 leading-normal tracking-normal font-normal">
          Collaborating with remote teams is easy in your virtual office
          <br className="max-[500px]:hidden "/>
          environment. Enjoy real-time communication within your workspace
          <br className="max-[500px]:hidden "/>
          without additional software hassle.
        </p>
      </div>

      {/* bottom section */}
      <div className=" absolute bottom-0  z-[40] w-[67%] max-sm:w-full left-[16%] max-sm:left-0 flex justify-between items-center max-sm:flex-col max-sm:pl-[4%] gap-2  ">
        <div className="w-[27%] max-sm:w-full  h-full ">
          <img src="/blob/four sqaures.png" className="w-8 h-8 max-sm:w-5 max-sm:h-5" />
          <h1 className="text-[2rem] max-[770px]:text-[1rem] max-sm:text-[0.9rem] font-medium tracking-tight leading-tight ">Customize Workspace</h1>
          <p className="text-neutral-700 text-[0.9rem] max-sm:text-[0.8rem] ">Create your own office and meeting rooms to suit your teams needs.</p>
        </div>
        <div className="w-[27%] max-sm:w-full h-full ">
          <img src="/blob/video.png" className="w-8 h-8  max-sm:w-5 max-sm:h-5" />
          <h1 className="text-[2rem] max-[770px]:text-[1rem] max-sm:text-[0.9rem] font-medium tracking-tight leading-tight ">Audio and Vedio calls</h1>
          <p className="text-neutral-700 text-[0.9rem] max-sm:text-[0.8rem] ">Collaborate efficeintly and seamlessly with high quality virtual confrenceing</p>
        </div>
        <div className="w-[27%] max-sm:w-full h-full ">
          <img src="/blob/invite.png" className="w-8 h-8  max-sm:w-5 max-sm:h-5" />
          <h1 className="text-[2rem] max-[770px]:text-[1rem] max-sm:text-[0.9rem] font-medium tracking-tight leading-tight ">Invite geusts</h1>
          <p className="text-neutral-700 text-[0.9rem] max-sm:text-[0.8rem] ">Meet with guests without ever needing to leave your workplace</p>
        </div>
      </div>
    </div>
  );
};

export default VedioCallSection;
