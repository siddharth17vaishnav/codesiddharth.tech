import React from "react";

const Description = () => {
  return (
    <div className="my-[40px] md:my-[100px]">
      <div className="flex justify-around">
        <div className="mx-6">
          <h1 className="text-[#513BD6] font-bold text-4xl mt-6">Design</h1>
          <p className="text-[#775B8E] text-xl max-w-[400px] md:max-w-[600px] mt-2">
            I'm probably not the typical designer positioned behind an
            Illustrator artboard adjusting pixels, but I design. Immersed in
            stylesheets tweaking font sizes and contemplating layouts is where
            you'll find me (~_^). I'm committed to creating fluent user
            experiences while staying fashionable.
          </p>
        </div>
        <div className=" gap-2 items-center hidden md:flex mr-[100px]">
          <span className="w-[10px] h-[10px] border-solid border-2 border-indigo-600 rounded-full inline-block"></span>
          <span className="w-[10px] h-[10px] border-solid border-2 border-indigo-600 rounded-full inline-block"></span>
          <span className="w-[10px] h-[10px] border-solid border-2 border-indigo-600 rounded-full inline-block"></span>
          <span className="w-[10px] h-[10px] border-solid border-2 border-indigo-600 rounded-full inline-block"></span>
          <span className="w-[10px] h-[10px] border-solid border-2 border-indigo-600 rounded-full inline-block"></span>
        </div>
      </div>
      <div className="flex justify-around">
        <div className=" gap-2 items-center hidden md:flex ml-[30px]">
          <span className="w-[10px] h-[10px] border-solid border-2 border-indigo-600 rounded-full inline-block"></span>
          <span className="w-[10px] h-[10px] border-solid border-2 border-indigo-600 rounded-full inline-block"></span>
          <span className="w-[10px] h-[10px] border-solid border-2 border-indigo-600 rounded-full inline-block"></span>
          <span className="w-[10px] h-[10px] border-solid border-2 border-indigo-600 rounded-full inline-block"></span>
          <span className="w-[10px] h-[10px] border-solid border-2 border-indigo-600 rounded-full inline-block"></span>
        </div>
        <div className="mx-6">
          <h1 className="text-[#513BD6] font-bold text-4xl mt-6">
            Engineering
          </h1>
          <p className="text-[#775B8E] text-xl max-w-[400px] md:max-w-[600px] mt-2">
            In building JavaScript applications, I'm equipped with just the
            right tools, and can absolutely function independently of them to
            deliver fast, resilient solutions optimized for scale — performance
            and scalabilty are priorities on my radar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
