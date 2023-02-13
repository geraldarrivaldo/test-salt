import React, { useState } from "react";
import AppContext from "../../Shared/Component/AppContext";
import Footer from "../../Shared/Component/Footer/Footer";
import Header from "../../Shared/Component/Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import OurCore from "../OurCore/OurCore";
import Speciality from "../Speciality/Speciality";
import Banner from "./Banner";

function Home() {
  const [navSub, setNavSub] = useState("");

  return (
    <AppContext.Provider
      value={{
        navSub,
        setNavSub,
      }}
    >
      <Header />
      <Banner />
      <AboutUs />
      <OurCore />
      <Speciality />
      <Footer />
    </AppContext.Provider>
  );
}

export default Home;
