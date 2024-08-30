import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom'
import Common from "./Common";
import Work from "./Work";
import About from "./About";
import NET from "vanta/src/vanta.net";
import TypewriterEffect from "./TypeWriter";
import Contact from "./Contact";
import Slider from "./Slider"
function Home() {
  useEffect(()=>{
    NET({
          el: "#vanta",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x2289d4,
              backgroundColor: 0x0,
              // spacing: 17.00 
          // backgroundColor: 0x110e18,
        });
  },[])
    const typewriterTexts = [
      "FrontEnd ",
      "Mobile App ",
      "Backend ",
      "WordPress ",
    ];
  // useEffect(() => {
  //   NET({
  //     el: "#vanta",
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.0,
  //     minWidth: 200.0,
  //     scale: 1.0,
  //     scaleMobile: 1.0
  // 0xf53a7a,
  //   });
  // }, []);
  return (
    <>
    {/* <div id="vanta"> */}
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-md-10 mx-auto">
            <div className="row">
              <div className="animationEffect col-md-6 pt-5 pt-lg-0 order-1 order-lg-2  d-flex justify-content-center flex-column">
                Hi! I am
                <h1 className="my-4 text-white">
                  <strong className="brand-name"> Muhammad Asim Zaheer </strong>{" "}
                </h1>

                <h2 className="">
                  I am Software Enginner from Ubit  <TypewriterEffect texts={typewriterTexts} />
                <div sx={{ display: "block" }}>Developer</div>
                </h2>

                <div className="mt-3">
                  <NavLink to="/work" className="btn-get-start">
                    {/* Use props.btname if coming from props */}
                    Get Started
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 col-md-4 order-1 order-lg-2 header-img">
                <img
                  className="img-fluid animated pt-4 rounded-circle"
                  // src={props.imgsrc}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<Slider/>
      {/* <Common
        
        name=""
        imgsrc="/images/bgp.png"
        visit="/work"
        btname="Get Start"
        para="Web and App Ethusiast"
        /> */}
        {/* </div> */}
        <Work/>
        <About/>
        {/* <Contact/> */}
    </>
  );
}

export default Home;
