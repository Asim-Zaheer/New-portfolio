import React from 'react'
import NAvbar from "./component/Navbar";
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import Work from "./component/Work";

function AppRouter() {
  return (
    <>
     <BrowserRouter>
   <NAvbar/>
   <Routes>
    <Route path="/" Component={Home} />
    <Route path="/contact" Component={Contact} />
    <Route path="/about"Component={About} />
    <Route path="/work" Component={Work} />
    {/* <Route path="/game" Component={Game} /> */}
    {/* <Redirect to="/" /> */}
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default AppRouter