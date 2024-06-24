import React from 'react'
import PlaneTransport from '../../Assets/PlaneTransport.png'
import Navbar from '../../Components/Navbar'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { GoArrowSwitch } from "react-icons/go";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { styled } from '@mui/system';

// Custom styled component to remove number input arrows
const NoArrowsOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  '& input[type=number]': {
    '-moz-appearance': 'textfield', // For Firefox
    '&::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none', // For Chrome, Safari, Edge, Opera
      margin: 0,
    },
    '&::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none', // For Chrome, Safari, Edge, Opera
      margin: 0,
    },
  },
}));

const Transport = () => {
  const upperDiv = {
    backgroundImage: `url(${PlaneTransport})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    fontFamily: 'Montserrat", sans-serif',
  }
  const middleDiv = {
    backgroundColor: '#FAFBFC',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem'
  }

  const [trip, setTrip] = React.useState('');

  const handleChange = (event) => {
    setTrip(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div style={upperDiv}>
        <div style={{ paddingTop: '15rem', paddingBottom: '2.5rem' }}><p style={{ color: '#FFFFFF', fontWeight: '700', fontFamily: 'Montserrat', textAlign: 'left', marginLeft: '3rem', fontSize: '1.5rem' }}>TRANSPORTATION</p>
          <p style={{ color: '#FFFFFF', textAlign: 'left', marginLeft: '3rem' }}>Special offers to suit your plan</p></div>
      </div>
      <div style={middleDiv}>
        <p style={{ color: '#112211', fontSize: '1.5rem', fontWeight: '600' }}>Where are you flying?</p>
        <div style={{ width: '70%', display: 'flex', alignSelf: 'center', padding: '1rem', gap: '0.5rem' }}>
          <FormControl sx={{
            m: 1, width: '50%', '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
            },
          }} variant="outlined">
            <InputLabel style={{ color: 'black' }} >From</InputLabel>
            <OutlinedInput
              style={{ color: 'black' }}
              id="outlined-adornment-password"
              type={'text'}
              endAdornment={
                <InputAdornment position="end">
                  <GoArrowSwitch style={{ color: 'black' }}></GoArrowSwitch>
                </InputAdornment>
              }
              label="From"
            />
          </FormControl>
          <FormControl sx={{
            m: 1, width: '50%', '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
            },
          }} variant="outlined">
            <InputLabel style={{ color: 'black' }} >To</InputLabel>
            <OutlinedInput
              style={{ color: 'black' }}
              id="outlined-adornment-password"
              type={'text'}
              endAdornment={
                <InputAdornment position="end">
                  <GoArrowSwitch style={{ color: 'black' }}></GoArrowSwitch>
                </InputAdornment>
              }
              label="To"
            />
          </FormControl>
        </div>
        <div style={{ width: '70%', display: 'flex', alignSelf: 'center', padding: '1rem', gap: '0.5rem' }}>
          <FormControl sx={{
            m: 1, width: '50%', '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
            },
          }} variant="outlined">
            <InputLabel style={{ color: 'black' }} id="demo-simple-select-label">Trip</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={trip}
              label="Age"
              onChange={handleChange}
              style={{ color: 'black' }}
            >
              <MenuItem style={{ color: 'black' }} value={1}>One Way</MenuItem>
              <MenuItem style={{ color: 'black' }} value={2}>Two Way</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{
            m: 1, width: '50%', '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
            },
          }} variant="outlined">
            <InputLabel style={{ color: 'black' }}>Passenger</InputLabel>
            <NoArrowsOutlinedInput
              style={{ color: 'black' }}
              id="outlined-adornment-number"
              type="number"
              startAdornment={
                <InputAdornment style={{ color: 'black' }} position="start"><FiMinus /></InputAdornment>
              }
              endAdornment={
                <InputAdornment style={{ color: 'black' }} position="end"><GoPlus /></InputAdornment>
              }
              label="Passenger"
            />
          </FormControl>
        </div>
      </div>

    </div>
  )
}

export default Transport
