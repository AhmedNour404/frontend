import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react'
import ContactForm from '../Btnf/Btnf';
import { useContext } from "react";
import { LanguageContext } from "../Context/Context";
export default function Subscribtions() {
  const { language } = useContext(LanguageContext);

  const [pay, setpay] = useState(false);

  const [policy, setpolicy] = useState(false);

  const togglepolicy = () => { setpolicy(!policy) }



  return (
    <>


      <div className=' w-full  flex justify-center items-start h-screen         '>
        <video
          src="/subs.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full  object-cover"
        />
        <div className='absolute bg-black/50 inset-0   '></div>
        <div className=' z-10 absolute flex items-center  lg:w-1/2  rounded-2xl  flex-col justify-around  h-1/2 lg:translate-y-1/4 translate-y-1/3'>
          <p className='text-white  lg:text-8xl text-6xl font-oswald'> {language === "ar" ? (<><span className='text-yellow-300 lg:text-9xl text-7xl'> م</span>ن نحن</>) : (<><span className='text-yellow-300 lg:text-9xl text-7xl'> O</span>UR</>)}
          </p>
          <p className='text-white text-4xl font-oswald ' >  {language === "ar" ? (<><span className='lg:text-5xl text-4xl'>باقات</span> الاشتراك </>) : (<><span className='lg:text-5xl text-4xl'>Membership</span> Plans</>)}
          </p>
          <button
            onClick={() => {
              document.querySelector("#plans").scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[20px] shadow-amber-300 shadow-lg/50 ring-yellow-300 ring-2 py-2 rounded-lg px-4 text-white"
          >
          {language === "ar" ? "  اختار باقتك دلوقتي " : " Check Plans now!"}  
          </button>
        </div>

      </div>


      <div className="w-full p-12 relative  " id="plans">


        <p className="dark:text-white text-gray-700  font-oswald text-center  text-6xl"> {language === "ar" ? "الباقات" : (<>Plans</>)}</p>
        <div className=" lg:flex-row lg:space-x-5 lg:justify-between flex flex-col lg:items-start items-center pt-10 space-y-5 p-4 ">

          <div className="w-full relative max-w-sm p-4 border overflow-hidden rounded-lg shadow-sm sm:p-8 
                      bg-[url('/bundlecard3.jpg')] bg-cover bg-center">

            {/* form inputs */}

            <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            <h5 className="mb-4 text-xl text-white lg:text-4xl font-oswald  relative font-medium">{language === "ar" ? " الباقة البرونزية " : " Bronze plan"}</h5>
            <div className="flex relative items-baseline">

              <span className="ms-1 text-xl text-white  font-normal">{language === "ar" ? " شهور 1/" : "/1month"}</span>
            </div>
            <ul role="list" className="space-y-5 my-7 relative ">
              <li className="flex items-center">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4 text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM12.828 7.172a1 1 0 0 1 0 1.414L11.414 10l1.414 1.414a1 1 0 1 1-1.414 1.414L10 11.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L8.586 10 7.172 8.586a1 1 0 0 1 1.414-1.414L10 8.586l1.414-1.414a1 1 0 0 1 1.414 0Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4 text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM12.828 7.172a1 1 0 0 1 0 1.414L11.414 10l1.414 1.414a1 1 0 1 1-1.414 1.414L10 11.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L8.586 10 7.172 8.586a1 1 0 0 1 1.414-1.414L10 8.586l1.414-1.414a1 1 0 0 1 1.414 0Z" />
                </svg>

                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4  text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>

            </ul>




          </div>

          <div className="w-full relative max-w-sm p-4 border overflow-hidden rounded-lg shadow-sm sm:p-8 
                      bg-[url('/bundlecard3.jpg')] bg-cover bg-center">

            {/* form inputs */}
            <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            <h5 className="mb-4 text-xl text-white lg:text-4xl font-oswald  relative font-medium">{language === "ar" ? " الباقة الفضية " : " Silver plan"}</h5>
            <div className="flex relative items-baseline">

              <span className="ms-1 text-xl text-white  font-normal"> {language === "ar" ? " شهور 3/" : "/3month"}</span>
            </div>
            <ul role="list" className="space-y-5 my-7 relative ">
              <li className="flex items-center">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4 text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM12.828 7.172a1 1 0 0 1 0 1.414L11.414 10l1.414 1.414a1 1 0 1 1-1.414 1.414L10 11.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L8.586 10 7.172 8.586a1 1 0 0 1 1.414-1.414L10 8.586l1.414-1.414a1 1 0 0 1 1.414 0Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4 text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM12.828 7.172a1 1 0 0 1 0 1.414L11.414 10l1.414 1.414a1 1 0 1 1-1.414 1.414L10 11.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L8.586 10 7.172 8.586a1 1 0 0 1 1.414-1.414L10 8.586l1.414-1.414a1 1 0 0 1 1.414 0Z" />
                </svg>

                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4  text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>

            </ul>




          </div>


          <div className="w-full relative max-w-sm p-4 border overflow-hidden rounded-lg shadow-sm sm:p-8 
                      bg-[url('/bundlecard3.jpg')] bg-cover bg-center ">

            <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            <div
              className={`absolute top-5 w-[180px] md:w-[220px] lg:w-[220px] h-10 flex justify-center items-center
  bg-amber-300/70 text-white font-bold
  ${language === "ar"
                  ? "left-[-50px] md:left-[-60px] lg:left-[-70px] -rotate-45"
                  : "right-[-50px] md:right-[-60px] lg:right-[-70px] rotate-45"
                }`}
            >
              {language === "ar" ? "الأكثر مبيعًا" : "Top selling"}
            </div>

            <h5 className="mb-4 text-xl text-white lg:text-4xl relative font-medium">{language === "ar" ? " الباقة البريميوم " : " Premuim plan"}</h5>
            <div className="flex relative items-baseline">

              <span className="ms-1 text-xl text-white  font-normal"> {language === "ar" ? " شهور 6/" : "/6month"}</span>
            </div>
            <ul role="list" className="space-y-5 my-7 relative ">
              <li className="flex items-center">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4 text-red-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4  text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4 text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM12.828 7.172a1 1 0 0 1 0 1.414L11.414 10l1.414 1.414a1 1 0 1 1-1.414 1.414L10 11.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L8.586 10 7.172 8.586a1 1 0 0 1 1.414-1.414L10 8.586l1.414-1.414a1 1 0 0 1 1.414 0Z" />
                </svg>

                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4  text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>

            </ul>

          </div>

          <div className="w-full relative max-w-sm p-4 border  rounded-lg shadow-sm sm:p-8 
                      bg-[url('/bundlecard3.jpg')] bg-cover bg-center ">

            <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            <h5 className="mb-4 text-xl text-white lg:text-4xl font-oswald relative font-medium">{language === "ar" ? " الباقة الذهبية" : " Gold plan"}</h5>
            <div className="flex relative items-baseline">

              <span className="ms-1 text-xl text-white  font-normal"> {language === "ar" ? " شهور 12/" : "/12months"}</span>
            </div>
            <ul role="list" className="space-y-5 my-7 relative ">
              <li className="flex items-center">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4 text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4  text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4 text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM12.828 7.172a1 1 0 0 1 0 1.414L11.414 10l1.414 1.414a1 1 0 1 1-1.414 1.414L10 11.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L8.586 10 7.172 8.586a1 1 0 0 1 1.414-1.414L10 8.586l1.414-1.414a1 1 0 0 1 1.414 0Z" />
                </svg>

                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4  text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}
              </li>

            </ul>

          </div>


        </div>
        <AnimatePresence>
          {pay && (
            <motion.div
              key="contact"
              className="absolute  w-full top-3/5 lg:top-1/5 p-5 lg:flex justify-center lg:h-2/3 h-[27%] end-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="relative  lg:w-1/3 w-full h-full">
                <ContactForm pay={pay} setpay={setpay} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex  justify-center text-center">
          <button onClick={() => setpay(!pay)} className="dark:text-white shadow-lg shadow-gray-800/80 text-gray-200 relative text-[20px] bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center lg:w-1/3 w-full text-center">
            {language === "ar" ? " اختار الباقة " : " Choose your plan"}
          </button>
        </div>
      </div>

      <div className=' flex flex-col items-center'>

        <button className='text-[20px] dark:shadow-amber-300 dark:shadow-lg/50 shadow-lg shadow-gray-800 ring-gray-700 dark:ring-yellow-300 ring-2  py-2 dark:text-white text-gray-700 rounded-lg px-7 ' onClick={togglepolicy}>  {language === "ar" ? " سياسة الاسترجاع " : " Refund policy"}</button>


        <div className="p-5">


          <AnimatePresence>
            {policy && (
              <motion.div
                key="collapse-box"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="bg-gray-700 font-oswald text-center text-white rounded-2xl p-5 mt-4">
                  {language === "ar" ? " يمكن استرجاع المبلغ كامل بعد الدفع خلال ٢٤ ساعة فقط من تاريخ و ميعاد الدفع." : " You are elgible for refund, only within 24 hours from the payment date.Choose your plan."}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>




      {pay && (
        <div
          className="fixed inset-0  backdrop-blur-sm z-[20] "
          onClick={() => setpay(false)}
        />
      )}

    </>
  )
}




