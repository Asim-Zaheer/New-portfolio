import React, { useEffect } from "react";
// import { NavLink } from 'react-router-dom'
import Common from "./Common";

import NET from "vanta/src/vanta.net";

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
    <div id="vanta">

      <Common
        
        name=""
        imgsrc="/images/bgp.png"
        visit="/work"
        btname="Get Start"
        para="React Enthusiast"
        />
        </div>
    </>
  );
}

export default Home;
