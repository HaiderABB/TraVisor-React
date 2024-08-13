import React, { useState } from 'react';
import signUpBg from '../../Assets/signUpBg.png';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
import ForgotPass from '../../Assets/ForgotPass.png'
import { IoIosArrowRoundBack } from "react-icons/io";
import { validateEmail } from '../../Validation/ValidateEmail';
import { ForgotPassword } from '../../API/Service/ForgotPassword';
import { toast } from 'react-toastify';


const SignUp = () => {


  const containerStyle = {
    backgroundImage: `url(${signUpBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Open Sans, sans-serif',
    height: '100vh'
  };

  const whiteDiv = {
    backgroundColor: "white",
    padding: '2.5rem',
    width: '30%', display: 'flex', flexDirection: 'column',
    borderRadius: '1rem',
    gap: '0.5rem'

  }

  const details = {
    color: '#333333',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',  // Added margin-bottom for spacing between fields
    margin: '0'
  }

  const commonInputStyle = {
    height: '2.5rem'  // Common height for all input fields
  }

  const [UserEmail, setUserEmail] = useState('');

  const handleForgotPassword = async (event) => {
    event.preventDefault();

    if (validateEmail(UserEmail)) {
      const response = await ForgotPassword({ email: UserEmail.toLowerCase() });
      if (response.network && response.mail) {
        toast.success('Password Reset Email Sent', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      else if (response.network && !response.mail) {
        toast.error('Email not found', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      } else {
        toast.error('Network Error', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    }
    else {
      toast.error('Please enter correct email address', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
  }
  return (
    <div style={containerStyle}>
      <div style={whiteDiv}>
        <img src={ForgotPass} style={{ width: '3rem', alignSelf: 'center', marginTop: '0' }} alt='password logo'></img>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem', alignSelf: 'center', margin: '0', color: '#333333' }}>Forgot Password</p>
        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>No worries, we'll send you reset instructions</p>
        <form onSubmit={handleForgotPassword} autoComplete='off'>
          <div style={details}>
            <p style={{ fontSize: '1rem', alignSelf: 'start', marginTop: '0.5rem', opacity: '60%', fontWeight: '600' }}>Email Address</p>
            <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
              <OutlinedInput
                placeholder='Enter your email address'
                style={commonInputStyle}
                required
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </FormControl>
          </div>
          <Button type='submit' sx={{ textTransform: 'none' }} variant="contained" size="medium" style={{ color: '#FFFFFF', backgroundColor: '#FA8B02', border: 'none', borderRadius: '1.5rem', width: '100%', fontFamily: 'Open Sans', marginTop: '0.6rem' }}>
            Reset Password
          </Button>
        </form>
        <div className=' hover:cursor-pointer hover:underline' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '0.1rem', color: "#333333", opacity: '60%', paddingTop: '1%' }}>
          <IoIosArrowRoundBack className=' hover:underline' size={30} /> <p style={{ fontSize: '0.9rem' }}><a href='http://localhost:3000/'>Back to Login</a></p>
        </div>
      </div>
    </div >
  );
}

export default SignUp;
