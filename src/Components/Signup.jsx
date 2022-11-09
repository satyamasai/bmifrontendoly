import React from 'react'
import {useNavigate} from "react-router-dom"
const Signup = () => {

const navigate = useNavigate()
    const handleSubmit=(e)=>{
e.preventDefault()

const payload={
    name:e.target[0].value,
    email:e.target[1].value,
    password:e.target[2].value
}
console.log(payload)

return fetch('http://localhost:5501/user/signup', {
    
  method: 'POST',
  
  headers: {
    
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload),
}).then((res)=>res.json())
.then((res)=>{console.log(res)

  alert("sign up succesfull")
  navigate("/login")
})




}



  return (
    <div className='form_div'>
    <form onSubmit={handleSubmit} >
    <label>
      Name:
      <input type="text"  />
    </label> 
    <br />
    <label>
    Email:
    <input type="email" name="email" />
  </label>
  <br />

    <label>
    Password:
    <input type="text" name="password" />
  </label>
  <br />


    <input type="submit" value="Signup" />
  </form>
     </div>
  )
}

export default Signup