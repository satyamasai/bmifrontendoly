import { Button } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import Logout from './Logout';

const CheckBMI = () => {
const [weight , setWeight] =useState("")
const [height , setHeight] = useState("")
const [bmi,setBmi] = useState("");

    const handleSubmit = (e)=>{
         e.preventDefault();
const payload={
    weight,
    height
}
fetch("http://localhost:5501/calculateBMI",{
    method:"POST",
    headers:{
        'Content-Type':'application/json',
        "Authorization":`Bearer ${localStorage.getItem("BMI_token")}`
    },
    body:JSON.stringify(payload)
}).then((res)=>res.json())
.then((res)=>{
     setBmi(res.BMI)    
     console.log(res)
})

    }


  return (
    <div>
    <div className='navbar'>
    <a href="/">
    
    <Button colorScheme='blue'>Home</Button>
    </a>
    <a href="/history">
    <Button>Your History</Button>
    </a>
    <Logout/>
    
    </div>
            <form onSubmit={handleSubmit}>
              
            <br />
            <input type="text" placeholder='weight in kg' 
            onChange={(e)=>setWeight(e.target.value)}/>
            <br />
            <input type="text" placeholder='height in feet'
            onChange={(e)=>setHeight(e.target.value)} />
            <br />
            <input type="submit"  value="calculate"/>
            
            </form>

            <h2>{bmi?`This is your BMI : ${bmi}`:""}</h2>
    
    
    </div>
  )
}

export default CheckBMI