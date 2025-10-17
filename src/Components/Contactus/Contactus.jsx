import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../Context/Context'

export default function Contactus() {

  const { language } = useContext(LanguageContext)

  return (
    <>

      <div className=' w-full  flex justify-center items-start h-screen'>

        <div className='absolute bg-black/50 inset-0   '></div>
        <div className=' z-10 absolute flex items-center  lg:w-1/2  rounded-2xl  flex-col justify-around  h-1/2 lg:translate-y-1/4 translate-y-1/3'>
          <p className='text-white  lg:text-8xl text-6xl font-oswald'>
            {language === "ar" ? (<><span className='text-yellow-300 lg:text-9xl text-7xl'> أ</span>نت تسأل</>) : (<><span className='text-yellow-300 lg:text-9xl text-7xl'> Y</span>ou ask</>)}
          </p>
          <p className='text-white  lg:text-8xl text-6xl font-oswald'>
            {language === "ar" ? (<><span className='text-yellow-300 lg:text-9xl text-7xl'> إ</span>حنا نساعدك</>) : (<><span className='text-yellow-300 lg:text-9xl text-7xl'> W</span>e answer</>)}
          </p>
          <p className='text-white text-2xl text-center'>
            {language === "ar" ? "املا الفورم تحت و هنرجعلك في اسرع وقت " : "Fill the form bellow and we will get back to you as fast as possible"}
          </p>
        </div>

      </div>



    </>
  )
}




