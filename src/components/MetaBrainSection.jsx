import React from "react";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const MetaBrainSection = () => {
  const [style, setstyle] = useState("default");
  const TxtStyles = {
    default: "",
    LineThough: "line-through",
    Bold: "font-bold",
    Underline: "underline",
    italic: "italic",
  };

  return (
    <>
      <div className=" bg-[#f6f6f6] w-full h-full relative overflow-hidden">
        <div className="sidebar-lines w-1/2 absolute left-[-12%] top-0 ">
          <img
            src="/assest-huly/veritical blue lines.png"
            alt=""
            className="w-full "
          />
        </div>
        <div className="txt-layer relative z-10 pt-25 max-md:pt-15 ml-[13rem] w-[65%] max-[810px]:w-[80%] max-[810px]:ml-[5rem] max-md:m-0 max-md:px-4 max-md:w-[100%] flex flex-col">
          <div className="self-end max-md:self-start mb-10 max-md:mb-5">
            <h1 className="text-[5rem] max-sm:text-[3rem] font-semibold tracking-tighter leading-[1.1] max-md:leading-[1] text-neutral-900 ">
              Huly <br className="max-md:hidden" /> MetaBrain
            </h1>
            <p className="text-[1.1rem] max-sm:text-[0.9rem] text-neutral-700 mt-1 ">
              Connect every element of your workflow to build a dynamic{" "}
              <br className="max-md:hidden" /> knowledge base. Soon, Huly AI
              will turn it into a powerful asset — a{" "}
              <br className="max-md:hidden" /> second brain for your team.
            </p>
          </div>
          {/* pc view */}
          <div className="w-full max-md:hidden ">
            <div className="w-full relative ">
              <div className="flex justify-between w-full">
                <div className="w-[66%] relative">
                  <img
                    src="/assest-huly/x shape image.png"
                    className="w-full h-auto"
                  />
                  <div className="mt-7 ml-5 text-neutral-400  absolute top-0 right-0 w-[47%] z-40">
                    <span className="text-white font-semibold">
                      Create tasks.
                    </span>{" "}
                    Schedule your personal events and todos.
                  </div>
                  <div className="mt-7 ml-5 text-neutral-400  absolute top-[48%] left-0 w-[47%] z-40">
                    <span className="text-white font-semibold">
                      Take notes.
                    </span>{" "}
                    <br className="max-md:hidden"  />
                    create documents to keep <br /> track of team resources
                  </div>
                </div>

                <div className="w-[32%] mt-1.5 rounded-[1.75rem] relative">
                  <img
                    src="/assest-huly/todos timeline.jpg"
                    className="w-full h-auto rounded-[1.75rem] "
                  />
                  <div className="m-3 text-neutral-400  absolute top-0 z-40">
                    <span className="text-white font-semibold">
                      Plan your work.
                    </span>{" "}
                    Visualize your workday in your planner.
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-full absolute bottom-0">
                <div className="w-[64%] rounded-[1.55rem] mb-1.5 relative">
                  <img
                    src="/assest-huly/voice controll.jpg"
                    className="w-full h-auto rounded-[1.55rem]"
                  />
                  <div className="m-3 text-neutral-400  absolute top-0 z-40">
                    <span className="text-white font-semibold">
                      Sync in real time.
                    </span>{" "}
                    Connect with your team instantly to <br />
                    monitor progress and track updates.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-evenly w-full">
              <div className="w-[30%] mt-1.5">
                <img src="/assest-huly/date 08.png" className="w-full h-auto" />
              </div>
              <div className="w-[30%] mt-1.5 relative rounded-[1.55rem] ">
                <img
                  src="/assest-huly/msg image.jpg"
                  className="w-full h-auto rounded-[1.55rem] "
                />
                <div className="m-3 text-neutral-400  absolute top-0 z-40">
                  <span className="text-white font-semibold">
                    Chat with team.
                  </span>{" "}
                  Send DM and create rou chats.
                </div>
              </div>
              <div className="w-[30%] my-1.5 relative rounded-[1.55rem] overflow-hidden">
                <img
                  src="/assest-huly/marketing card.jpg"
                  className="w-full h-full rounded-[1.55rem] object-cover"
                  alt="marketing card"
                />
                <div className="m-3 text-neutral-400  absolute top-0 z-40">
                  <span className="text-white font-semibold">
                    Manage projects.
                  </span>{" "}
                  Customize your workspace to fit the needs of r teams.
                </div>
              </div>
            </div>
          </div>

          {/* mobile view */}
          <div className="w-full hidden max-md:flex flex-col gap-3">
            <div className="w-full  flex max-[540px]:flex-col gap-3">
              <div className="w-1/2 max-[540px]:w-full relative ">
                <img
                  src="/blob/image1.jpg"
                  className="w-full h-auto rounded-[1rem] "
                />
                <div className="m-3 text-neutral-400  absolute top-0 z-40">
                  <span className="text-white font-semibold">
                    Create tasks.
                  </span>{" "}
                  Schedule your personal events and todos.
                </div>
              </div>
              <div className="w-1/2 max-[540px]:w-full relative ">
                <img
                  src="/blob/image2.jpg"
                  className="w-full h-auto rounded-[1rem] "
                />
                <div className="m-3 text-neutral-400  absolute top-0 z-40">
                  <span className="text-white font-semibold">
                    Plan your work.
                  </span>{" "}
                  Visualize your workday in your planner.
                </div>
              </div>
            </div>
            <div className="w-full  flex max-[540px]:flex-col gap-3">
              <div className="w-1/2 max-[540px]:w-full relative ">
                <img
                  src="/blob/image3.jpg"
                  className="w-full h-auto rounded-[1rem] "
                />
                <div className="m-3 text-neutral-400  absolute top-0 z-40">
                  <span className="text-white font-semibold">Take notes.</span>{" "}
                  create documents to keep track of team resources
                </div>
              </div>
              <div className="w-1/2 max-[540px]:w-full relative ">
                <img
                  src="/blob/image4.jpg"
                  className="w-full h-auto rounded-[1rem] "
                />
                <div className="m-3 text-neutral-400  absolute top-0 z-40">
                  <span className="text-white font-semibold">
                    Sync in real time.
                  </span>{" "}
                  Connect with your team instantly to <br />
                  monitor progress and track updates.
                </div>
              </div>
            </div>
            <div className="w-full  flex max-[540px]:flex-col gap-3">
              <div className="w-1/2 max-[540px]:w-full relative ">
                <img
                  src="/blob/image5.jpg"
                  className="w-full h-auto rounded-[1rem] "
                />
                <div className="m-3 text-neutral-400  absolute top-0 z-40">
                  <span className="text-white font-semibold">
                    Chat with team.
                  </span>{" "}
                  Send DM and create rou chats.
                </div>
              </div>
              <div className="w-1/2 max-[540px]:w-full relative ">
                <img
                  src="/blob/image6.jpg"
                  className="w-full h-auto rounded-[1rem] "
                />
                <div className="m-3 text-neutral-400  absolute top-0 z-40">
                  <span className="text-white font-semibold">
                    Manage projects.
                  </span>{" "}
                  Customize your workspace to fit the needs of r teams.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second part */}
      <h1 className="text-[5rem] max-lg:text-[4rem] font-bold tracking-[-0.20rem] leading-[1.1] text-neutral-950 relative pl-[22rem] max-lg:pl-[18rem]  inline-block mt-25 max-md:pl-3 max-md:text-[3rem]">
        Knowledge at <br />
        Your Fingertip
        <div className="profile flex flex-col items-center justify-center absolute bottom-0 max-md:bottom-[-12%] right-[-4.2%] max-md:right-[-13%] h-[8rem] z-50">
          <div className="image w-16 h-16 border-[2px] border-blue-600 rounded-full shadow-[0px_0px_20px_1px_#2e2e2e] ">
            <img
              src="/assest-huly/white man.jpg"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="h-[3rem] bg-blue-600 w-[2px] "> </div>
          <div className="dot w-2 h-2 bg-blue-600 rounded-full"></div>
        </div>
      </h1>
      <div className="flex gap-10">
        <div className="sticky rounded-[12px] top-[30%] z-50 ml-20 w-[340px] max-lg:w-[240px] h-[224px] max-lg:h-[180px] flex justify-center item-center shadow-[0px_0px_20px_5px_#00000061] mb-23 max-md:hidden ">
          <img
            src="/blob/team.png"
            className="  scale-x-[1.19]  w-full h-full  "
          />
          <div className="absolute bottom-0 left-0 p-4">
            <p className="text-sm text-neutral-900 mb-1 font-medium">
              Version History
            </p>
            <p className="text-xs text-neutral-700">
              Track every edit effortlessly, and never lose a single chance.
            </p>
          </div>
          <motion.div
            className="absolute top-[23%] left-[73%] h-8 w-[0.14rem] rounded-2xl bg-neutral-600"
            animate={{ opacity: [1, 0, 0, 0, 0, 1] }} // Instantly disappear, stay hidden, then reappear
            transition={{
              duration: 3, // Total cycle time (3 sec here)
              times: [0, 0.05, 0.4, 0.7, 0.95, 1], // Controls exact timing
              repeat: Infinity, // Loop forever
              ease: "linear", // Keeps timing consistent
            }}
          />
        </div>
        {/* second of the second part */}

        <div className="w-full max-md:px-3">
          <p className="text-[1.2rem] max-md:text-[1.1rem]  text-neutral-700">
            Huly offers a wide range of features to create and manage your
            project <br  className="max-md:hidden"  />
            documentation. Huly's suite of collaborative editing tools boosts
            team <br className="max-md:hidden"   />
            efficeincy
          </p>
          {/* buttons */}
          <p className="text-[1.2rem]  max-md:text-[1.1rem]   text-neutral-700 mt-4 relative">
            <div className=" absolute top-[-60%] rounded left-1/2 translate-x-[-80%] max-sm:translate-x-[-50%] bg-[#303236] text-[#94959c] z-10 flex shadow-[0px_10px_30px_0px_#2e2e2e]  max-sm:scale-[0.8] ">
              <span className="font-semibold bg-[#5683da] text-neutral-200 text-[0.9rem] max-[920px]:text-[0.7rem] m-2 px-1 py-0.5 rounded">
                + Link
              </span>
              <div className="border-x flex mx-1">
                <button
                  className="text-xl px-3 cursor-pointer hover:text-neutral-100 "
                  onClick={() => setstyle("Bold")}
                >
                  <b>B</b>
                </button>
                <button
                  className="text-xl px-3 cursor-pointer hover:text-neutral-100  font-[monospace] pt-1"
                  onClick={() => setstyle("italic")}
                >
                  <i>I</i>
                </button>
                <button
                  className="text-xl px-3 cursor-pointer hover:text-neutral-100 "
                  onClick={() => setstyle("Underline")}
                >
                  <u>U</u>
                </button>
                <button
                  className="text-xl px-3 cursor-pointer hover:text-neutral-100  line-through "
                  onClick={() => setstyle("LineThough")}
                >
                  U
                </button>
              </div>
              <div className="flex">
                <button className="text-xl px-3">@</button>
                <button className="text-xl pr-3">
                  <img src="/icons/idea.svg" className="invert-60" />
                </button>
              </div>
            </div>
            <span
              className={`bg-[#ffe587] pl-1.5 relative ${TxtStyles[style]}
              `}
            >
              Documents in Huly can be used for sharing reference materials
              among <br className="max-[950px]:hidden" /> team  members,collaborating on plans and roadmaps ,storing
              meeting notes <br className="max-[950px]:hidden" /> and assigning action Items.
            </span>
          </p>
          <div className=" w-[72%] max-lg:w-[85%] max-md:w-full rounded-xl mt-10 mb-8">
            <img
              src="/assest-huly/anything store.jpg"
              className="w-full h-full rounded-xl"
            />
          </div>
          <p className="text-[1.2rem] max-md:text-[1.1rem]  text-[#323438] ">
            With <span className="text-neutral-400 line-through">live</span>{" "}
            real-time collaboration, remote teams are able to work together to{" "}
            <br className="max-lg:hidden" /> bring a unified vision to life on the page. Tagging users,
            linking to issues, <br className="max-lg:hidden"  /> and assigning action items are just a few
            of the{" "}
            <span className="text-neutral-400 line-through">
              Advanced solution
            </span>
            <br className="max-md:hidden"  />
            <span className="text-[#f58562] relative mr-1">
              powerful feature
              <div className="profile flex flex-col items-center justify-center absolute bottom-[-60%] right-[-25%] h-[8rem] ">
                <div className="image w-16 h-16 border-[2px] border-[#f58562] rounded-full shadow-[0px_0px_20px_1px_#2e2e2e] ">
                  <img
                    src="/assest-huly/asian women.jpg"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="h-[2rem] bg-[#f58562] w-[2px] "> </div>
                <div className="dot w-2 h-2 bg-[#f58562] rounded-full"></div>
              </div>
            </span>{" "}
            available within the Huly document editor.
          </p>
          <div className="w-[72%] max-lg:w-[85%] max-md:w-full rounded-xl my-8">
            <img
              src="/assest-huly/object code.svg"
              className="w-full h-full rounded-xl"
            />
          </div>
          <p className="text-[1.2rem]  max-md:text-[1.1rem]   text-[#1c1d20] ">
            Documents can be enhanced with rich text formatting, images,
            attachments <br className="max-md:hidden"  />
            and code blocks. Use documents to organize team plans, create
            technical <br className="max-md:hidden"  />
            documentation and support your team's progress towards shared goals.
          </p>
          <div className="mt-2 flex items-center gap-1">
            <div className="profile flex flex-col items-center justify-center h-[4rem]">
              <div className="dot w-2.5 h-2.5 bg-neutral-800 rounded-full"></div>
              <div className="h-[1.7rem] bg-neutral-800 w-[2px] rounded-b-full">
                {" "}
              </div>
            </div>
            <span className="text-neutral-400 text-[1.3rem] ">
              Tap here to continue...
            </span>
          </div>

          <div className="bg-white rounded-[1.5rem] p-1 gap-1 w-[8.5rem] shadow-[0px_0px_20px_1px_#b0b0b0] flex justify-evenly mb-23">
            <div className="bg-[#303236] w-10 h-10 rounded-full text-3xl text-white ">
              <span className="w-full h-full flex justify-center ">+</span>
            </div>
            <div className="bg-[#e2e2e2] w-10 h-10 rounded-full text-3xl text-white flex justify-center items-center ">
              <img src="/assest-huly/camera.svg" className="w-[60%] h-[60%] " />
            </div>
            <div className="bg-[#e2e2e2] w-10 h-10 rounded-full text-3xl text-white flex justify-center items-center ">
              <img src="/assest-huly/pencil.svg" className="w-[60%] h-[60%] " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaBrainSection;
