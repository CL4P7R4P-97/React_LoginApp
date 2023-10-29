import React from 'react'
import Login from './Login';
import Register from './Register';
import Reset from './Reset';
import { useState } from 'react';

const AuthContainer = () => {

  // const[login,setLogin] = useState(true);
  // const[reset,setReset] = useState(false);
  // const[register,setRegister] = useState(false);

  const [showPassword, setShowPassword]= useState(false);


  const handleTogglePassword = ( ) => {
    
    setShowPassword(!showPassword);
  }

  
  const [auth, setAuth] = useState({

    login: true,
    register: false,
    reset: false,
  })


  const handleRegister =()=>{

    setAuth({
      login: false,
    register: true,
    reset: false,
    });
  }
  const handleReset =()=>{

    setAuth({
      login: false,
    register: false,
    reset: true,
    });
  }

  const handleLogin =()=>{

    setAuth({
      login: true,
    register: false,
    reset: false,
    });
  }

  return (
    <section className='--flex-center --100vh '>
      <div className='container box'>
 
      {auth.login 
      && 
      <Login onRegister={handleRegister} 
      onReset={handleReset} 
      onShowPassword={showPassword}
       onTogglePassword={handleTogglePassword}
      />}
      {auth.register 
      && 
      <Register
       onLogin={handleLogin}
       onShowPassword={showPassword}
       onTogglePassword={handleTogglePassword}
        />}
      {auth.reset && <Reset onLogin={handleLogin}/>}
      </div>

    </section>
  )
}

export default AuthContainer
