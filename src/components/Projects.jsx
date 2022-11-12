import React from "react";
import { AiOutlineFolder } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

export const projectData = [
  {
    id: 1,
    name: "Blog App",
    github: "https://github.com/siddharth17vaishnav/BloggApp_Reactjs_MySql",
    description:
      "Created a blog website just like twitter a user can post a article ,share the article , comment and like also",
    technology: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "Nodejs",
      },
      {
        id: 3,
        name: "Tailwindcss",
      },
    ],
  },
  {
    id: 2,
    name: "Ecommerce App",
    github: "https://github.com/siddharth17vaishnav/FlipkartCloneReactjs",
    description:
      "This project has complete backend support and admin interface to handle all customers ,products and orders.",
    technology: [
      {
        id: 11,
        name: "React",
      },
      {
        id: 12,
        name: "Nodejs",
      },
      {
        id: 13,
        name: "Tailwindcss",
      },
    ],
  },
  {
    id: 3,
    name: "News App",
    github: "https://github.com/siddharth17vaishnav/InshorCloneReactJs",
    description:
      "Used newsapi from newsapi.org to create this project it fetches news based on category. ",
    technology: [
      {
        id: 21,
        name: "React",
      },
      {
        id: 22,
        name: "Tailwindcss",
      },
      {
        id: 23,
        name: "Api",
      },
    ],
  },
  {
    id: 4,
    name: "Netflix Clone",
    github: "https://github.com/siddharth17vaishnav/Netflix-Reactjs",
    description:
      "In this project i used TMDB api to fetch movies data and to store user data i have used Firebase as a backened.",
    technology: [
      {
        id: 31,
        name: "React",
      },
      {
        id: 32,
        name: "Tailwindcss",
      },
      {
        id: 33,
        name: "Firebase",
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className="px-6 md:px-[170px] bg-[#4831D4]  text-[#CCF381] pb-12">
      <div className="flex pt-4">
        <h1 className="text-4xl font-bold ">Some Things I've Built</h1>
        <span className="w-full h-[1px] bg-[#CCF381] my-auto"></span>
      </div>
      <div className="flex flex-wrap justify-between">
        {projectData.map((item) => {
          return (
            <a href={item?.github} target="_blank" rel="noreferrer">
              <div
                className="bg-[#CCF381] w-[300px] h-[225px] mt-12 rounded-lg text-[#4831D4] p-4 mx-auto md:mx-0 hover:scale-110"
                key={item.id}

              >
                <div className="flex justify-between ">
                  <AiOutlineFolder size={20} />
                  <a href={item?.github} target="_blank" rel="noreferrer">
                    <BiLinkExternal size={20} />
                  </a>
                </div>
                <div className="">
                  <p className="text-2xl pt-2 font-bold">{item?.name}</p>
                  <div className="flex flex-wrap pt-2">
                    <p>{item?.description}</p>
                  </div>
                  <div className="flex gap-5 flex-wrap pt-4 ">
                    {item?.technology?.map((skill) => {
                      return (
                        <div key={item.id}>
                          <p>{skill?.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
