import { motion } from "framer-motion";
import { useState,useRef } from "react";
const variants = {
  initial: { x: 0, opacity: 1 },
  hoverMain: {
    x: [0, -30, 0],
    transition: { duration: 1.5, ease: "easeInOut" },
  },
  // variants
  hoverRight: (delay = 0) => ({
    // slide left → (invisible) jump to right → slide back to 0
    x: ["0%", "-600%", "-600%", "100%", "0%"],
    opacity: [1, 1, 0, 0, 1],
    transition: {
      // make the jump happen while invisible
      x: {
        duration: 1.5,
        ease: [0.68, -0.6, 0.32, 1.6],
        times: [0, 0.45, 0.46, 0.47, 1],
        delay,
      },
      opacity: {
        duration: 1.5,
        ease: "linear",
        times: [0, 0.44, 0.46, 0.7, 1],
        delay,
      },
    },
  }),
};
export default function MeetingComponent() {
  const [animate, setAnimate] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const cooldownRef = useRef(null);

  const handleHover = () => {
    if (cooldown || animate) return; // ⛔ block if cooling down or already running
    setAnimate(true);
    setCooldown(true);

    // start cooldown timer
    cooldownRef.current = setTimeout(() => {
      setCooldown(false);
    }, 3000); // 2 sec cooldown
  };

  return (
    <motion.div
      className="w-full h-full rounded-xl bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url("/blob/meeting bg.png")` }}
      onHoverStart={handleHover}
    >
      {/* background overlays */}
      <div className="absolute top-0 inset-0 pointer-events-none shadow-[inset_0_-40px_50px_50px_black] z-20"></div>
      <img src="/blob/dont nknow.png" className="opacity-40 absolute top-0" />

      {/* main image */}
      <motion.img
        src="/blob/design meting res.png"
        className="scale-[0.35] absolute top-[10%] left-20 origin-top-left rounded-2xl z-50 max-lg:left-10  "
        animate={animate ? "hover" : ""}
        variants={{ hover: variants.hoverMain }}
        onAnimationComplete={() => setAnimate(false)}
      />

      {/* floating right-side images */}
      <motion.img
        src="/blob/prototype discussion.png"
        className="scale-[0.35] absolute max-md:scale-[0.25] top-3  max-md:top-6 right-10 origin-top-right "
        animate={animate ? "hover" : ""}
        variants={{ hover: variants.hoverRight(0.05) }}
        style={{ willChange: "transform, opacity" }}
        onAnimationComplete={() => setAnimate(false)}
      />

      <motion.img
        src="/blob/discuss details.png"
        className="scale-[0.35] absolute max-md:scale-[0.25] top-[35%] right-30 max-md:right-15 origin-top-right"
        animate={animate ? "hover" : ""}
        variants={{ hover: variants.hoverRight() }}
        style={{ willChange: "transform, opacity" }}
        onAnimationComplete={() => setAnimate(false)}
      />

      <motion.img
        src="/blob/dev meeting.png"
        className="scale-[0.35] absolute max-md:scale-[0.25] bottom-[48%] right-[-2rem] origin-bottom-right"
        animate={animate ? "hover" : ""}
        variants={{ hover: variants.hoverRight(0.1) }}
        style={{ willChange: "transform, opacity" }}
        onAnimationComplete={() => setAnimate(false)}
      />

      <motion.img
        src="/blob/design meting.png"
        className="scale-[0.35] absolute max-md:scale-[0.25] bottom-10 max-md:bottom-12 right-15 max-md:right-10 origin-bottom-right"
        animate={animate ? "hover" : ""}
        variants={{ hover: variants.hoverRight(0.05) }}
        style={{ willChange: "transform, opacity" }}
        onAnimationComplete={() => setAnimate(false)}
      />
    </motion.div>
  );
}
