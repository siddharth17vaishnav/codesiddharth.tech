import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#4831D4] ">
      <div className="w-full md:max-w-[80%] h-full mx-auto  bg-[#141C3A] text-white flex flex-col lg:flex-row justify-around  md:rounded-lg py-8 mb-[-10px]">
        <p className="m-auto font-bold text-2xl">Start a Project</p>
        <p className="m-auto px-2 pt-1">
          Interested in working together? We should queue up a time to chat.
          I’ll buy the coffee.
        </p>
        <div className="m-auto  border-solid border-2 border-indigo-600 rounded-full inline-block py-1 px-2 text-xl mt-7 md:mt-0">
          <a href="mailto:siddharth17vaishnav@gmail.com">
            <button>🤘🏻 Let's do this</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
