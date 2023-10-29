import React, { useEffect } from 'react';
import {useState } from 'react';
import registerImg from '../../assets/register.svg';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {GoDotFill} from 'react-icons/go';  
import {FaCheck} from 'react-icons/fa';

const Register = ({onLogin, onShowPassword, onTogglePassword}) => {
  
  
 
  const [showIndicator, setShowIndicator]= useState(false);
  const [pass,setPass] = useState('');
  const [passLetter,setPassLetter] = useState(false);
  const [passNumber,setPassNumber] = useState(false);
  const [passChar,setPassChar] = useState(false);
  const [passLength,setPassLength] = useState(false);

  const [passComplete,setPassComplete] = useState(false);





 
  const handleShowIndicator = ( ) => {


    setShowIndicator(true);
  }

  const handlePasswordChange = (e) => {


    setPass(e.target.value);
    
  }



  useEffect(()=>{

    //check upper & lowecase
    if(pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){

      setPassLetter(true);
    }
    else{
      setPassLetter(false);
    }

    //check for numbers

    if(pass.match(/([0-9])/)){

     setPassNumber(true);
    }
    else{
      setPassNumber(false);
    }

    //check for special characters

    if(pass.match(/([!,@,#,$,%,^,&,*,?,_,~])/)){

      setPassChar(true);
    }
    else{
      setPassChar(false);
    }

    if(pass.length >=8){

      setPassLength(true);
    }
    else{
      setPassLength(false);
    }

    if(passLetter && passLength && passNumber && passChar){
      setPassComplete(true);
      console.log("valid pass");
    }
    else{
      
      setPassComplete(false);
    }
  },[pass, passLetter, passNumber, passChar, passLength])

  
  return (
 
      <div className='main-container --flex-center'>



<div className='form-container'>
   <form className='--form-control'>

     <h2 className='--color-danger --text-center' >Register</h2>
     <input type="text" className='--width-100' placeholder='Username'></input>
     <input type="email" className='--width-100' placeholder='Email'></input>

{/* Password field */}

     <div className='password'>
     <input type={onShowPassword ? "text" : "password"} className='--width-100' 
     placeholder='Password'
     onFocus={handleShowIndicator}
     value={pass}
     onChange={handlePasswordChange}
     ></input>
     <span className='icon' onClick={onTogglePassword}>
     { onShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye/>}
      
      </span>

     </div>
{/* Password block */}
     <button className={passComplete ? '--btn --btn-primary --btn-block' : '--btn --btn-primary --btn-block btn-disabled'} disabled={!passComplete}
     
     
     >Register</button>
      
     <span className='--text-sm --block'>Have an account? <a href='#' className='--text-sm' onClick={onLogin}>Login</a> </span>


     {/* Password strength indicator */}

     <div className={showIndicator ? 'show-indicator': 'hide-indicator'}>
      <ul className='--list-style-none --card --bg-grey --text-sm --p'>

       <p className='--text-sm'>Password Strength Indicator</p>
       < li className={passLetter ? 'pass-green': 'pass-red'}>
        <span  className='--align-center'>
          {passLetter ? (<FaCheck color="green" />) : (<GoDotFill />)}
        
       &nbsp; Lowercase & Uppercase
        </span>
       </li>

       <li className={passNumber ? 'pass-green': 'pass-red'}>
        <span className='--align-center'>
        {passNumber ? (<FaCheck color="green" />) : (<GoDotFill />)}
       
       &nbsp; Numbers (0-9)
        </span>
       </li>

       <li className={passChar ? 'pass-green': 'pass-red'}>
        <span className='--align-center'>
        {passChar ? (<FaCheck color="green" />) : (<GoDotFill />)}
       
       &nbsp; Special Character (!@#$%^&*)
        </span>
       </li>

       <li className={passLength ? 'pass-green': 'pass-red'}>
        <span className='--align-center'> {passLength ? (<FaCheck color="green" />) : (<GoDotFill />)}
       
       &nbsp; At least 8 Characters</span>
       </li>

      </ul>
     </div>
   </form>
</div>
<div className='img-container'>
  <img src={registerImg} alt='login' />
</div>
</div>
   
  )
}

export default Register
