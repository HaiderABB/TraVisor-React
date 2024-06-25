import React from 'react';
import signUpBg from '../../Assets/signUpBg.png';
import { Button } from '@mui/material';
import { IoIosArrowRoundBack } from "react-icons/io";
import mail from '../../Assets/mail.png'
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

  return (
    <div style={containerStyle}>
      <div style={whiteDiv}>
        <img src={mail} style={{ width: '3rem', alignSelf: 'center', marginTop: '0' }} alt='email logo'></img>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem', alignSelf: 'center', margin: '0', color: '#333333' }}>Check your email</p>
        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', marginBottom: '0' }}>We sent a password reset link to <span style={{ fontWeight: '600' }}>loremipsum@gmail.com</span></p>
        <Button sx={{ textTransform: 'none' }} variant="contained" size="medium" style={{ color: '#FFFFFF', backgroundColor: '#FA8B02', border: 'none', borderRadius: '1.5rem', width: '100%', fontFamily: 'Open Sans', marginTop: '0.6rem' }}>
          Open email app
        </Button>
        <p style={{ fontSize: '0.7rem' }}>Didn't recieve the email? <span style={{ color: 'orange' }}>Click to resend</span></p>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '0.1rem', color: "#333333", opacity: '60%', paddingTop: '1%' }}>
          <IoIosArrowRoundBack size={30} /> <p style={{ fontSize: '0.9rem' }}>Back to Login</p>
        </div>
      </div>
    </div >
  );
}

export default SignUp;
