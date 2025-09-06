import React from "react";

const GithubSection = () => {
  return (
    <div className="w-full h-full bg-[#111111] text-white py-33 lg:py-22 md:py-20 sm:py-12 ">
      <div className="px-40">
        <h1 className="text-[4.3rem] font-semibold  tracking-tighter leading-[1.15] ">
          Sync with Github. <br /> Both ways.
        </h1>
        <p className="text-[1.3rem] text-neutral-400 mt-2">
          Manage your tasks efficiently with Huly's bidirectional GitHub
          synchronization. <br />
          Use Huly as an advanced front-end for GitHub Issues and GitHub
          Projects.
        </p>
      </div>
      <div className="w-full aspect-video overflow-hidden relative bg-[#111111]  ">
        <video autoPlay muted loop playsInline className="w-full h-full absolute inset-0 object-cover ">
          <source src="/github promo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex justify-between items-center px-40 ">
        <div className="w-[27%] h-full ">
          <img src="/blob/S thing.svg" className="w-8 h-8" />
          <h1 className="text-[2rem] font-medium tracking-tight leading-tight ">
            Two-way synchronization
          </h1>
          <p className="text-neutral-400 text-[0.9rem] ">
            Integrate your task tracker with GitHub to sync changes instantly.
          </p>
        </div>
        <div className="w-[27%] h-full mb-auto">
          <img src="/blob/connect four.svg" className="w-8 h-8" />
          <h1 className="text-[2rem] font-medium tracking-tight leading-tight ">
            Private task
          </h1>
          <p className="text-neutral-400 text-[0.9rem] ">
            Integration and management of multiple data repositories
            effectively.
          </p>
        </div>
        <div className="w-[27%] h-full ">
          <img src="/blob/multi layer.svg" className="w-8 h-8" />
          <h1 className="text-[2rem] font-medium tracking-tight leading-tight ">
            Multiple Repositories
          </h1>
          <p className="text-neutral-400 text-[0.9rem] ">
            Organize multiple projects for more effective planning and
            collaboration.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center px-40 mt-[3.5rem] ">
        <div className="w-[27%] h-full ">
          <img src="/blob/compass.svg" className="w-8 h-8" />
          <h1 className="text-[2rem] font-medium tracking-tight leading-tight ">
            Milestone migration
          </h1>
          <p className="text-neutral-400 text-[0.9rem] ">
            Seamless migration of key project milestones between repositories.
          </p>
        </div>
        <div className="w-[27%] h-full mb-auto">
          <img src="/blob/diamond layer.svg" className="w-8 h-8" />
          <h1 className="text-[2rem] font-medium tracking-tight leading-tight ">
            Track progress
          </h1>
          <p className="text-neutral-400 text-[0.9rem] ">
            Keep track of GitHub contributions and changes within your
            workspace.
          </p>
        </div>
        <div className="w-[27%] h-full ">
          <img src="/blob/tiles.svg" className="w-8 h-8" />
          <h1 className="text-[2rem] font-medium tracking-tight leading-tight ">
            Advanced filtering
          </h1>
          <p className="text-neutral-400 text-[0.9rem] ">
            Precise project data search with advanced filtering capabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GithubSection;
