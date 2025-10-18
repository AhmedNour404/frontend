
import "./Home.css";

import Caro3 from "../Caro3/Caro3";
import WhatsAppButton from '../WAPP/WAPP'
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "../Btnf/Btnf";
import { useContext } from "react";
import { LanguageContext } from "../Context/Context";
export default function Home() {

  const { language } = useContext(LanguageContext);


  const [pay, setpay] = useState(false)


  return (
    <>

      <div className=' w-full  flex justify-center items-start h-screen         '>
        <video
          src="/N.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full  object-cover"
        />
        <div className='absolute bg-black/50 inset-0   '></div>

        <div className="z-10 absolute flex flex-col items-center justify-around h-1/2 lg:w-1/2 w-full px-4 lg:translate-y-1/4 translate-y-1/3">
          <div className="relative flex flex-col justify-around items-center w-full h-full rounded-2xl ">

            {/* === Smaller Square Outline === */}
            <div className="relative flex justify-center items-center w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 border-4 border-yellow-300 rounded-md">

              {/* === Centered Text Passing Through === */}
              <p className="absolute text-white text-center font-oswald   md:text-6xl text-5xl/normal  px-2">

                {language === "ar" ? (<>ابدأ <span className="text-yellow-300">دلوقتي</span></>) : (<> <span className="text-5xl">Empower your</span>{" "}<span className="text-yellow-300 text-6xl lg:text-7xl">Glow</span></>)}

              </p>
            </div>

            {/* === Sub Text === */}
            <p className="text-white text-2xl sm:text-2xl mt-6 mb-5 text-center">

              {language === "ar" ? "اول خطوة لى احسن نسخة من نفسك." : "Take a step and Change your life."}
            </p>

            {/* === Button === */}
            <button
              onClick={() => {
                document.querySelector("#plans").scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[20px] shadow-amber-300 shadow-lg/50 ring-yellow-300 ring-2 py-2 rounded-lg px-4 text-white"
            >
              {language === "ar" ? "باقات الاشتراك" : "Check Plans now!"}
            </button>
          </div>
        </div>



      </div>
      {/* Ourstory */}
      <div className="py-8 mb-10 lg:py-0  w-full ">
        <div className="  w-full  lg:min-h-auto">
          <div className=" flex items-center justify-center h-1/5 ">
            <p className=" font-semibold  dark:text-white text-gray-700  text-4xl lg:text-3xl">
              {language === "ar" ? ("قصة نجاحنا") : (<><span className="font-oswald dark:text-white text-gray-700  lg:text-5xl text-5xl">O</span>ur story</>)}
            </p>
          </div>
          <div className=" lg:flex  flex-row py-12 text-white  flex-1">
            <div className="flex flex-col  justify-center items-center gap-6 pb-10 lg:pb-0 w-full lg:w-1/2">
              <p className="md:px-12 px-8 dark:text-white text-gray-700 ">
                {language === "ar" ? "اتأسس **جيم جلو** سنة ٢٠٢٠، وقدر بسرعة يبقى واحد من أكبر الجيمات في الجيزة. عنده أكتر من تسعة مدربين محترفين، وكل الأجهزة الحديثة متوفرة فيه، علشان يقدّم للأعضاء تجربة تمرين كاملة واحترافية بتساعدهم يبنوا قوتهم وثقتهم بنفسهم في جو محفّز وخدمة عالية الجودة." : "Founded in 2020, Glow Gym quickly became one of the largest fitness centers in Giza. With more than nine expert coaches and every modern machine available, it provides members with a complete and professional training experience designed to build both strength and confidence through a motivating environment and high-quality service."}
              </p>
              <p className="md:px-12 text-gray-700 dark:text-white px-8 ">
                {language === "ar" ? "بعيد عن التمارين، جيم جلو مميز بالسبا اللي جواه، اللي بيقدّم جلسات استرخاء وتعافي كاملة، وكمان فيه ميني بار شيك بيقدّم مشروبات قبل التمرين، وعصاير صحية ومنعشة. مابين الأداء، والراحة، والعناية، جيم جلو بيساعد كل عضو يطلّع أفضل ما عنده ويعيش المعنى الحقيقي لكلمة Glow." : "Beyond workouts, Glow Gym shines with its in-house spa that offers full relaxation and recovery treatments, and a stylish mini bar serving pre-workout shots, healthy beverages, and refreshing drinks. Blending performance, wellness, and comfort, Glow Gym empowers every member to unleash their full potential and truly glow."}
              </p>
              <Link to="/Ourstory" className="text-[20px] dark:shadow-amber-300 shadow-lg/50 dark:shadow-lg shadow-gray-800 ring-gray-700 dark:ring-yellow-300 ring-2  py-2 dark:text-white text-gray-700 rounded-lg px-7 " ><p className="dark:text-white text-gray-700">{language === "ar" ? "اعرف اكتر عننا" : "learn more"}</p></Link>

            </div>
            <Caro3 className="rounded-lg lg:h-auto " />
          </div>
        </div>
      </div>
      {/* relaxtion&recovery */}
      <div className=" flex items-center justify-center  ">
        <p className="  font-semibold  text-gray-700 dark:text-white text-4xl lg:text-3xl">
          {language === "ar" ? ("الراحة و الاستشفاء") : (<> <span className="font-oswald  text-gray-700 dark:text-white lg:text-5xl text-5xl">R</span>elaxtion&Recovery </>)}
        </p>
      </div>
      {/* relaxtion&recovery */}
      <div className='flex w-full flex-col lg:flex-row  relative h-lvh justify-center lg:justify-start items-center mt-20 '>

        <div className="bg-gradient-to-r opacity-15 absolute lg:start-0 from-yellow-400 to-yellow-500 inset-0 lg:w-1/2 h-full object-cover z-10"></div>

        <div className="absolute  flex flex-col justify-between  lg:justify-around items-center w-full  lg:w-1/2 h-full text-white z-12">
          <div className={`flex  lg:absolute lg:start-0 lg:flex-col lg:w-full  lg:top-0   translate-x-0 justify-center items-center ${language === "ar" ? "lg:-translate-x-1/2" : "lg:translate-x-1/2"} `}>

            <img
              src="/gg.PNG"
              alt="Recovery Logo"
              className="w-64 h-64 object-contain"
            /> </div>
          <div>
            <p className=" text-[28px] pb-5 lg:pb-0 font-semibold">{language === "ar" ? "ارتاح. رجّع طاقتك. وابدأ من تاني." : "Recover. Recharge. Repeat"} </p>
          </div>
          <div className=" px-5 flex justify-center ">
            <p className="text-center text-[20px] ">{language === "ar" ? (<>"من استرخاء الساونا لعلاج الحجامة، ولحد الجاكوزي اللي يديك راحة، وقَصّات الشعر العصرية والعناية بالأظافر — رحلتك الكاملة للاستشفاء بتبدأ من هنا ."</>) : (<>"From sauna relaxation to hijama therapy, jacuzzi bliss, stylish haircuts, and nail care your complete recovery journey starts here."</>)} </p>
          </div>
          <div className=" px-5 text-center pt-10 lg:pt-0 ">

            <WhatsAppButton
              className="shadow-lg/50 shadow-gray-700 ring-gray-700 ring-2 rounded-md p-3 hover:cursor-pointer"
              phone="201066072048"
              message="ايه هي اسعار الجلسات"
              label={language === "ar" ? "احجز جلستك دلوقتي" : "Book your session Now"}
            />
          </div>
          <div className=" lg:hidden w-full"><Caro3 className="pt-10 lg:pt-0 " /></div>
        </div>

        <video id='ez'
          src="./V.mp4" autoPlay loop muted playsInline
          className=" w-full lg:w-1/2  h-full object-cover"
        />
        <div className=" hidden lg:flex flex-1 h-full rounded-none ">
          <Caro3
            className="lg:h-full  rounded-none"
          /></div>
      </div>

      {/* subscribtions bundles */}
      <div className="w-full p-12 relative  " id="plans">


        <p className="dark:text-white text-gray-700 font-semibold font-oswald text-center pt-10 lg:pt-0 text-4xl">
          {language === "ar" ? "الباقات" : (<><span className="text-5xl">O</span>ur plans</>)}
        </p>
        <div className=" lg:flex-row lg:space-x-5 lg:justify-between flex flex-col lg:items-start items-center pt-10 space-y-5 p-4 ">

          <div className="w-full relative max-w-sm p-4 border overflow-hidden rounded-lg shadow-sm sm:p-8 
                bg-[url('/bundlecard3.jpg')] bg-cover bg-center">

            {/* form inputs */}
            <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            <h5 className="mb-4 text-xl text-white lg:text-4xl font-oswald  relative font-medium">{language === "ar" ? " الباقة الفضية " : " Silver plan"}
            </h5>
            <div className="flex relative items-baseline">

              <span className="ms-1 text-xl text-white  font-normal"> {language === "ar" ? " شهور 3/" : " /3month"}</span>
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
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>
              <li className="flex">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4 text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM12.828 7.172a1 1 0 0 1 0 1.414L11.414 10l1.414 1.414a1 1 0 1 1-1.414 1.414L10 11.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L8.586 10 7.172 8.586a1 1 0 0 1 1.414-1.414L10 8.586l1.414-1.414a1 1 0 0 1 1.414 0Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4 text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM12.828 7.172a1 1 0 0 1 0 1.414L11.414 10l1.414 1.414a1 1 0 1 1-1.414 1.414L10 11.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L8.586 10 7.172 8.586a1 1 0 0 1 1.414-1.414L10 8.586l1.414-1.414a1 1 0 0 1 1.414 0Z" />
                </svg>

                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4  text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>

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
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>
              <li className="flex">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>
              <li className="flex">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4 text-red-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4  text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4 text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM12.828 7.172a1 1 0 0 1 0 1.414L11.414 10l1.414 1.414a1 1 0 1 1-1.414 1.414L10 11.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L8.586 10 7.172 8.586a1 1 0 0 1 1.414-1.414L10 8.586l1.414-1.414a1 1 0 0 1 1.414 0Z" />
                </svg>

                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4  text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>

            </ul>

          </div>

          <div className="w-full relative max-w-sm p-4 border  rounded-lg shadow-sm sm:p-8 
                bg-[url('/bundlecard3.jpg')] bg-cover bg-center ">

            <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            <h5 className="mb-4 text-xl text-white lg:text-4xl font-oswald relative font-medium"> {language === "ar" ? " الباقة الذهبية" : " Gold plan"}</h5>
            <div className="flex relative items-baseline">

              <span className="ms-1 text-xl text-white  font-normal"> {language === "ar" ? " شهور 12/" : "/12months"}</span>
            </div>
            <ul role="list" className="space-y-5 my-7 relative ">
              <li className="flex items-center">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>
              <li className="flex">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>
              <li className="flex">
                <svg className="shrink-0 w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4 text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4  text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4 text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM12.828 7.172a1 1 0 0 1 0 1.414L11.414 10l1.414 1.414a1 1 0 1 1-1.414 1.414L10 11.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L8.586 10 7.172 8.586a1 1 0 0 1 1.414-1.414L10 8.586l1.414-1.414a1 1 0 0 1 1.414 0Z" />
                </svg>

                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>
              <li className="flex ">
                <svg className="shrink-0 w-4 h-4  text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {language === "ar" ? (<> <span className="text-base font-normal leading-tight text-white ms-3">الباقة الذهبية</span></>) : (<><span className="text-base font-normal leading-tight text-white ms-3">3 Personal training sessions</span></>)}              </li>

            </ul>

          </div>


        </div>
        <AnimatePresence>
          {pay && (
            <motion.div
              key="contact"
              className="absolute  w-full top-3/5 lg:top-1/5 p-5 lg:flex justify-center lg:h-2/3 h-1/3 end-0"
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

      {pay && (
        <div
          className="fixed inset-0  backdrop-blur-sm z-[20] "
          onClick={() => setpay(false)}
        />
      )}

    </>
  )
}







