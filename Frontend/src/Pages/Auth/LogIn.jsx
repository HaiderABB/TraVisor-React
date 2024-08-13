import React from 'react';
import { useState } from 'react'
import signUpBg from '../../Assets/signUpBg.png';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import { validateEmail } from '../../Validation/ValidateEmail';
import { UserlogIn } from '../../API/Service/UserLogIn';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';


const Login = () => {

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
    padding: '3rem',
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
  const [UserEmail, setEmail] = useState('');
  const [UserPassword, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const { setUsername } = useContext(AuthContext);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignIn = async (event) => {
    event.preventDefault();

    if (validateEmail(UserEmail) && UserPassword !== '') {
      const response = await UserlogIn({ email: UserEmail.toLowerCase(), password: UserPassword });
      if (response.network && response.email && response.password) {
        setIsAuthenticated(true);
        setUsername(response.username);
        navigate('/Flights');
      }
      else if (response.network && response.email && !response.password) {
        toast.error('Invalid Password', {
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
      else if (response.network && !response.email) {
        toast.error("You have entered an incorrect email", {
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
      else {
        toast.error("Network Error", {
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
    }
    else {
      toast.error("Please enter correct Email Address", {
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
  }

  return (
    <div style={containerStyle}>
      <div style={whiteDiv}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem', alignSelf: 'center', margin: '0' }}>Login to continue</p>

        <form onSubmit={handleSignIn}>
          <div style={details}>
            <p style={{ fontSize: '1rem', alignSelf: 'start', opacity: '60%', fontWeight: '600' }}>Email Address</p>
            <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
              <OutlinedInput
                placeholder='Enter your email address'
                style={commonInputStyle}
                onChange={(e) => { setEmail(e.target.value) }}
                required
              />
            </FormControl>

            <p style={{ fontSize: '1rem', alignSelf: 'start', opacity: '60%', fontWeight: '600' }}>Password</p>
            <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
              <OutlinedInput
                placeholder='Enter your password'
                id="outlined-adornment-password"
                type={showPassword ? 'password' : 'text'}
                style={commonInputStyle}
                onChange={(e) => { setPassword(e.target.value) }}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>

          <p style={{ color: '#333333', opacity: '60%', fontSize: '0.8rem', textAlign: 'right', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            <a className=' hover:underline hover:cursor-pointer' href='http://localhost:3000/ForgotPassword'>Forgot your password?</a></p>
          <Button type='submit' sx={{ textTransform: 'none' }} variant="contained" size="medium" style={{ color: '#FFFFFF', backgroundColor: '#FA8B02', border: 'none', borderRadius: '1.5rem', width: '100%', fontFamily: 'Open Sans' }}>
            Sign In
          </Button>

        </form>

        <p className=' self-center'>Don't have an account? <span className=' hover:underline hover:cursor-pointer' style={{ color: 'orange' }}><a
          href='http://localhost:3000/SignUp'>Sign Up</a></span></p>

      </div>
    </div >
  );
}

export default Login;
