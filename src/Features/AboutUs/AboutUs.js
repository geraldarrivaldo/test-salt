import React, { useContext, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BannerImage from "../../assets/banner_image.png";
import WhoWeAre from "../../assets/who.png";
import WhatWeDo from "../../assets/whatwedo.png";
import HowWeDo from "../../assets/how.png";
import AppContext from "../../Shared/Component/AppContext";

const content = [
  {
    image: WhoWeAre,
    title: "Who we are",
    subTitle: "Technology Company",
    desc: "Sed ut perspiciatis unde omnis iste natus sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsaquae ab illo inventore veritatis et quasi architecto beataevitae dicta sunt explicabo.",
  },
  {
    image: WhatWeDo,
    title: "What we do",
    subTitle: "Professional Brand Management",
    desc: " Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    image: HowWeDo,
    title: "How we do",
    subTitle: "Strategize, Design, Collaborate",
    desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in eavoluptate velit esse sequam nihil molestiae consequatur.",
  },
];

function AboutUs() {
  const context = useContext(AppContext);
  useEffect(() => {
    const element = document.getElementById(context.navSub);
    element?.scrollIntoView({ behavior: "smooth" });
    context.setNavSub("");
  }, [context?.navSub]);
  return (
    <>
      <div id="about" className="pt-20 container mx-auto flex justify-center">
        <div className="lg:w-1/2 w-[90%] ">
          <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
            {content.map((data, index) => {
              return (
                <div className="pb-10" key={index}>
                  <img src={data.image} width={20} height={10} />
                  <div className="pt-2">
                    <span className="font-bold text-xl text-[#029FE4] ">
                      {data.title}
                    </span>
                  </div>

                  <div className="py-2">
                    <span className="text-black ">{data.subTitle}</span>
                  </div>
                  <p className="text-[#777777] leading-loose">{data.desc}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
