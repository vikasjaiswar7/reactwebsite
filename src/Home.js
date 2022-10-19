import React from "react";
import "./App.css";
import Comman from "./Comman";
import Imge from "../src/Imge/home.gif";
const Home = () => {
  return (
    <>
      <Comman name="Grow your business with"
        imgsrc={Imge}
        visit="/service"
        btname="Get Started"/>
    </>
  );
};

export default Home;
