import React from "react";
import github from "../assets/github.png";
import whatsapp from "../assets/whatsapp.png";
import twitter from "../assets/twitter.png";
import link from "../assets/link.png";

const Footer = () => {
  return (
    <div className="bg-[#3D155F] flex justify-center gap-5 py-4">
      <a href="https://github.com/siddharth17vaishnav">
        <img
          src={github}
          alt="Github"
          className="w-[50px] rounded-full object-cover cursor-pointer"
        />
      </a>
      <a href="https://twitter.com/code_siddharth">
        <img
          src={twitter}
          alt="Twitter"
          className="w-[50px] rounded-full object-cover cursor-pointer"
        />
      </a>
      <a href="https://www.linkedin.com/in/siddharth-vaishnav-6b44ba185/">
        <img
          src={link}
          alt="Linkedin"
          className="w-[50px] rounded-full object-cover cursor-pointer"
        />
      </a>
      <a href="https://wa.me/+919409239563">
        {" "}
        <img
          src={whatsapp}
          alt="Github"
          className="w-[50px] rounded-full object-cover cursor-pointer"
        />
      </a>
    </div>
  );
};
export default Footer;
