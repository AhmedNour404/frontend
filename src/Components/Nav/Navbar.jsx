import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from "react-router-dom"
import { useEffect, useState } from 'react'
import "./Navbar.css";
import haramsvg from "../../assets/haram.svg";
import DarkModeIcon from "./Dark";
import { useContext } from "react";
import { LanguageContext } from "../Context/Context";

export default function Navbar() {
  const message = " ايه هي اسعار باقات الاشتراك";
  const transmessage = encodeURIComponent(message);
  const [darkMode, setDarkMode] = useState(true);
  const [passedthefisrtdiv, setpassedthefisrtdiv] = useState(false)
  const [navbarTheme, setNavbarTheme] = useState(""); // 👈 new state
  const [textcolor, settextcolor] = useState(false)
  const [sideapear, setsideapear] = useState(false)

  const { language, toggleLanguage } = useContext(LanguageContext);


  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);


  // Navbar color change
  useEffect(() => {
    const handleScroll = () => {
      const scrolledPast = window.scrollY > 100; // 👈 more than 100px
      setpassedthefisrtdiv(scrolledPast);





      if (scrolledPast) {
        // after 100px
        setNavbarTheme(
          darkMode
            ? "bg-black/50 shadow-lg"
            : "bg-white  shadow-lg shadow-gray-300/30"

        );
        settextcolor(darkMode ? "text-white" : "text-gray-600");
      } else {
        // before 100px
        setNavbarTheme("bg-transparent");
        settextcolor("text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [darkMode]);




useEffect(() => {
  let resizeTimeout;

  const handleResize = () => {
    clearTimeout(resizeTimeout);

    // Small debounce (prevents multiple state changes while resizing)
    resizeTimeout = setTimeout(() => {
      const width = window.innerWidth;

      // Hide sidebar if width >= lg (1024px)
      if (width >= 1024 && sideapear) {
        setsideapear(false);
        document.body.style.overflow = "auto";
      }
    }, 150);
  };

  window.addEventListener("resize", handleResize);
  return () => {
    clearTimeout(resizeTimeout);
    window.removeEventListener("resize", handleResize);
  };
}, [sideapear]);



useEffect(() => {
  document.body.style.overflow = sideapear ? "hidden" : "auto";
}, [sideapear]);


  // Sync dark mode state with <html> tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);





const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

useEffect(() => {
  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <>

      {sideapear && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-opacity-40  z-[50] lg:hidden"
          onClick={() => setsideapear(false)}
        />
      )}

      <nav className={`  fixed top-0  z-[9999999999] transition-colors duration-300 w-full  ${!sideapear && passedthefisrtdiv ? "backdrop-blur-lg" : ""} ${navbarTheme}`} >

        {sideapear && (
          <div
            className="fixed inset-0  bg-opacity-40 backdrop-blur-sm z-[50] lg:hidden"
            onClick={() => setsideapear(false)}
          />
        )}

        <div className="flex items-center justify-between px-2 py-3 lg:py-6 ">
          {/*  1-logo */}
          <div className="flex-1 flex justify-start ">
            <a href="/home" >
              <p className="font-oswald tracking-wide  text-4xl lg:text-3xl whitespace-nowrap  text-yellow-300"><span className=" font-oswald  lg:text-5xl text-5xl tracking-wide text-yellow-300">G</span>low GYM</p>
            </a>
          </div>


     <div
  id="mega-menu-full"
  className={`text-[17px] px-3 lg:px-0 font-semibold
    fixed lg:static top-0 right-0 h-full lg:h-auto
    w-3/4 sm:w-2/4 lg:w-auto
    shadow-xl lg:shadow-none
    transform transition-transform duration-500 ease-in-out
    z-50
    ${isLargeScreen ? "translate-x-0" : sideapear ? "translate-x-0" : "translate-x-full"}
  `}
>




            <div className="lg:hidden ">
              <button
                className="pt-4 text-gray-700  dark:text-gray-200"
                onClick={() => setsideapear(false)}
              >
              <XMarkIcon className="h-10 w-10 text-gray-800 dark:text-gray-200" />

              </button>
            </div>
            <ul className="flex flex-col lg:flex-row items-start lg:space-x-8 space-y-6 lg:space-y-0 mt-8 lg:mt-0">


              <li className="lg:hidden"><a href="home" className="   ">
                <p className="font-oswald tracking-wide text-4xl lg:text-5xl  text-yellow-300"><span className=" font-oswald  lg:text-7xl text-5xl  text-yellow-300">G</span>low GYM</p>
              </a></li>

              <li className='line'>
                <NavLink to="/home" onClick={() => setsideapear(false)} className={`flex  py-2 lg:px-3 rounded-sm  md:hover:bg-transparent ${textcolor}`} aria-current="page">{language === "ar" ? "الرئيسية" : "Home"}</NavLink>
              </li>
              <li className='line'>
                <NavLink to="/subscribtions" onClick={() => setsideapear(false)} className={`flex whitespace-nowrap py-2  lg:px-3  ${textcolor}`}>{language === "ar" ? "الخطط و الاسعار" : "Memberships"}</NavLink>
              </li>
              <li className='line'>
                <NavLink to="/RandR" onClick={(e) => setsideapear(false)} className={`  flex items-center justify-between w-full cursor-pointer whitespace-nowrap py-2  lg:px-3 ${textcolor}`}>{language === "ar" ? "استرخاء واستشفاء" : "Relaxation & Recovery"}</NavLink>
              </li>

              <li className='line'>
                <NavLink to="/Ourstory" onClick={() => setsideapear(false)} className={`flex  py-2  whitespace-nowrap  lg:px-3 ${textcolor}`}>{language === "ar" ? "من نحن" : "Our Story"}</NavLink>
              </li>

              <li className='line'>
                <NavLink to="/Contactus" onClick={() => setsideapear(false)} className={`flex  py-2 whitespace-nowrap  lg:px-3 ${textcolor}`}>{language === "ar" ? "تواصل معنا" : "Contact Us"}</NavLink>
              </li>


              <li className= {`lg:hidden flex justify-center  w-full  h-10 relative `} >

                <button className="overflow-hidden absolute hover:cursor-pointer w-full h-10 bg-yellow-300 shadow-yellow-300/70 shadow-lg px-6 py-2 text-[20px] text-white/90 font-bold font-oswald rounded-lg flex items-center justify-center">
  {language === "ar" ? (
    <>
         غيّر حياتك

<div className="w-[40px] pl-11 h-[40px] scale-x-[-1]">
  
<svg fill="#ffffff" width="800px" height="800px" viewBox="-12.29 -12.29 147.46 147.46" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style={{ width: "40px", height: "40px"  }}  stroke="#ffffff" strokeWidth="1.9660799999999998" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round"strokeLinejoin="round" stroke="#fcfcfc" stroke-width="3.4406400000000006"> <g> <path d="M60.21,89.08c0.7,0.3,1.03,1.11,0.73,1.82c-0.3,0.7-1.11,1.03-1.82,0.73c-4.63-1.98-7.74-6.1-9.8-11.7 c-4.91-3.04-9.55-4.56-13.93-4.61c-4.16-0.05-8.12,1.23-11.89,3.81c2.2,1.91,4.01,4.28,5.39,7.12c0.34,0.69,0.05,1.52-0.64,1.86 c-0.69,0.34-1.52,0.05-1.86-0.64c-2.04-4.2-5.12-7.2-9.14-9.11c-4.11-1.96-9.24-2.8-15.27-2.63c-0.76,0.02-1.4-0.58-1.42-1.35 c-0.02-0.77,0.58-1.4,1.35-1.42c6.48-0.18,12.02,0.74,16.53,2.89c0.96,0.46,1.87,0.97,2.74,1.53c4.47-3.26,9.22-4.88,14.23-4.83 c4.08,0.05,8.31,1.21,12.7,3.5c-0.21-0.8-0.4-1.61-0.58-2.45c-1.34-6.35-1.85-13.91-1.96-22.05c0.96-0.57,1.88-1.21,2.75-1.9 c0.05,8.69,0.52,16.75,1.93,23.39C51.93,80.98,54.94,86.82,60.21,89.08L60.21,89.08L60.21,89.08z M27.85,19.88 c1.55,0,2.96,0.63,3.97,1.65c1.02,1.02,1.65,2.42,1.65,3.97c0,1.55-0.63,2.96-1.65,3.97c-1.02,1.02-2.42,1.65-3.97,1.65 c-1.55,0-2.96-0.63-3.97-1.65c-1.02-1.02-1.65-2.42-1.65-3.97c0-1.55,0.63-2.96,1.65-3.97C24.89,20.51,26.3,19.88,27.85,19.88 L27.85,19.88z M27.85,9.21c4.5,0,8.57,1.82,11.52,4.77c2.95,2.95,4.77,7.02,4.77,11.52c0,4.5-1.82,8.57-4.77,11.52 c-2.95,2.95-7.02,4.77-11.52,4.77s-8.57-1.82-11.52-4.77c-2.95-2.95-4.77-7.02-4.77-11.52c0-4.5,1.82-8.57,4.77-11.52 S23.35,9.21,27.85,9.21L27.85,9.21z M37.53,15.82c-2.48-2.48-5.9-4.01-9.68-4.01c-3.78,0-7.2,1.53-9.68,4.01 c-2.48,2.48-4.01,5.9-4.01,9.68c0,3.78,1.53,7.2,4.01,9.68c2.48,2.48,5.9,4.01,9.68,4.01c3.78,0,7.2-1.53,9.68-4.01 c2.48-2.48,4.01-5.9,4.01-9.68C41.54,21.72,40.01,18.3,37.53,15.82L37.53,15.82z M27.85,0c14.08,0,25.5,11.42,25.5,25.5 c0,14.08-11.42,25.5-25.5,25.5S2.35,39.59,2.35,25.5c0-7.04,2.86-13.42,7.47-18.03C14.43,2.85,20.81,0,27.85,0L27.85,0z M49.16,25.5c0-11.77-9.54-21.31-21.31-21.31c-5.88,0-11.21,2.38-15.07,6.24c-3.86,3.86-6.24,9.18-6.24,15.07 c0,11.77,9.54,21.31,21.31,21.31S49.16,37.27,49.16,25.5L49.16,25.5z M29.85,23.5c-0.51-0.51-1.22-0.83-2-0.83s-1.49,0.32-2,0.83 c-0.51,0.51-0.83,1.22-0.83,2c0,0.78,0.32,1.49,0.83,2c0.51,0.51,1.22,0.83,2,0.83s1.49-0.32,2-0.83c0.51-0.51,0.83-1.22,0.83-2 C30.68,24.72,30.37,24.01,29.85,23.5L29.85,23.5z M57.19,29.9c6.92,5.86,12.21,13.55,16.14,22.76c4.89,11.46,7.69,25.25,8.94,40.75 c2.2,6.3,3.22,11.4,2.15,15.12c-1.16,4.03-4.5,6.35-10.99,6.72c-16.08,4.09-30.36,6.65-42.5,7.4c-12.28,0.76-22.41-0.33-30.06-3.54 c-0.71-0.29-1.04-1.11-0.75-1.81c0.29-0.71,1.11-1.04,1.81-0.75c7.26,3.04,16.97,4.07,28.84,3.33c11.97-0.74,26.11-3.28,42.09-7.35 l0,0c0.09-0.02,0.18-0.04,0.28-0.04c5.19-0.26,7.8-1.9,8.62-4.72c0.89-3.11-0.09-7.71-2.13-13.53c-0.06-0.14-0.1-0.29-0.11-0.44 c-1.22-15.28-3.95-28.85-8.74-40.05c-3.43-8.04-7.92-14.86-13.67-20.22c0.08-0.78,0.12-1.57,0.12-2.38 C57.22,30.73,57.21,30.31,57.19,29.9L57.19,29.9z"/> </g> </g>

<g id="SVGRepo_iconCarrier"> <g> <path d="M60.21,89.08c0.7,0.3,1.03,1.11,0.73,1.82c-0.3,0.7-1.11,1.03-1.82,0.73c-4.63-1.98-7.74-6.1-9.8-11.7 c-4.91-3.04-9.55-4.56-13.93-4.61c-4.16-0.05-8.12,1.23-11.89,3.81c2.2,1.91,4.01,4.28,5.39,7.12c0.34,0.69,0.05,1.52-0.64,1.86 c-0.69,0.34-1.52,0.05-1.86-0.64c-2.04-4.2-5.12-7.2-9.14-9.11c-4.11-1.96-9.24-2.8-15.27-2.63c-0.76,0.02-1.4-0.58-1.42-1.35 c-0.02-0.77,0.58-1.4,1.35-1.42c6.48-0.18,12.02,0.74,16.53,2.89c0.96,0.46,1.87,0.97,2.74,1.53c4.47-3.26,9.22-4.88,14.23-4.83 c4.08,0.05,8.31,1.21,12.7,3.5c-0.21-0.8-0.4-1.61-0.58-2.45c-1.34-6.35-1.85-13.91-1.96-22.05c0.96-0.57,1.88-1.21,2.75-1.9 c0.05,8.69,0.52,16.75,1.93,23.39C51.93,80.98,54.94,86.82,60.21,89.08L60.21,89.08L60.21,89.08z M27.85,19.88 c1.55,0,2.96,0.63,3.97,1.65c1.02,1.02,1.65,2.42,1.65,3.97c0,1.55-0.63,2.96-1.65,3.97c-1.02,1.02-2.42,1.65-3.97,1.65 c-1.55,0-2.96-0.63-3.97-1.65c-1.02-1.02-1.65-2.42-1.65-3.97c0-1.55,0.63-2.96,1.65-3.97C24.89,20.51,26.3,19.88,27.85,19.88 L27.85,19.88z M27.85,9.21c4.5,0,8.57,1.82,11.52,4.77c2.95,2.95,4.77,7.02,4.77,11.52c0,4.5-1.82,8.57-4.77,11.52 c-2.95,2.95-7.02,4.77-11.52,4.77s-8.57-1.82-11.52-4.77c-2.95-2.95-4.77-7.02-4.77-11.52c0-4.5,1.82-8.57,4.77-11.52 S23.35,9.21,27.85,9.21L27.85,9.21z M37.53,15.82c-2.48-2.48-5.9-4.01-9.68-4.01c-3.78,0-7.2,1.53-9.68,4.01 c-2.48,2.48-4.01,5.9-4.01,9.68c0,3.78,1.53,7.2,4.01,9.68c2.48,2.48,5.9,4.01,9.68,4.01c3.78,0,7.2-1.53,9.68-4.01 c2.48-2.48,4.01-5.9,4.01-9.68C41.54,21.72,40.01,18.3,37.53,15.82L37.53,15.82z M27.85,0c14.08,0,25.5,11.42,25.5,25.5 c0,14.08-11.42,25.5-25.5,25.5S2.35,39.59,2.35,25.5c0-7.04,2.86-13.42,7.47-18.03C14.43,2.85,20.81,0,27.85,0L27.85,0z M49.16,25.5c0-11.77-9.54-21.31-21.31-21.31c-5.88,0-11.21,2.38-15.07,6.24c-3.86,3.86-6.24,9.18-6.24,15.07 c0,11.77,9.54,21.31,21.31,21.31S49.16,37.27,49.16,25.5L49.16,25.5z M29.85,23.5c-0.51-0.51-1.22-0.83-2-0.83s-1.49,0.32-2,0.83 c-0.51,0.51-0.83,1.22-0.83,2c0,0.78,0.32,1.49,0.83,2c0.51,0.51,1.22,0.83,2,0.83s1.49-0.32,2-0.83c0.51-0.51,0.83-1.22,0.83-2 C30.68,24.72,30.37,24.01,29.85,23.5L29.85,23.5z M57.19,29.9c6.92,5.86,12.21,13.55,16.14,22.76c4.89,11.46,7.69,25.25,8.94,40.75 c2.2,6.3,3.22,11.4,2.15,15.12c-1.16,4.03-4.5,6.35-10.99,6.72c-16.08,4.09-30.36,6.65-42.5,7.4c-12.28,0.76-22.41-0.33-30.06-3.54 c-0.71-0.29-1.04-1.11-0.75-1.81c0.29-0.71,1.11-1.04,1.81-0.75c7.26,3.04,16.97,4.07,28.84,3.33c11.97-0.74,26.11-3.28,42.09-7.35 l0,0c0.09-0.02,0.18-0.04,0.28-0.04c5.19-0.26,7.8-1.9,8.62-4.72c0.89-3.11-0.09-7.71-2.13-13.53c-0.06-0.14-0.1-0.29-0.11-0.44 c-1.22-15.28-3.95-28.85-8.74-40.05c-3.43-8.04-7.92-14.86-13.67-20.22c0.08-0.78,0.12-1.57,0.12-2.38 C57.22,30.73,57.21,30.31,57.19,29.9L57.19,29.9z"/> </g> </g>

</svg>
</div>
    </>
  ) : (
    <>
      change your Life
      <div className="h-13 pl-2">
        <img src={haramsvg} alt="" className="w-[40px]  h-[40px] " />
      </div>
    </>
  )}
</button>


              </li>
              {/* social */}
              <li className="lg:hidden mt-11  flex justify-between items-center  w-[95%] px-2 ">
                <a href="https://www.instagram.com/glow__gym/?igsh=MTFqZ2xsMTlsb2ozZw%3D%3D#"><img src="./insta.png" alt="" className="w-8 h-8 hover:cursor-pointer" /></a>
                <a href="https://www.facebook.com/share/1CZkKpMjkR/"><img src="./face2.png" alt="" className="w-8 h-8 hover:cursor-pointer" /></a>
                <a href={`https://wa.me/201114668713?text=${transmessage}`} className="w-9 h-9 hover:cursor-pointer flex items-center justify-center bg-green-400 rounded-full shadow-md p-4 "><FontAwesomeIcon icon={faWhatsapp} size="xl" color="white" /></a>
              </li>

            </ul>

          </div>

          {/* 3-dark mode and lang and button */}
          <div className="flex-1 flex items-center justify-end space-x-1   ">

            {/* {langue} */}
            <div className="flex relative  items-center ">
              <button
                onClick={toggleLanguage}
                className="inline-flex items-center font-medium justify-center text-sm rounded-lg cursor-pointer"
              >
                {language === "en" ? (
                  <>
                    {/* 🇺🇸 US Flag */}
                    <svg aria-hidden="true" className="h-[30px] w-[30px] rounded-full me-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fillRule="evenodd"><g strokeWidth="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
                    <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /></g>
                    <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                    <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)" /></g></svg>


                  </>
                ) : (
                  <>
                    {/* 🇸🇦 Saudi Arabia Flag */}
                    <img
                      src="https://flagcdn.com/sa.svg"
                      alt="Arabic"
                      className="w-[30px] h-[30px] rounded-full me-2"
                    />

                  </>
                )}
              </button>

              

            </div>




            <DarkModeIcon
              darkMode={darkMode}
              toggleDarkMode={() => setDarkMode(!darkMode)}
            />


            <button onClick={() => setsideapear(!sideapear)} data-collapse-toggle="mega-menu-full" type="button" className="  inline-flex items-end p-2 w-11 h-10 justify-end  text-sm text-gray-600 rounded-lg lg:hidden  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-8 h-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>

          </div>
        </div>




      </nav>



    </>
  )
}







