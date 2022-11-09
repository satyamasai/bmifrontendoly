import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Logout from './Logout'

const GetProfile = () => {

const [ profile , setProfile] =useState([])

const getprofile=()=>{



    fetch("http://localhost:5501/getprofile",{
        method:"GET",
        headers:{
            'Content-Type':'application/json',
            "Authorization":`Bearer ${localStorage.getItem("BMI_token")}`
        }
        
    }).then((res)=>res.json())
    .then(res=>{
        setProfile(res)
        // console.log(res)
    
    })
}

useEffect(()=>{getprofile()},[])

console.log(profile.name)
    return (
    <div style={{
border:"1px solid red",
color:"blue"
    }}>
    <h2>
    name: {profile.name}
    </h2>
    <h2>
    email: {profile.email}
    </h2>

    <Logout/>
    </div>
  )
}

export default GetProfile