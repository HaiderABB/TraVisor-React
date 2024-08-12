import React, { useState } from 'react';
import signUpBg from '../../Assets/signUpBg.png';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import password from '../../Assets/password.png';
import IconButton from '@mui/material/IconButton';
import { IoIosArrowRoundBack } from "react-icons/io";
import { toast } from 'react-toastify';
import { UpdatePassword } from '../../API/Service/UpdatePassword';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


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


  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const navigate = useNavigate();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();
  const jwt_token = query.get('id');


  const handleNewPassword = async (event) => {
    event.preventDefault();
    if (newPass === confirmPass) {
      const response = await UpdatePassword({ password: newPass, jwt_token })
      if (response) {
        setTimeout(() => { navigate('/') }, 4000)
        toast.success('Password Updated Successfully!', {
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
        toast.error("Couldn't Update Password", {
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
      toast.error('Passwords do not match', {
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
        <img src={password} style={{ width: '3rem', alignSelf: 'center', marginTop: '0' }} alt='password logo'></img>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem', alignSelf: 'center', margin: '0', color: '#333333' }}>Set New Password</p>
        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Your new password must be different from previously used passwords</p>
        <form onSubmit={handleNewPassword} autoComplete='off'>
          <div style={details}>
            <p style={{ fontSize: '1rem', alignSelf: 'start', opacity: '60%', fontWeight: '600' }}>New Password</p>
            <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
              <OutlinedInput
                placeholder='Enter your password'
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                style={commonInputStyle}
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div style={details}>
            <p style={{ fontSize: '1rem', alignSelf: 'start', opacity: '60%', fontWeight: '600' }}>Confirm Password</p>
            <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
              <OutlinedInput
                placeholder='Enter your password'
                id="outlined-adornment-password"
                style={commonInputStyle}
                type={showPassword ? 'text' : 'password'}

                value={confirmPass}
                onChange={(event) => setConfirmPass(event.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <Button type='submit' sx={{ textTransform: 'none' }} variant="contained" size="medium" style={{ color: '#FFFFFF', backgroundColor: '#FA8B02', border: 'none', borderRadius: '1.5rem', width: '100%', fontFamily: 'Open Sans', marginTop: '0.6rem' }}>
            Reset Password
          </Button>
        </form>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '0.1rem', color: "#333333", opacity: '60%' }}>
          <IoIosArrowRoundBack size={30} /> <p style={{ fontSize: '0.9rem' }}>Back to Login</p>
        </div>
      </div>
    </div >
  );
}

export default SignUp;
