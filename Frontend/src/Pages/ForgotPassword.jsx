import React from 'react';
import signUpBg from '../Assets/signUpBg.png';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
import ForgotPassword from '../Assets/ForgotPassword.png'
import { IoIosArrowRoundBack } from "react-icons/io";

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
    width: '17rem', display: 'flex', flexDirection: 'column',
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

  const p = {
    margin: 'auto',
    opacity: '60%'
  };

  const pHeading = {
    margin: 'auto'
  };

  return (
    <div style={containerStyle}>
      <div style={whiteDiv}>
        <img src={ForgotPassword} style={{ width: '3rem', alignSelf: 'center', marginTop: '0' }}></img>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem', alignSelf: 'center', margin: '0', color: '#333333' }}>Forgot Password</p>
        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>No worries, we'll send you reset instructions</p>
        <div style={details}>
          <p style={{ fontSize: '1rem', alignSelf: 'start', marginTop: '0.5rem', opacity: '60%' }}>Email Address</p>
          <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
            <OutlinedInput
              placeholder='Enter your email address'
              style={commonInputStyle}
            />
          </FormControl>
        </div>
        <Button sx={{ textTransform: 'none' }} variant="contained" size="medium" style={{ color: '#FFFFFF', backgroundColor: '#FA8B02', border: 'none', borderRadius: '1.5rem', width: '100%', fontFamily: 'Open Sans', marginTop: '0.6rem' }}>
          Reset Password
        </Button>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '0.1rem', color: "#333333", opacity: '60%' }}>
          <IoIosArrowRoundBack size={30} /> <p style={{ fontSize: '0.9rem' }}>Back to Login</p>
        </div>
      </div>
    </div >
  );
}

export default SignUp;
