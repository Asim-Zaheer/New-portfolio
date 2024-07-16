import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./App.css";

const DarkMode = () => {
    const setDarkMode = ()=>{
        document.querySelector("body").setAttribute("data-theme" ,"dark" )
        localStorage.setItem("SelectedTheme" ," dark")
    }
    const setLightMode=()=>{
        document.querySelector("body").setAttribute("data-theme" ,"light" )
        localStorage.setItem("SelectedTheme " , "light" )
    }
    const SelectedTheme = localStorage.getItem("SelectedTheme")
    if (SelectedTheme === "dark"){
        setDarkMode()
    }

    const select =(e)=>{
       if(e.target.checked) setDarkMode()
       else setLightMode()
       
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={select}
                defaultChecked={SelectedTheme  === "dark"}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
