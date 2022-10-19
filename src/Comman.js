import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

const Comman = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row  homes">
            <div className="col-10 mx-auto">
                <div className="row">
              <div className="col-md-6 pt-8 pt-lg-0 order-2-lg-1 d-flex justify-content-center flex-column">
                <h1>
                 {props.name}
                  <strong className="brand-name"> An International</strong>
                </h1>
                <h2 className="my-3">
                  We are the team of talented developer making{" "}
                  <strong>Website.</strong>
                </h2>
                <div className="mt-3">
                  <NavLink to={props.visit} className="btn btn-get-started btn">
                  {props.btname}
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 header-img ">
                <img
                  src={props.imgsrc}
                  className="img-fluid animated"
                  alt="homeimage"
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comman;
