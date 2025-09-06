import React, { useState, useRef } from "react";

const ButtonMain = () => {
  const [mouseX, setMouseX] = useState(0);
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setMouseX(x - 18);
  };

const getGlowOpacity = () => {
  if (!btnRef.current) return { left: 0.9, right: 0 };

  const width = btnRef.current.offsetWidth;
  const center = width / 2;
  const distanceFromCenter = mouseX - center;

  let leftOpacity = 0;
  let rightOpacity = 0;

  if (mouseX < center) {
    // Cursor on left side
    const normalized = (center - mouseX) / center; // 0 (center) to 1 (far left)
    leftOpacity = normalized; // Fade in as you move left
  } else {
    // Cursor on right side
    const normalized = (mouseX - center) / center; // 0 (center) to 1 (far right)
    rightOpacity = normalized; // Fade in as you move right
  }

  return {
    left: Math.min(leftOpacity, 1),
    right: Math.min(rightOpacity, 1),
  };
};


  const { left, right } = getGlowOpacity();

  return (
    <>
      {/* MAIN BUTTON */}
      <div className="relative w-[15rem]">
      <a
        ref={btnRef}
        onMouseMove={handleMouseMove}
        className="duration-200 transition-all uppercase font-bold flex items-center justify-center h-10 w-full text-12 px-5 text-black -tracking-[0.015em] relative z-10 overflow-hidden rounded-full border border-white/60 bg-[#d1d1d1] space-x-1 text-xs"
        href="#"
      >
        <div
          className="absolute -z-10 flex w-[204px] items-center justify-center"
          style={{ transform: `translateX(${mouseX - 102}px) translateZ(0)` }}
        >
          <div className="absolute top-1/2 h-[121px] w-[121px] -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#FFFFF5_3.5%,_#FFAA81_26.5%,#FFDA9F_37.5%,rgba(255,170,129,0.50)_49%,rgba(210,106,58,0.00)_92.5%)]"></div>
          <div className="absolute top-1/2 h-[103px] w-[204px] -translate-y-1/2 bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#FFFFF7_29%,_#FFFACD_48.5%,_#F4D2BF_60.71%,rgba(214,211,210,0.00)_100%)] blur-[5px]"></div>
        </div>
        <span className="text-[#5A250A]">See in Action</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 9"
          className="h-[9px] w-[17px] text-[#5A250A]"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
            clipRule="evenodd"
          ></path>
        </svg>



      </a>
        {/* RIGHT GLOW */}
        <div
          className="pointer-events-none absolute right-0 top-0 shadow-[0px_0px_20px_5px_#d15f3d] rounded-full  w-[30%] h-full "
          style={{
            opacity: right,
          }}
        ></div>
        <div
          className="pointer-events-none absolute right-0 top-0 shadow-[0px_0px_5px_1px_#d15f3d] rounded-full  w-full h-full "
          style={{
            opacity: right,
          }}
        ></div>
        <div
          className="pointer-events-none absolute right-0 top-0 shadow-[inset_0px_0px_5px_1px_#d15f3d] rounded-full  w-full h-full "
          style={{
            opacity: right,
          }}
        ></div>

        {/* left GLOW */}
        <div
          className="pointer-events-none absolute left-0 top-0 shadow-[0px_0px_20px_5px_#d15f3d] rounded-full  w-[30%] h-full "
          style={{
            opacity: left,
          }}
        ></div>
        <div
          className="pointer-events-none absolute left-0 top-0 shadow-[0px_0px_5px_1px_#d15f3d] rounded-full  w-full h-full "
          style={{
            opacity: left,
          }}
        ></div>
        <div
          className="pointer-events-none absolute left-0 top-0 shadow-[inset_0px_0px_5px_1px_black] rounded-full  w-full h-full "
          style={{
            opacity: left,
          }}
        ></div>
        </div>
    </>
  );
};

export default ButtonMain;
