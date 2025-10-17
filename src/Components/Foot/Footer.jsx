import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import ContactForm from './FooterF'
import { useContext } from 'react'
import { LanguageContext } from '../Context/Context'

export default function () {

  const { language, toggleLanguage } = useContext(LanguageContext);


  
  return (
    <>
      {/* {form} */}
    <ContactForm/>

      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 flex flex-col items-center justify-center lg:block  w-full lg:w-auto md:mb-0">
              <NavLink to="/home" className="flex  items-center">
                <p className='font-oswald tracking-wide  text-4xl lg:text-3xl whitespace-nowrap  text-yellow-300'><span className=" font-oswald  lg:text-5xl text-5xl tracking-wide text-yellow-300">G</span>low GYM</p>

              </NavLink>

<div className="mt-4 flex justify-center w-full overflow-hidden">
  <div className="w-full max-w-[400px] aspect-[4/3]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.2917313943585!2d31.172273075389047!3d29.999778574946074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584679a7104a5b%3A0xd6526fae45600fbb!2sGlow%20Gym!5e0!3m2!1sen!2seg!4v1759838454451!5m2!1sen!2seg"
      className="w-full h-full rounded-lg shadow-lg"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>


            </div>
            <div class="grid lg:grid-cols-6 grid-col-1 text-center  gap-8 sm:gap-6 ">
              <div className=' col-span-2'>
                <h2 class="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">Glow gym</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium space-y-5">

                  <li >
                    <Link link to="/home" aria-current="page">{language === "ar" ? "الرئيسية" : "Home"}</Link>
                  </li>
                  <li >
                    <Link to="/subscribtions"  >{language === "ar" ? "الخطط و الاسعار" : "Memberships"}</Link>
                  </li>
                  <li >
                    <Link to="/RandR" >{language === "ar" ? "استرخاء واستشفاء" : "Relaxation & Recovery"} </Link>
                  </li>

                  <li >
                    <Link to="/Ourstory"  >{language === "ar" ? "من نحن" : "Our Story"}</Link>
                  </li>

                  <li >
                    <Link to="/Contactus"  >{language === "ar" ? "تواصل معنا" : "Contact Us"} </Link>
                  </li>
                </ul>
              </div>
              <div className='w-full col-span-2'></div>
              <div className=' col-span-2 '>
                <h2 class="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white"> {language === "ar" ? "تواصل معنا" : "Contact Us"}</h2>
                <ul class="text-gray-500 space-y-5 text-[17px]  dark:text-gray-400 font-medium">
                  <li >
                    <a href="https://www.facebook.com/share/1BEZAfert8/" > {language === "ar" ? "فيسبوك" : "Facebook"}</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/glow__gym?igsh=MTFqZ2xsMTlsb2ozZw==" > {language === "ar" ? "انستجرام" : "Instagram"}</a>
                  </li>
                  <li>
                    <a href="https://wa.me/201102176551" >  {language === "ar" ? "واتساب" : "Whats app"}</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" class="hover:underline">Glow gym</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">



            </div>
          </div>
        </div>
      </footer>

    </>
  )
}


