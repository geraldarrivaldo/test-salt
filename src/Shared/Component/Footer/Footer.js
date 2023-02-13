import React, { useContext } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import Logo from "../../../assets/logo-footer.png";
import AppContext from "../AppContext";

function Footer() {
  const context = useContext(AppContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer>
        <div className=" pt-10 pb-40 bg-gradient-to-t from-[#07477A] to-blue-500 relative">
          <div
            onClick={scrollToTop}
            className="cursor-pointer rounded-lg absolute right-0 bg-white px-10 -mt-20 lg:mt-28 lg:mr-10 mr-5 flex flex-col  items-center py-2 justify-center"
          >
            <div className="animate-bounce">
              <AiOutlineArrowUp size={25} />
            </div>
            <div>
              <p className="text-black">Back to top</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 px-10">
            <div className="flex justify-center self-center">
              <img src={Logo} className="w-1/2" width={250} height={100} />
            </div>
            <div className="bg-white flex justify-center rounded-lg px-2 py-5">
              <span className="text-[#25A0D8] text-center">
                Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung,
                Jawa Barat
              </span>
            </div>
            <div className="text-lg font-bold  text-white flex flex-col text-center justify-center">
              <label
                className="cursor-pointer"
                onClick={() => {
                  context.setNavSub("about");
                }}
              >
                Who We Are
              </label>
              <label
                className="cursor-pointer"
                onClick={() => {
                  context.setNavSub("core");
                }}
              >
                Our Values
              </label>
              <label
                className="cursor-pointer"
                onClick={() => {
                  context.setNavSub("special");
                }}
              >
                The Perks
              </label>
            </div>
          </div>
          <div className="text-white text-center absolute bottom-0 left-0 right-0">
            © 2023, <span className="text-white">PT. Ako Media Asia</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
