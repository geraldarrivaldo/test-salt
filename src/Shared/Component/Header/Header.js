import React, { useContext } from "react";

import Logo from "../../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import AppContext from "../AppContext";

function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const context = useContext(AppContext);

  return (
    // <header fixed="top">
    //   <Navbar bg="light" variant="light" expand="xl" fixed="top">
    //     <Navbar.Brand href="/">
    //       <img src={Logo} className="ml-3" width={126} alt="CompanyLogo" />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link
    //           // onClick={() =>
    //           //   AboutUs.current.scrollIntoView({
    //           //     behavior: "smooth",
    //           //     block: "start",
    //           //   })
    //           // }
    //           className="ms-3"
    //         >
    //           About Us
    //         </Nav.Link>
    //         <Nav.Link
    //           // onClick={() =>
    //           //   OurCore.current.scrollIntoView({
    //           //     behavior: "smooth",
    //           //     block: "start",
    //           //   })
    //           // }
    //           className="ms-3"
    //         >
    //           Our Core Values
    //         </Nav.Link>
    //         <Nav.Link
    //           // onClick={() =>
    //           //   OurSpeciality.current.scrollIntoView({
    //           //     behavior: "smooth",
    //           //     block: "start",
    //           //   })
    //           // }
    //           className="ms-3"
    //         >
    //           Our Speciality
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar>
    // </header>
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-[#777777]"
              href="#pablo"
            >
              <img src={Logo} className="ml-3" width={126} alt="CompanyLogo" />
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none ">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-[#777777] hover:opacity-75"
                  href="#pablo"
                  onClick={() => {
                    context.setNavSub("about");
                  }}
                >
                  <span className="ml-2">About Us</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-[#777777] hover:opacity-75"
                  href="#pablo"
                  onClick={() => {
                    context.setNavSub("core");
                  }}
                >
                  <span className="ml-2">Our Core Values</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-[#777777] hover:opacity-75"
                  href="#pablo"
                  onClick={() => {
                    context.setNavSub("special");
                  }}
                >
                  <span className="ml-2">Speciality</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
