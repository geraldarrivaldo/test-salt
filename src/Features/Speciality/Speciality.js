import React, { useContext, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Speed from "../../assets/speed.png";
import Access from "../../assets/acces.png";
import Exhaust from "../../assets/exhaust.png";
import AppContext from "../../Shared/Component/AppContext";

const special = [
  {
    title: "Speed Improvement",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
    image: Speed,
  },
  {
    title: "Accesories",
    desc: "Lorem ipsum dolor sit amet,  adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
    image: Access,
  },
  {
    title: "Exhaust",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
    image: Exhaust,
  },
];

function Speciality() {
  const context = useContext(AppContext);
  useEffect(() => {
    const element = document.getElementById(context.navSub);
    element?.scrollIntoView({ behavior: "smooth" });
    context.setNavSub("");
  }, [context?.navSub]);
  return (
    <div id="special" className="bg-[#509FDD] px-10 py-20">
      <div className="bg-white">
        <div className="px-20 max-[768px]:px-10 py-10">
          <span className="font-bold text-2xl text-[#029FE4]">
            OUR SPECIALITY
          </span>
          <p className="pt-3 text-[#303030]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            euismod libero vel leo auctor, in venenatis nulla consequat. Sed
            commodo nunc sit amet congue aliquam.
          </p>
        </div>

        <div className="flex justify-center pt-10 pb-20">
          <div className="lg:w-1/2 w-full">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {special.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center justify-center py-10">
                      <div>
                        <img
                          //   className="object-fill w-full h-96"

                          width={100}
                          height={50}
                          src={data.image}
                          alt="image slide 1"
                        />
                      </div>
                      <div className="py-5 text-xl font-bold">
                        <span>{data.title}</span>
                      </div>
                      <div className="px-10">
                        <p className="sm:text-lg text-[14px] text-[#A7A7A7]">
                          {data.desc}{" "}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speciality;
