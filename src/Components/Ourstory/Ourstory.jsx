import React from 'react'
import Caro3 from '../Caro3/Caro3'
import WhatsAppButton from '../WAPP/WAPP'
import { useContext } from "react";
import { LanguageContext } from "../Context/Context";
export default function Ourstory() {
  const { language } = useContext(LanguageContext)

  return (
    <>
      {/* video div  */}
      <div className=' w-full  flex justify-center items-start h-screen         '>
        <video
          src="https://res.cloudinary.com/de7ft98kq/video/upload/v1760886632/our_wrbmoj.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full  object-cover"
        />
        <div className='absolute bg-black/50 inset-0   '></div>

        <div className=' z-10 absolute flex items-center  lg:w-1/2  rounded-2xl  flex-col justify-around  h-1/2 lg:translate-y-1/4 translate-y-1/3'>
          <p className='text-white  lg:text-8xl text-6xl font-oswald'>{language === "ar" ? (<><span className='text-yellow-300 lg:text-9xl text-7xl'> م</span>ن نحن</>) : (<><span className='text-yellow-300 lg:text-9xl text-7xl'> O</span>UR Story</>)}</p>
          <WhatsAppButton

            phone="201114668713"
            message="ايه هي أنظمة الجلسات"
            label={language === "ar" ? "انضم إلينا الآن!" : "Join us Now"}
            className=' text-[20px] shadow-amber-300 shadow-lg/50  ring-yellow-300 ring-2  py-2 text-white rounded-lg px-7'

          />
        </div>

      </div>

      {/* who we are  */}




      <div className='w-full h-lvh pt-10 p-5 '>
        <div className='w-full font-oswald text-base/7 dark:text-white text-gray-700  grid grid-rows-6 h-full'>
          <div className=' text-5xl'><p>{language === "ar" ? "قصة نجاحنا" : "Who we are"} </p></div>
          <div className='  row-span-2'>
            <p>
              {language === "ar" ? "ابتدت Glow Gym سنة 2020 كفكرة صغيرة هدفها تغيّر مفهوم الفتنس في الجيزة، وبالإصرار والجودة والشغف بقت واحدة من أكبر الجيمات هناك، معروفة بمساحتها الضخمة وجوها الاحترافي، وبفريق أكتر من 9 مدربين محترفين بقت بيت لكل الرياضيين واللي عايزين يطوروا نفسهم، ومع الوقت كبرت وبقت مجهزة بأحدث الأجهزة ومعاها سبا فاخر وميني بار بيقدم شوتات قبل التمرين ومشروبات صحية، والنهارده Glow Gym بقت رمز للنجاح والقوة والتغيير في عالم الفتنس في مصر." : "Started in 2020, Glow Gym began as a small vision — to redefine fitness in Giza. Through dedication, quality, and passion, it grew into one of Giza’s biggest gyms, admired for its huge space and elite training atmosphere. With a team of over 9 experienced coaches, Glow Gym became a home for serious athletes and everyday fitness seekers alike. Step by step, it expanded with state-of-the-art machines, a luxurious spa, and a mini bar serving energizing pre-workout shots and healthy drinks. Today, Glow Gym stands as a symbol of success, strength, and transformation in Egypt’s fitness world."}
            </p>
          </div>
          <div className=' rounded-lg   row-span-3'>
            <Caro3 className='rounded-2xl' />
          </div>
        </div>

      </div>
      <div className='w-full h-lvh dark:text-white text-gray-700 text-3xl gap-0 px-3 mb-20'>
        <div className='h-full  mt-20 gap-0 overflow-hidden grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-3  w-full '>



          <div className="w-full lg:flex flex-col items-center justify-around h-2/3  row-span-2 ">
            <p className='lg:text-4xl font-semibold text-5xl pb-5 lg:pb-0'>
              {language === "ar" ? (<> <span className='text-5xl'>إ</span>حنا ليه</>) : (<><span className='text-5xl'>W</span>hy We are</>)}
            </p>
            <p className='lg:text-6xl text-7xl pt-5 lg:pt-0 text-yellow-300 text-shadow-md/60 text-shadow-yellow-300'>
              {language === "ar" ? "مميزين" : "Special"}
            </p>

          </div>


          <div className='inset-ring-2 flex-col flex items-center justify-around dark:inset-ring-yellow-300 rounded-lg row-span-1'>


            <p>  {language === "ar" ? "واحد من أكبر الجيمات في " : "One of the biggest Gyms in"} </p>
            <p className='text-5xl text-yellow-300'>{language === "ar" ? "الجيزة " : "Giza"}</p>

          </div>


          <div className='inset-ring-2 flex-col flex items-center justify-around dark:inset-ring-yellow-300 rounded-lg row-span-1'>

            <p>  {language === "ar" ? "اكتر من " : "With more than"} </p>
            <p className='text-[43px] text-yellow-300'>{language === "ar" ? "50K متابع " : "50K Followers"}</p>


          </div>



          <div className='inset-ring-2 flex-col flex items-center justify-around dark:inset-ring-yellow-300 rounded-lg row-span-1'>

            <p> {language === "ar" ? "مجهز بي جميع انواع" : "Ready with all types of"} </p>
            <p className='text-[45px] text-yellow-300'>{language === "ar" ? "جلسات السبا" : "Spa sessions"}</p>

          </div>



          <div className='inset-ring-2 flex-col flex items-center justify-around dark:inset-ring-yellow-300 rounded-lg row-span-1'>

            <p> {language === "ar" ? "  جميع أنواع الآلات الي" : "all kinds of machins you"} </p>
            <p className='text-[45px] text-yellow-300'>{language === "ar" ? "تتمناها" : "Wish for"} </p>
            
          </div>


        </div>
      </div>

      <div className='w-full flex justify-center mb-10'> <WhatsAppButton

        phone="201114668713"
        message="ايه هي أنظمة الجلسات"
        label={language === "ar" ? "انضم إلينا الآن!" : "Join us Now"}
        className=' text-[20px] shadow-amber-300 shadow-lg/50  ring-yellow-300 ring-2  py-2 text-white rounded-lg px-7'

      /></div>

    </>
  )
}
