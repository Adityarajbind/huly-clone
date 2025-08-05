import React, { useState, useRef } from "react";
import Header from "./components/header";
import ButtonMain from "./components/ButtonMain";
import hero from "./assets/hero.webm";
import imgBg from "./assets/img-bg.svg";
import imgBgLines from "./assets/img-bg-lines.svg";

const App = () => {
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 }); // hidden by default
  const heroRef = useRef(null); // ✅ reference to hero section

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect(); // get position & size of hero section
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // ✅ only update if mouse is inside hero bounds
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      setMousePos({ x, y });
    } else {
      setMousePos({ x: -9999, y: -9999 }); // hide spotlight
    }
  };
  return (
    <>
      <Header />
      <div
        ref={heroRef} // ✅ attach ref
        className="hero-section w-full h-full relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: -9999, y: -9999 })}
      >
        {/* vedio background */}
        <div className="w-full h-full flex justify-center items-center ">
          <video
            autoPlay
            loop
            muted
            className=" scale-x-[1.3] max-[1300px]:scale-y-[1.1] mr-30"
          >
            <source src={hero} type="video/mp4" />
          </video>
        </div>

        {/* Hover-reveal flashlight effect */}
        <div
          className="pointer-events-none absolute top-[-100px] right-[-45px] w-full h-[900px] bg-no-repeat bg-cover opacity-20 transition-opacity duration-150 max-[768px]:hidden"
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
      </div>
    </>
  );
};

export default App;
