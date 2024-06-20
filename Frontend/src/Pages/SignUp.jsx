import React from 'react';
import signUpBg from '../Assets/signUpBg.png';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Checkbox, FormControlLabel } from '@mui/material';

const SignUp = () => {

  const [showPassword, setShowPassword] = React.useState(false);

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
    padding: '3rem',
    width: '17rem', display: 'flex', flexDirection: 'column',
    borderRadius: '1rem'
  }
  const createAcc = {
    display: "flex",
    flexDirection: "row",
  }

  const details = {
    color: '#333333',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem'  // Added margin-bottom for spacing between fields
  }

  const commonInputStyle = {
    height: '2.5rem'  // Common height for all input fields
  }

  return (
    <div style={containerStyle}>
      <div style={whiteDiv}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem', alignSelf: 'flex-start' }}>Create Account</p>

        <div style={details}>
          <p style={{ fontSize: '1rem', alignSelf: 'start' }}>Name and Surname</p>
          <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
            <OutlinedInput
              placeholder='Enter your name and surname'
              style={commonInputStyle}
            />
          </FormControl>
        </div>

        <div style={details}>
          <p style={{ fontSize: '1rem', alignSelf: 'start' }}>Email Address</p>
          <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
            <OutlinedInput
              placeholder='Enter your email address'
              style={commonInputStyle}
            />
          </FormControl>
        </div>

        <div style={details}>
          <p style={{ fontSize: '1rem', alignSelf: 'start' }}>Password</p>
          <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
            <OutlinedInput
              placeholder='Enter your password'
              id="outlined-adornment-password"
              type={showPassword ? 'password' : 'text'}
              style={commonInputStyle}
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

        <FormControlLabel
          control={<Checkbox />}
          label={
            <span style={{ fontSize: '0.8rem' }}>
              I agree with <span style={{ color: 'orange' }}>Terms</span> and <span style={{ color: 'orange' }}>Privacy</span>
            </span>
          }
        />
      </div>
    </div>
  );
}

export default SignUp;
