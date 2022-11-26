import React from "react";
import { AiOutlineFolder } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

const Projects = ({ projectData }) => {
  return (
    <div className="px-6 md:px-[170px] bg-[#4831D4]  text-[#CCF381] pb-12">
      <div className="flex pt-4">
        <h1 className="text-4xl font-bold ">Some Things I`ve Built</h1>
        <span className="w-full h-[1px] bg-[#CCF381] my-auto"></span>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {projectData.map((item) => {
          return (
            <div key={item.name}>
              <div
                className="bg-[#CCF381] w-[300px] h-[230px]  mt-12 rounded-lg text-[#4831D4] p-4  md:mx-0 hover:scale-110"
                key={item.id}
              >
                <div className="flex justify-between ">
                  <AiOutlineFolder size={20} />
                  <a
                    href={item?.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item?.name}
                  >
                    <BiLinkExternal size={20} />
                  </a>
                </div>
                <div className="">
                  <p className="text-2xl pt-2 font-bold">{item?.name}</p>
                  <div className="flex flex-wrap pt-2">
                    <p>{item?.description}</p>
                  </div>
                  <div className="flex gap-2 flex-wrap pt-4 font-bold">
                    {item?.technology?.map((skill) => {
                      return (
                        <div key={item.id * Math.random()}>
                          <p>{skill?.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
