import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-100 bg-light text-lg-start text-muted text-center mt-5">
        <p></p>
        <section  className="d-flex justify-content-center p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
     
    </div>
        <div>
          <NavLink to="" className="me-4 text-reset">
       
            <i className="fa fa-facebook"></i>
          </NavLink>
          <NavLink to="" className="me-4 text-reset">
            <i className="fa fa-twitter"></i>
          </NavLink>
          {/* <NavLink to="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </NavLink> */}
          <NavLink to="" className="me-4 text-reset">
            <i className="fa fa-instagram"></i>
          </NavLink>
          {/* <NavLink to="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </NavLink> */}
          {/* <NavLink to="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </NavLink> */}
        </div>
        </section >
        <div className="container text-center text-md-start mt-5" />

        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3"></i>Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <NavLink to="#!" className="text-reset">
              Social Developer
              </NavLink>
            </p>
            <p>
              <NavLink to="#!" className="text-reset">
              Flutter Developer
              </NavLink>
            </p>
            <p>
              <NavLink to="#!" className="text-reset">
              Teach Developer
              </NavLink>
            </p>
            <p>
              <NavLink to="#!" className="text-reset">
              Web Developer
              </NavLink>
            </p>
          </div>

          {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <NavLink to="#!" className="text-reset">
                Pricing
              </NavLink>
            </p>
            <p>
              <NavLink to="#!" className="text-reset">
                Settings
              </NavLink>
            </p>
            <p>
              <NavLink to="#!" className="text-reset">
                Orders
              </NavLink>
            </p>
            <p>
              <NavLink to="#!" className="text-reset">
                Help
              </NavLink>
            </p>
          </div> */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3"></i> Mumbai, Maharashtra
            </p>
            <p>
              <i className="fas fa-envelope me-3"></i>
              info@example.com
            </p>
            <p>
              <i className="fas fa-phone me-3"></i> +91 1234567890 
            </p>
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
