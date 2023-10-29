import React from 'react';

import {AiOutlineClose} from 'react-icons/ai';
import resetImg from '../../assets/forgot.svg'

const Reset = ({onLogin}) => {
  return (
    <div className='main-container --flex-center'>



    <div className='form-container reset'>
       <form className='--form-control'>
    
         <h2 className='--color-danger --text-center' >Reset</h2>
         
         <input type="email" className='--width-100' placeholder='Email'></input>
         
         <button className='--btn --btn-primary --btn-block'>Reset Password</button>
          
         <span className='--text-sm --block --text-center'>Reset link will be sent !  </span>

       <div className='close' onClick={onLogin} >
         <AiOutlineClose color="red" />
       </div>

       </form>
    </div>
    <div className='img-container'>
      <img src={resetImg} alt='login' />
    </div>
    </div>
  )
}

export default Reset
