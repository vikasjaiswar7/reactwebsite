import React from "react";
import Imge from "../src/Imge/about.gif";
import "./App.css";
import Comman from "./Comman";

const About = () => {
  return (
    <>
      <Comman
        name=" Welcome to about pages"
        imgsrc={Imge}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
