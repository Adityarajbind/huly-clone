import React from "react";

const GithubSection = () => {
  return (
    <div className="w-full h-full bg-[#111111] text-white py-20 max-md:py-14">
      <div className="px-40 max-[1024px]:px-30 max-[900px]:px-10 max-[768px]:px-4 relative z-10">
        <h1 className="text-[4.3rem] max-md:text-[3rem] max-sm:text-[2rem] font-semibold  tracking-tighter leading-[1] ">
          Sync with Github. <br />   Both ways.
        </h1>
        <p className="text-[1.3rem]  max-md:text-[1rem] max-sm:text-[0.8rem] text-neutral-400 mt-2">
          Manage your tasks efficiently with Huly's bidirectional GitHub
          synchronization. 
          Use Huly as an advanced front-end for GitHub Issues and GitHub
          Projects.
        </p>
      </div>
      <div className="w-full aspect-video overflow-hidden relative bg-[#111111]  max-md:scale-[1.3] -z-0 max-md:mt-4">
        <video autoPlay muted loop playsInline className="w-full h-full absolute  inset-0 object-cover ">
          <source src="/github promo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex max-md:flex-col mt-5 max-md:gap-5 justify-between items-center px-40 max-[1024px]:px-30 max-[900px]:px-10 max-[768px]:px-6 max-md:mt-4 relative z-10">
        <div className="w-[33%] max-md:w-full h-full ">
          <img src="/blob/S thing.svg" className="w-8 h-8 max-md:w-5 max-md:h-5 " />
          <h1 className="text-[2rem] max-md:text-[1.5rem] font-medium tracking-tight leading-tight ">
            Two-way synchronization
          </h1>
          <p className="text-neutral-400 text-[0.9rem] max-md:text-[0.8rem] ">
            Integrate your task tracker with GitHub to sync changes instantly.
          </p>
        </div>
        <div className="w-[33%] max-md:w-full h-full mb-auto">
          <img src="/blob/connect four.svg" className="w-8 h-8 max-md:w-5 max-md:h-5 " />
          <h1 className="text-[2rem] max-md:text-[1.5rem] font-medium tracking-tight leading-tight ">
            Private task
          </h1>
          <p className="text-neutral-400 text-[0.9rem] max-md:text-[0.8rem] ">
            Integration and management of multiple data repositories
            effectively.
          </p>
        </div>
        <div className="w-[33%] max-md:w-full h-full ">
          <img src="/blob/multi layer.svg" className="w-8 h-8 max-md:w-5 max-md:h-5 " />
          <h1 className="text-[2rem] max-md:text-[1.5rem] font-medium tracking-tight leading-tight ">
            Multiple Repositories
          </h1>
          <p className="text-neutral-400 text-[0.9rem] max-md:text-[0.8rem] ">
            Organize multiple projects for more effective planning and
            collaboration.
          </p>
        </div>
      </div>
      <div className="flex max-md:flex-col max-md:gap-5 justify-between items-center px-40 max-[1024px]:px-30 max-[900px]:px-10 max-[768px]:px-6 mt-[3.5rem] max-md:mt-5 ">
        <div className="w-[33%] max-md:w-full h-full ">
          <img src="/blob/compass.svg" className="w-8 h-8 max-md:w-5 max-md:h-5 " />
          <h1 className="text-[2rem] max-md:text-[1.5rem] font-medium tracking-tight leading-tight ">
            Milestone migration
          </h1>
          <p className="text-neutral-400 text-[0.9rem] max-md:text-[0.8rem] ">
            Seamless migration of key project milestones between repositories.
          </p>
        </div>
        <div className="w-[33%] max-md:w-full h-full mb-auto">
          <img src="/blob/diamond layer.svg" className="w-8 h-8 max-md:w-5 max-md:h-5 " />
          <h1 className="text-[2rem] max-md:text-[1.5rem] font-medium tracking-tight leading-tight ">
            Track progress
          </h1>
          <p className="text-neutral-400 text-[0.9rem] max-md:text-[0.8rem] ">
            Keep track of GitHub contributions and changes within your
            workspace.
          </p>
        </div>
        <div className="w-[33%] max-md:w-full h-full ">
          <img src="/blob/tiles.svg" className="w-8 h-8 max-md:w-5 max-md:h-5 " />
          <h1 className="text-[2rem] max-md:text-[1.5rem] font-medium tracking-tight leading-tight ">
            Advanced filtering
          </h1>
          <p className="text-neutral-400 text-[0.9rem] max-md:text-[0.8rem] ">
            Precise project data search with advanced filtering capabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GithubSection;
