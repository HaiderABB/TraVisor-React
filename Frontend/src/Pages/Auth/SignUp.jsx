import React, { useContext } from 'react';
import signUpBg from '../../Assets/signUpBg.png';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { UserSignUp } from '../../API/Service/userSignUp';

const SignUp = () => {

  //                                                              Page Styling

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
    padding: '3.5rem',
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

  const p = {
    margin: 'auto',
    opacity: '60%'
  };

  //                                                                      States

  const [showPassword, setShowPassword] = useState(false);
  const [UserEmail, setEmail] = useState('');
  const [UserPassword, setPassword] = useState('');
  const [UserName, setName] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  //                                                              Validate Email Regex
  const validateEmail = (UserEmail) => {
    return String(UserEmail)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  //                                                               Handle SignUp Button
  const handleSignUp = async () => {

    if (validateEmail(UserEmail) && UserName !== '' && UserPassword !== '') {

      UserSignUp({ name: UserName, email: UserEmail, password: UserPassword })
      console.log('Registeration successful')
    }

    //                                                             Method to handle SnackBar
    else {

    }

  }


  return (
    <div style={containerStyle}>
      <div style={whiteDiv}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem', alignSelf: 'flex-start', margin: '0' }}>Create Account</p>

        <div style={details}>
          <p style={{ fontSize: '1rem', alignSelf: 'start', opacity: '60%', fontWeight: '600' }}>Name and Surname</p>
          <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
            <OutlinedInput
              placeholder='Enter your name and surname'
              style={commonInputStyle}
              value={UserName}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
        </div>

        <div style={details}>
          <p style={{ fontSize: '1rem', alignSelf: 'start', opacity: '60%', fontWeight: '600' }}>Email Address</p>
          <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
            <OutlinedInput
              placeholder='Enter your email address'
              style={commonInputStyle}
              onChange={(e) => setEmail(e.target.value)}
              value={UserEmail}
            />
          </FormControl>
        </div>

        <div style={details}>
          <p style={{ fontSize: '1rem', alignSelf: 'start', opacity: '60%', fontWeight: '600' }}>Password</p>
          <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
            <OutlinedInput
              placeholder='Enter your password'
              id="outlined-adornment-password"
              type={showPassword ? 'password' : 'text'}
              onChange={(e) => setPassword(e.target.value)}
              value={UserPassword}
              style={commonInputStyle}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        <FormControlLabel
          control={<Checkbox />}
          label={
            <span style={{ fontSize: '0.8rem', fontFamily: 'Open Sans', opacity: '60%', fontWeight: '600' }}>
              I agree with <span style={{ color: 'orange' }}>Terms</span> and <span style={{ color: 'orange' }}>Privacy</span>
            </span>
          }
        />
        <Button sx={{ textTransform: 'none' }} onClick={handleSignUp} variant="contained" size="medium" style={{ color: '#FFFFFF', backgroundColor: '#FA8B02', border: 'none', borderRadius: '1.5rem', width: '100%', fontFamily: 'Open Sans' }}>
          Sign Up
        </Button>
        <p style={p}>or</p>
        <Button sx={{ textTransform: 'none', borderColor: '#333333' }} size="medium" style={{ borderColor: '#333333', color: '#333333', display: 'flex', borderRadius: '1.5rem', gap: '1rem', border: '0.1rem solid rgba(51, 51, 51, 0.6)' }} variant="outlined" startIcon={<FcGoogle />}>
          <span style={{ opacity: '60%' }}>Sign Up with Google</span>
        </Button>
        <p>Already have an account? <span style={{ color: 'orange' }}>Log In</span></p>
      </div>
    </div >
  );
}

export default SignUp;
