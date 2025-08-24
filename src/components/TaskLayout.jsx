import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function MsgCard({ msg, date, comment, share, tag }) {
  const styles = {
    high: "bg-[#ec9fff] border-[0.5px] border-[#b12dd2] text-[#b12dd2] ",
    low: "bg-[#ffff9b] border-[0.5px] border-[#ffff34] text-[#ffff34] ",
    medium: "bg-[#ffc5c5] border-[0.5px] border-[#ff6161] text-[#ff6161] ",
  };
  return (
    <div className="msg bg-neutral-800 rounded p-1">
      <div className="tag flex justify-between items-center ">
        <span
          className={`text-xs ${styles[tag]} rounded px-1 capitalize invisible`}
        >
          {" "}
          {tag}{" "}
        </span>
        <span className="text-xs text-neutral-900">•••</span>
      </div>
      <div className="comment font-[500] leading-tight tracking-tight text-[0.75rem] text-neutral-500 ">
        <p>{msg}</p>
      </div>
      <div className="data flex gap-2 relative left-[-4px] ">
        <span className="text-xs capitalize flex items-center font-medium text-neutral-500">
          <img src="/icons/clock.svg" className="scale-[0.5] invert-[50%] " />
          {date}{" "}
        </span>
        <span className="text-xs capitalize flex items-center font-medium text-neutral-500">
          <img src="/icons/comment.svg" className="scale-[0.5] invert-[50%] " />
          {comment}{" "}
        </span>
        <span className="text-xs capitalize flex items-center font-medium text-neutral-500">
          <img src="/icons/spiral.svg" className="scale-[0.5] invert-[50%] " />
          {share}{" "}
        </span>
      </div>
    </div>
  );
}
function MsgCardLight({ msg, date, comment, share, tag }) {
  const styles = {
    high: "bg-[#ec9fff] border-[0.5px] border-[#dc70f8] text-[#b12dd2] ",
    low: "bg-[#ffff9b] border-[0.5px] border-[#f1f174] text-[#afaf2f] ",
    medium: "bg-[#ffc5c5] border-[0.5px] border-[#f4adad] text-[#ff6161] ",
  };
  return (
    <div className="msg bg-white rounded p-2">
      <div className="tag flex justify-between items-center pb-1">
        <span
          className={`text-[0.5rem] ${styles[tag]} rounded-[2px] px-1 capitalize  `}
        >
          {" "}
          {tag}{" "}
        </span>
        <span className="text-[0.5rem] text-neutral-500">•••</span>
      </div>
      <div className="comment font-[500] leading-tight tracking-tight text-[0.75rem] text-neutral-800 ">
        <p>{msg}</p>
      </div>
      <div className="data flex gap-2 relative left-[-4px] ">
        <span className="text-xs capitalize flex items-center font-medium text-neutral-500">
          <img src="/icons/clock.svg" className="scale-[0.6] invert-[50%] " />
          {date}{" "}
        </span>
        <span className="text-xs capitalize flex items-center font-medium text-neutral-500">
          <img src="/icons/comment.svg" className="scale-[0.6] invert-[50%] " />
          {comment}{" "}
        </span>
        <span className="text-xs capitalize flex items-center font-medium text-neutral-500">
          <img src="/icons/spiral.svg" className="scale-[0.6] invert-[50%] " />
          {share}{" "}
        </span>
      </div>
    </div>
  );
}
function TypingMsgCard({ msg, date, comment, share, tag, isNew }) {
  const [displayedMsg, setDisplayedMsg] = useState(isNew ? "" : msg);
  const [displayedDate, setDisplayedDate] = useState(isNew ? "" : date);
  const [displayedComment, setDisplayedComment] = useState(isNew ? "" : comment);
  const [displayedShare, setDisplayedShare] = useState(isNew ? "" : share);

  React.useEffect(() => {
    if (!isNew) return;
    let i = 0, j = 0, k = 0, l = 0;
    const msgInterval = setInterval(() => {
      setDisplayedMsg(msg.slice(0, i + 1));
      i++;
      if (i === msg.length) clearInterval(msgInterval);
    }, 40);

    const dateInterval = setInterval(() => {
      setDisplayedDate(date.slice(0, j + 1));
      j++;
      if (j === date.length) clearInterval(dateInterval);
    }, 40);

    const commentInterval = setInterval(() => {
      setDisplayedComment(comment.slice(0, k + 1));
      k++;
      if (k === comment.length) clearInterval(commentInterval);
    }, 40);

    const shareInterval = setInterval(() => {
      setDisplayedShare(share.slice(0, l + 1));
      l++;
      if (l === share.length) clearInterval(shareInterval);
    }, 40);

    return () => {
      clearInterval(msgInterval);
      clearInterval(dateInterval);
      clearInterval(commentInterval);
      clearInterval(shareInterval);
    };
  }, [isNew, msg, date, comment, share]);

  return (
    <MsgCardLight
      tag={tag}
      msg={displayedMsg}
      date={displayedDate}
      comment={displayedComment}
      share={displayedShare}
    />
  );
}

