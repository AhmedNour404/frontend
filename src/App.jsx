

import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Subscribtions from './Components/Subscribtions/Subscribtions'
import Ourstory from './Components/Ourstory/Ourstory'
import RandR from './Components/RandR/RandR'
import Contactus from './Components/Contactus/Contactus'
import ErrorPage from './Components/Error/Error'
export default function App() {
let routes =  createBrowserRouter([{


    path: "", element: <Layout />, 
    errorElement:<ErrorPage/>,  children: [
        {index:true , element: <Home/>},
      { path: 'home', element: <Home /> },
      { path: "subscribtions", element: <Subscribtions /> },
     {path:"ourstory",element:<Ourstory/>} ,
     {path:"RandR",element:<RandR/>},
     {path:"Contactus",element:<Contactus/>},
    ]
  }])

  return (

    <>
      <RouterProvider router={routes}></RouterProvider>

    </>
  )
}


