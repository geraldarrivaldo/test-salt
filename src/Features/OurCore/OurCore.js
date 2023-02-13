import React, { useContext, useEffect } from "react";
import Desk from "../../assets/desk.png";
import AppContext from "../../Shared/Component/AppContext";

const Core = [
  {
    title: "Dedication",
    desc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
  },
  {
    title: "Intellectual Honesty",
    desc: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.",
  },
  {
    title: "Curiosity",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
  },
];

function OurCore() {
  const context = useContext(AppContext);
  useEffect(() => {
    const element = document.getElementById(context.navSub);
    element?.scrollIntoView({ behavior: "smooth" });
    context.setNavSub("");
  }, [context?.navSub]);
  return (
    <>
      <div id="core" className="lg:px-20 px-10 pt-10">
        <div>
          <h3 className="text-2xl text-[#029FE4] font-bold pb-3">
            Our Core Values
          </h3>
          <span className="text-[#777777]">
            Ridiculus laoreet libero pretium et, sit vel elementum convallis
            fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
            etiam sit. <br></br> In mauris rutrum ac ut volutpat, ornare nibh
            diam. Montes, vitae, nec amet enim.
          </span>
        </div>
        <div className="lg:grid grid-cols-3 gap-4 grid-cols-1 py-10">
          {Core.map((data, index) => {
            return (
              <div key={index} className="py-5">
                <div className="pb-2 font-bold text-lg text-center max-[1023px]:flex max-[1023px]:items-center">
                  <div className="w-10 h-1 mr-2  bg-black block lg:hidden"></div>
                  <div>
                    <span className="text-xl">{data.title}</span>
                  </div>
                </div>

                <div className="pb-2 text-lg text-[#777777] lg:px-2">
                  <span>{data.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:px-0 px-5 flex justify-center lg:justify-end">
        <img src={Desk} width={500} height={50} />
      </div>
    </>
  );
}

export default OurCore;
