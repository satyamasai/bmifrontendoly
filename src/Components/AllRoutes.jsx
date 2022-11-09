import React from 'react'
 import {Routes,Route} from "react-router-dom"
import CheckBMI from './CheckBMI'
import GetHistory from './GetHistory'
import GetProfile from './GetProfile'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
const AllRoutes = () => {

  const auth= localStorage.getItem("BMI_token") || 0
  console.log("auth"+auth)
  return (
    <div>
    <Routes>
         <Route path="/"   element={<Home/>} />
         <Route path="/signup"   element={<Signup/>} />
         <Route path="/login"   element={<Login/>} />
         <Route path="/checkBMI"   element={<CheckBMI/>} />
         <Route path="/profile"   element={auth!==0?<GetProfile/>:"please login first"} />
         <Route path="/history"   element={auth!==0?<GetHistory/>:<Login/>} />
    </Routes>
    
    </div>
  )
}

export default AllRoutes