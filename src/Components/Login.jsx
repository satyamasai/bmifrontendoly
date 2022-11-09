import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
        
  const navigate = useNavigate()
    const handleSubmit=(e)=>{
e.preventDefault()

const payload={
    
    email:e.target[0].value,
    password:e.target[1].value
}
console.log(payload)

return fetch('http://localhost:5501/user/login', {
    
  method: 'POST',

  headers: {
   
    'Content-Type': 'application/json'

    
  },
  body: JSON.stringify(payload),
}).then((res)=>res.json())
.then((res)=>{
  
  const BMI_token= res.token;
  localStorage.setItem("BMI_token",BMI_token)

  alert("log in succesfull")
  navigate("/checkBMI")
  
}).catch(err=>{
alert("Password incorrect..")})

    }



  return (
    <div>
    <form onSubmit={handleSubmit}>
   <label>
    Email:
    <input type="email" name="email" />
  </label>

    <label>
    Password:
    <input type="text" name="password" />
  </label>


    <input type="submit" value="login" />
  </form>
     
    
    </div>
  )
}

export default Login