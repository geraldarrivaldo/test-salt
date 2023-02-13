import React from "react";
import BannerImage from "../../assets/banner_image.png";
import style from "./Banner.module.scss";
import { IoIosArrowDown } from "react-icons/io";

function Banner() {
  return (
    <>
      <div
        className={[style["bg-image"], "pt-24", "pb-96", "bg-center"].join(" ")}
      >
        {/* <img src={BannerImage} className="ml-3" width={500} alt="BannerImage" /> */}
        <div className="relative">
          <div className="trapezoid  absolute top-[150px]  ">
            <div className="container mx-auto max-[768px]:h-[250px] max-[768px]:overflow-y-auto pt-10 px-10">
              <h1 className="font-bold lg:text-4xl md:text-2xl text-white">
                Discover Your Wonder
              </h1>
              <p className="text-white lg:text-xl text-lg pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="flex justify-center absolute -bottom-[400px] left-0 right-0 ">
            <div className="rounded-full bg-white py-5 px-2 animate-bounce">
              <div>
                <IoIosArrowDown size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