export default function TaskLayout() {
  const [animate, setAnimate] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [msgs, setMsgs] = useState([
    {
      tag: "high",
      msg: "make the hero section for client from layout",
      date: "april 14",
      comment: "4",
      share: "5",
    },
    {
      tag: "medium",
      msg: "Implement features according to Project requirement",
      date: "jan 14",
      comment: "2",
      share: "2",
    },
    {
      tag: "low",
      msg: "Perform seoAudit and Enhance webvisibilty",
      date: "nov 25",
      comment: "4",
      share: "5",
    },
    {
      tag: "high",
      msg: "Refactor legacy code to improve mantainabilty",
      date: "may 14",
      comment: "4",
      share: "5",
    },
    {
      tag: "medium",
      msg: "documentation of Software module",
      date: "jan 18",
      comment: "1",
      share: "5",
    },
  ]);

  const mainRef = useRef(null);

  function AnimateMenu() {
    if (isBuffering) return; // prevent rapid triggers
    setIsBuffering(true);
    setAnimate(!animate);

    // add a new MsgCardLight at top
    const newMsg = msgs[2];
    setMsgs((prev) => [newMsg, ...prev.slice(0, 2)]);

    // buffer for 3 seconds (same as your delay)
    setTimeout(() => setIsBuffering(false), 3000);
  }
  function ResetMenu() {
    setAnimate(false);
    
  }
  return (
    <div
      className=" relative h-full w-full flex items-center justify-center rounded-xl gap-4 bg-[radial-gradient(circle_at_top,_#9dc3ff,_#151d2a,_black)] overflow-hidden select-none"
      onMouseEnter={AnimateMenu}
      onMouseLeave={ResetMenu}
    >
      {/* inset shadow */}
      <div className="absolute top-0 inset-0 pointer-events-none shadow-[inset_0_-40px_50px_50px_black] z-20"></div>

      {/* left side menu */}
      <div
        className={`absolute top-[30%]  left-[-3.8rem] border-[0.5px] border-neutral-600 rounded-xl flex flex-col justify-center gap-2 w-[38%]  bg-neutral-900 p-2  transition-all duration-[400ms] ease-in ${
          animate ? " left-[-4.4rem] " : ""
        }`}
      >
        <div className="flex justify-between items-center ">
          <span className="text-neutral-500">Today</span>
          <span className="rounded-full border-[0.5px] border-neutral-700 px-[4px] py-[0.5px] text-neutral-500 text-xs">
            ✓
          </span>
        </div>
        <div className="msgs flex flex-col gap-1.5">
          <MsgCard
            tag="high"
            msg={"make the hero section for client from layout"}
            date={"april 14"}
            comment={"4"}
            share={"5"}
          />
          <MsgCard
            tag="high"
            msg={"make the hero section for client from layout"}
            date={"april 14"}
            comment={"4"}
            share={"5"}
          />
          <MsgCard
            tag="high"
            msg={"make the hero section for client from layout"}
            date={"april 14"}
            comment={"4"}
            share={"5"}
          />
        </div>
      </div>

      {/* midle menu */}
      <div
        className={`rounded-xl flex flex-col justify-center gap-1.5 w-[40%]  bg-[#c7cfe0] p-2 shadow-[0_15px_20px_2px_black] mt-[5rem] transition-all duration-[400ms] ease-in ${
          animate ? " scale-[1.05] " : ""
        }`}
        ref={mainRef}
      >
        <div className="flex justify-between items-center ">
          <span className="text-black font-semibold">Today</span>
          <span className="rounded-full bg-white px-1.5 text-neutral-300 ">
            +
          </span>
        </div>
        <div className="msgs flex flex-col gap-1.5 transition-all duration-500 ease-in">
          <AnimatePresence>
            {msgs.slice(0, 3).map((m, i) => (
              <motion.div
                key={m.msg + m.date} // use a unique key for each message
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <TypingMsgCard {...m} isNew={i === 0} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* right most input task box */}

      <div
        className={`absolute top-[30%]  right-[-3.8rem] border-[0.5px] border-neutral-600 rounded-xl flex flex-col  gap-2 w-[38%] h-full bg-neutral-900 p-2  transition-all duration-[400ms] ease-in ${
          animate ? " right-[-4.4rem] " : ""
        }`}
      >
        <div className="flex justify-between items-center ">
          <span className="text-neutral-500 font-semibold text-[0.8rem] ">
            Create New Task
          </span>
          <span className="rounded-full border-[0.5px] border-neutral-700 px-[4px] py-[0.5px] text-neutral-500 text-xs">
            ✓
          </span>
        </div>
        <div className=" bg-neutral-950 text-neutral-700 font-semibold rounded h-[4rem] w-full p-2 text-xs">
          What is the Task?
        </div>
        <div className="text-xs capitalize flex items-center font-medium text-neutral-900 gap-0.5">
          <img src="/icons/clock.svg" className="scale-[0.6] invert-[50%] " />
          <span className="bg-[#3d4f72] rounded-4xl px-2 py-0.5 text-[0.6rem] ">
            {" "}
            Ui design
          </span>
        </div>
      </div>
    </div>
  );
}
