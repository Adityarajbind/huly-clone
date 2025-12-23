import React from "react";
import { useEffect, useState,useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const NotificationLayout = ({ trigger }) => {
  const blueControls = useAnimation();
  const orangeControls = useAnimation();
  const bellTopControls = useAnimation();
  const bellBottomControls = useAnimation();
  const CounterControls = useAnimation();
  const [cooldown, setcooldown] = useState(false);
  const cooldownRef = useRef(null);
  const [Counter, setCounter] = useState(24)

  const handleMouseEnter = () => {
    blueControls.start({
      rotate: [0, 360],
      transition: { duration: 0.5, ease: "linear" },
    });

    orangeControls.start({
      rotate: [0, 360],
      transition: { duration: 0.5, ease: "linear" },
    });

    bellTopControls.start({
      rotate: [-15, 15, -15, 15, 0],
      scale: [1, 1.1, 1.15, 1.1, 1],
      transition: { duration: 0.8, ease: "easeInOut" },
    });

    bellBottomControls.start({
      x: [3, -3, 3,-3,2,-2,1,-1, 0],      
      y: [0, 3, 3,2,1, 0],
      scale: [1, 1.1, 1.15, 1.1, 1],
      transition: { duration: 1, ease: "linear" },
    });
    CounterControls.start({
      x: [3, -3, 3,-3,2,-2,1,-1, 0],      
      y: [0, -3, -3,-2,-1, 0],
      scale: [1,0.5, 0.1, 0, 0.1, 0.5, 1],
      transition: { duration: 0.8, ease: "linear" },
    })
  };
  useEffect(() => {
    if (cooldown) {
      return;
    }

    if (trigger) {
      handleMouseEnter();
      setCounter(Counter + 1);
      setcooldown(true);
      // start cooldown timer
      cooldownRef.current = setTimeout(() => {
        setcooldown(false);
      }, 1000); // 2 sec cooldown
    }
  }, [trigger]);
  return (
    <>
      <div className="w-full h-full relative top-0 rounded-xl ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className=" w-full h-full absolute  z-[-1] object-cover rounded-xl "
        >
          <source src="/waves.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2  w-[5rem] h-[5rem] bg-black rounded-full ">
          <motion.div
            className="absolute w-full h-full"
            initial={{ rotate: 0 }}
            animate={blueControls}
            style={{ transformOrigin: "center center" }}
          >
            <img
              src="/blob/blue top big.png"
              className="w-full h-full scale-[1.3]"
            />
          </motion.div>
          <motion.div
            className="absolute w-full h-full"
            initial={{ rotate: 0 }}
            animate={orangeControls}
            style={{ transformOrigin: "center center" }}
          >
            <img
              src="/blob/orange side big.png"
              className="w-full h-full scale-[1.3]"
            />
          </motion.div>

          <div className="w-full h-full flex justify-center">
            <div className="bell w-[50%] h-[50%] relative mt-3">
              {/* Bell Top - swings left/right */}
              <motion.img
                src="/blob/bell top.png"
                className="w-full h-full origin-top"
                animate={bellTopControls}
              />

              {/* Bell Bottom (clapper) - subtle bounce */}
              <motion.img
                src="/blob/bell bottom.png"
                className="w-[30%] mx-auto mt-[0.1rem] origin-top"
                animate={bellBottomControls}
              />
              <motion.div
                className="notification-number rounded-2xl bg-[#ff8a64] 
              shadow-[0_4px_5px_-2px_#ff774a] absolute top-1 right-[-2px]  w-4 h-3 flex justify-center items-center text-neutral-800"
              animate={CounterControls}

              >
                <span className="text-[0.5rem] ">{Counter} </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationLayout;
