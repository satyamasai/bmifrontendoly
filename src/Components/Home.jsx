import React from 'react'
// import {Navbar}  from './Navbar'
import { Button, useColorMode } from '@chakra-ui/react'
import Logout from './Logout'
// import Login from './Login'
import GetProfile from './GetProfile'

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const auth= localStorage.getItem("BMI_token") || 0
  // console.log("auth"+auth)
  return (<>
    <div className='navbar'>
    <a href="/">
    
    <Button colorScheme='blue'>Home</Button>
    </a>
    <a href="/signup">
    <Button colorScheme='blue'>Signup</Button>
    </a>
    <a href="/history">
    <Button colorScheme='blue'>My Acoount</Button>
    </a>
    {auth!==0?<Logout/>:<a href='/login'> <Button colorScheme={'blue'}> Login </Button> </a> }

    <Button onClick={toggleColorMode}>
    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
  </Button>
    
    </div>

    <h1>{auth!==0?<GetProfile/>:"Please Login for checking BMI..."}</h1>
    </>
  )
}

export default Home