import React, { useState, useRef } from "react";
import Header from "./components/header";
import ButtonMain from "./components/ButtonMain";
import TaskLayout from "./components/TaskLayout";
import hero from "./assets/background-vd.mp4";
import imgBg from "./assets/img-bg.svg";
import imgBgLines from "./assets/img-bg-lines.svg";
import TaskGraphLayout from "./components/TaskGraphLayout";
import NotificationLayout from "./components/NotificationLayout";
import VedioCallSection from "./components/VedioCallSection";
import GithubSection from "./components/GithubSection";
import MetaBrainSection from "./components/MetaBrainSection";
import Footer from "./components/Footer";

const App = () => {
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 }); // hidden by default
  const heroRef = useRef(null); // ✅ reference to hero section
  const imgRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("/assest-huly/img11.png");
  const [notificationTrigger, setnotificationTrigger] = useState(false);
  const handleMouseMove = (e, elementRef) => {
    const rect = elementRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      setMousePos({ x, y });
    } else {
      setMousePos({ x: -9999, y: -9999 });
    }
  };
  const handleMouseMoveimg = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const relativeY = e.clientY - rect.top; // Mouse Y inside image
    const height = rect.height;
    const percentage = relativeY / height;
    let newSrc;
    if (0.34 < percentage && 0.42 > percentage) {
      newSrc = "/assest-huly/img11.png";
    } else if (0.42 < percentage && 0.5 > percentage) {
      newSrc = "/assest-huly/img12.png";
    } else if (0.5 < percentage && 0.58 > percentage) {
      newSrc = "/assest-huly/img13.png";
    } else {
      newSrc = "/assest-huly/img11.png";
    }

    setMousePos({ x: e.clientX - rect.left, y: relativeY });
    setImgSrc((prev) => (prev !== newSrc ? newSrc : prev));
  };
  return (
    <>
      <Header />
      {/* hero section */}
      <div
        ref={heroRef} // ✅ attach ref
        className="hero-section overflow-hidden h-full relative z-0"
        onMouseMove={(e) => handleMouseMove(e, heroRef)}
        onMouseLeave={() => setMousePos({ x: -9999, y: -9999 })}
      >
        {/* vedio background */}
        <div className="w-full xl:h-[200vh] h-[150vh] max-md:h-[130vh] relative overflow-hidden bg-[rgb(10,11,12)] shadow-[0_0_20px_20px_black]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 xl:left-[30px] lg:left-[-6%] left-[40px] w-full h-full object-cover scale-x-[1.25] scale-y-[1.3] max-[768px]:scale-x-[1.3] max-sm:scale-[2.2] max-sm:object-contain max-sm:left-10 max-sm:shadow-2xl "
          >
            {<source src={hero} type="video/mp4" />}
          </video>
        </div>

        {/* Hover-reveal flashlight effect */}
        <div
          className="pointer-events-none absolute top-[-100px] right-[-45px] w-full h-[900px] bg-no-repeat bg-cover opacity-20 transition-opacity duration-150 max-[800px]:hidden"
          style={{
            backgroundImage: `url(${imgBg})`,
            WebkitMaskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
            maskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        >
          <img src={imgBgLines} />
        </div>
        {/* main text */}
        <div className="main-text absolute text-white min-[400px]:top-[30%] top-[34%] translate-y-[-50%] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-4 sm:mx-6 md:mx-10">
          <h1 className="min-[400px]:text-4xl text-[1.6rem] sm:text-5xl md:text-5xl lg:text-[4rem] font-bold leading-[1] mb-4  ">
            Everything App <p>for your teams</p>
          </h1>
          <p className="min-[400px]:text-base text-sm  sm:text-lg md:text-xl mb-6 max-sm:w-3/4">
            Hi my name is Adityaraj. I'm a frontend developer.
            <p>This is a huly.io website UI clone I made for practice.</p>
          </p>
          <div className="w-[14rem] "><ButtonMain /></div>
          
        </div>
        <div className="min-[600px]:hidden flex flex-col w-full  bg-[#090a0c] text-white py-[2rem] px-4 sm:px-6 md:px-10 absolute bottom-0 shadow-[0_0_50px_50px_#090a0c]">
          <p className=" text-[#ffffff99] mb-3 text-sm">
            Everything you need for productive team work:
          </p>
          <div className="flex  font-semibold text-xs ">
            <ul className=" text-white flex gap-1 items-center flex-wrap ">
              <li className="pr-2">• Team Planner</li>
              <li className="pr-2">• Project Management</li>
              <li className="pr-2">• Virtual Office</li>
              <li className="pr-2">• Chat</li>
              <li className="pr-2">• Documents</li>
              <li className="pr-2">• Inbox</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="min-[600px]:flex  hidden flex-col w-full bg-[#090a0c] text-white py-[2rem] px-4 sm:px-6 md:px-10 relative shadow-[0_0_50px_50px_#090a0c]">
        <p className=" text-[#ffffff99] mb-2">
          Everything you need for productive team work:
        </p>
        <div className="flex gap-7 font-semibold">
          <ul className="text-white flex gap-7 items-center ">
            <li>Team Planner</li>
          </ul>
          <ul className="list-disc text-white flex gap-7 items-center ">
            <li>Project Management</li>
            <li>Virtual Office</li>
            <li>Chat</li>
            <li>Documents</li>
            <li>Inbox</li>
          </ul>
        </div>
      </div>

      {/* features detail section */}
      <div className="bg-[#f6f6f6] w-full flex justify-center flex-col items-center stay-productive relative z-10 py-8">
        <h1 className="lg:text-[5.3rem] md:text-[4.3rem] sm:text-[3.2rem] text-[2.1rem] font-bold  tracking-tighter sm:text-center max-sm:mr-auto max-sm:px-3 leading-8 min-md:py-8 py-4">
          Unmatched productivity
        </h1>
        <p className="text-[#1d1e1ff1] text-[1.1rem]  min-md:py-3  max-md:px-3 max-sm:text-[0.9rem] ">
          Huly is a process, project, time, and knowledge management platform
          that <br className="min-lg:hidden max-md:hidden" /> provides amazing
          collaboration <br className="max-lg:hidden" /> opportunities for
          developers and product teams alike.
        </p>

        <div className="w-full flex justify-center items-center flex-col mt-9 gap-4">
          <div className=" flex  items-start gap-4 w-[80%]  max-sm:flex-col max-[900px]:w-[95%] h-[18.5rem] max-[850px]:h-[16rem] max-md:h-[15rem] max-sm:h-[32rem] ">
            <div className="w-[36%]  max-md:w-1/2 max-sm:w-full max-sm:h-1/2 h-full relative aspect-square overflow-hidden rounded-xl">
              <img
                ref={imgRef}
                src={imgSrc}
                className="w-full h-full rounded-xl object-cover transition-all duration-300 ease-in-out object-center"
                onMouseMove={handleMouseMoveimg}
                onMouseLeave={() => setMousePos({ x: -9999, y: -9999 })}
              />
              <div className="m-5 text-[#99999a] text-[1.1rem] max-md:text-[0.9rem] absolute bottom-0 ">
                <span className="text-white font-semibold">
                  Keyboard shortcuts.
                </span>{" "}
                Work efficiently with instant access to common actions.
              </div>
            </div>
            <div className="w-[65%] max-md:w-1/2 max-sm:w-full max-sm:h-1/2 h-full relative rounded-xl max-md:aspect-square">
              <TaskLayout />
              <div className="m-5 text-[#99999a] text-[1.1rem] max-md:text-[0.9rem] absolute bottom-0 z-40">
                <span className="text-white font-semibold">Team Planner.</span>{" "}
                Keep track of the bigger picture by viewing all individual tasks
                in one centralized team calendar.
              </div>
            </div>
          </div>

          <div className=" flex flex-row-reverse   max-sm:flex-col-reverse items-start gap-4 w-[80%] max-[900px]:w-[95%] h-[18.5rem] max-[850px]:h-[16rem] max-md:h-[15rem]  max-sm:h-[32rem]">
            <div
              className="w-[36%] flex items-start  max-md:w-1/2 max-sm:w-full max-sm:h-1/2 h-full relative aspect-square overflow-hidden rounded-xl"
              onMouseEnter={() => setnotificationTrigger(true)}
              onMouseLeave={() => setnotificationTrigger(false)}
            >
              <NotificationLayout trigger={notificationTrigger} />
              <div className="m-5 text-[#99999a] text-[1.1rem] max-md:text-[0.9rem] absolute bottom-0">
                <span className="text-white font-semibold">Notifications.</span>{" "}
                Keep up to date with any changes by receiving instant
                notifications.
              </div>
            </div>

            <div className="w-[65%] max-md:w-1/2 max-sm:w-full max-sm:h-1/2 h-full relative rounded-xl max-md:aspect-square ">
              <TaskGraphLayout />
              <div className="m-5 text-[#99999a] text-[1.1rem] max-md:text-[0.9rem] absolute bottom-0 z-50">
                <span className="text-white font-semibold">Time-blocking.</span>{" "}
                Transform daily tasks into structured time blocks for focused
                productivity.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* vedio call thingy */}
      <VedioCallSection />

      {/* Github section */}
      <GithubSection />

      <MetaBrainSection />

      {/* footer */}
      <Footer />
    </>
  );
};

export default App;
