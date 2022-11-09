import React, { useEffect, useState } from 'react'
import "../App.css"
import GetProfile from './GetProfile'

const GetHistory =  () => {
    const [ history , setHistory] =useState([])

    const getHistory= async ()=>{
      return  fetch("http://localhost:5501/getCalculation",{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                "Authorization":`Bearer ${localStorage.getItem("BMI_token")}`
            }
        
        }).then((res)=>res.json())
        .then(res=>{
           
             setHistory(res.history)
         
          
        })

    }

    
    
    useEffect(() => {
        getHistory()
    }, [])
    console.log(history)

      return (<>

        <GetProfile/>
        <div className='historyDiv'  >
        {
            history?history.map((item)=>(
                <div style={{
                        border:"1px solid red"
                    }}>
                          <h1>Your Weight : {item.weight} kg</h1>
                          <h1>Your height : ({item.height*3.281}) feet</h1> 
                          <h1>Your BMI : {item.BMI} </h1>
                          <h1>date:{item.updatedAt}</h1>
                    </div>
                ))
                 :"Empty"
              }
        
        </div>
        </>
      )
}

export default GetHistory