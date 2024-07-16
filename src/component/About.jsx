import React from "react";
// import Common from "./Common";
import { NavLink } from "react-router-dom";
import cv from "../assesst/NEWCV.pdf";
// import { Container } from 'react-bootstrap'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

function About() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="row">
                <div className=" animationEffect col-md-6 pt-5 pt-lg-0 order-1 order-lg-2   d-flex justify-content-center flex-column ">
                  {/* <h1> </h1> */}
                  <h1 className="my-4 ">
                    Who is Asim?
                    {/* Get to Know About */}
                    <strong className="brand-name">
                      {" "}
                      Muhammad Asim Zaheer
                    </strong>{" "}
                  </h1>

                  <h2>
                    {
                      "Welcome to Muhammad Asim Zaheer's portfolio, He is a Front-End Web Developer. He is currently pursuing a degree in Computer Science at UBIT. His expertise lies in HTML, CSS, JavaScript, React, Bootstrap, and SQL. His next goal is to master the MERN (MongoDB, Express, React, Node.js) stack Or App development via React-Native which he is in learning. Thank you for visiting my portfolio. "
                    }
                  </h2>
                  <div className="mt-3">
                    <NavLink to={"/contact"} className="btn-get-start me-3 ">
                      Hire Me Now
                    </NavLink>
                    <NavLink
                      target="_blank"
                      rel="noreferrer"
                      to="https://drive.google.com/drive/u/1/folders/1jO602GOsHKFotEgQoCi16MLX4EBb-Z8w"
                      download={cv}
                      className=" my-3 btn-cv  "
                    >
                      Download CV
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6  order-1 order-lg-2 header-img  ">
                  <img
                    className="img-fluid animated pt-4 rounded-circle "
                    src="/images/bg2.png"
                    alt="img"
                  />
                </div>
              </div>
              {/* <div className="container">
                <div className="row">
                  <div
                    class="card col-md-2 border-light mb-3"
                    style={{ maxWidth: "18rem" }}
                  >
                    <div class="card-header">Header</div>
                    <div class="card-body">
                      <h5 class="card-title">Light card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="row   pb-4">
                <div className="col-10 col-md-10 col-sm-2  pb-5 ">
                  <div className="icons  mt-5 ">
                    <a
                      className="git ms-3 me-4 my-4"
                      href="https://github.com/Asim-Zaheer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                    <a
                      className="linkedIn me-3 "
                      href="https://www.linkedin.com/in/asim-zaheer-813674228/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      className="ints me-4 mb-4"
                      href="https://www.instagram.com/muhammada2221/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>

                    <a
                      className="me-4 mb-4"
                      href="https://wa.me/923223661298"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp />
                    </a>

                    <a
                      className="facebook me-4 mb-4"
                      href="https://www.facebook.com/iasimzaheer/"
                      target="_blank"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      className="me-4 mb-4"
                      href="https://twitter.com/Muhamma35553348"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="container-fluid">
        
       
      </div> */}
    </>
  );
}

export default About;

// Greetings and welcome to my portfolio. My name is Muhammad Asim Zaheer, and I am a dedicated Front-End Web Developer. I am currently pursuing a degree in Computer Science at UBIT, where I am honing my skills and knowledge in various web development technologies.

// My expertise spans a range of essential technologies, including HTML, CSS, JavaScript, React, Bootstrap, and SQL. These skills have allowed me to craft engaging and user-friendly web experiences. As I progress in my academic journey, my next goal is to master the MERN (MongoDB, Express.js, React, Node.js) stack, further expanding my capabilities in the world of web development.

// Thank you for taking the time to visit my portfolio, and I look forward to sharing my projects and experiences with you.

// "Welcome to my portfolio. I am Muhammad Asim Zaheer, a Front-End Web Developer. I am currently pursuing a degree in Computer Science at UBIT. My expertise lies in HTML, CSS, JavaScript, React, Bootstrap, and SQL. My next goal is to master the MERN (MongoDB, Express, React, Node.js) stack. Thank you for visiting my portfolio. "
