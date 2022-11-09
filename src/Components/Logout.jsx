import { Button } from '@chakra-ui/react'
import React from 'react'
// import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const handleLogout=()=>{
localStorage.setItem("BMI_token","")
window.location.href="/"
    }
  return (
    <Button colorScheme={"red"} onClick={handleLogout}>Logout</Button>
  )
}

export default Logout