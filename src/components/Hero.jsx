import React from "react";
import profile from "../assets/profile.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";
import react from "../assets/react.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import mongo from "../assets/mongo.png";
import next from "../assets/next.png";
import node from "../assets/node.png";
import sql from "../assets/sql.png";
import tailwind from "../assets/tailwind.png";
import postgres from "../assets/postgres.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row flex-nowrap">
      <div className="w-full h-[800px] lg:h-screen  bg-[#4831D4] basis-[60%] flex flex-col my-auto justify-start pt-[10%] ">
        <h1 className="text-[#CCF381] text-5xl font-bold mx-12">FullStack</h1>
        <h1 className="text-[#CCF381] text-5xl font-bold mx-12">Developer</h1>
        <p className="text-white text-2xl max-w-[80%] mx-12 mt-4 pb-4">
          I like to craft solid and scalable fullstack products with great user
          experiences.
        </p>

        <div>
          <ul className="flex justify-around mx-12 mt-8 gap-3 flex-col md:flex-row pb-7">
            <li className="text-xl text-[#CCF381] ">
              High skilled a progressive enhancement ,design system & UI
              Engineering.
            </li>
            <li className="text-xl text-[#CCF381] ">
              Having experience of building products for client across several
              countries.
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-[#CCF381] text-xl ml-12 mt-8 underline">
            Skills
          </h1>
          <div className="w-[300px] ml-12 mt-4 mb-12">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={5}
              spaceBetween={30}
              freeMode={false}
              pagination={false}
              loop={true}
              modules={[FreeMode, Pagination, Autoplay]}
              className="p-0 m-0"
            >
              <SwiperSlide>
                {" "}
                <img src={html} alt="logo" className="w-[50px] " />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={css} alt="logo" className="w-[50px] " />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={js} alt="logo" className="w-[50px]" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={react} alt="logo" className="w-[50px] " />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={next} alt="logo" className="w-[50px] " />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={node} alt="logo" className="w-[50px] " />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={tailwind} alt="logo" className="w-[50px] " />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={mongo} alt="logo" className="w-[50px] " />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={postgres} alt="logo" className="w-[50px] " />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={sql} alt="logo" className=" " />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="w-full h-[800px] lg:h-screen  bg-[#CCF381]  basis-[40%] justify-center my-auto items-center  flex align-center  flex-col">
        <img
          src={profile}
          alt="siddharth vaishnav"
          className="w-[50%] sm:w-[60%] md:w-[70%] lg:w-[60%] mx-auto my-4"
        />
        <h3 className="text-2xl font-bold pb-4 text-[#4831D4]">Siddharth Vaishnav</h3>
      </div>
    </div>
  );
};

export default Hero;
