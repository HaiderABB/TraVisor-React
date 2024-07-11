import React from 'react'
import { useState } from 'react'
import { IoNavigateSharp } from "react-icons/io5";
import dayjs from 'dayjs';
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
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';

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

const FlightBooking = () => {
  const disabledButton = (index) => {
    const tempDisabled = disabled.map((value, i) => {
      if (i !== index) {
        return value = true;
      }
    });
    setDisabled(tempDisabled);
  };

  const [disabled, setDisabled] = useState([false, true, true]);

  const middleDiv = {
    backgroundColor: '#FAFBFC',
    display: 'flex',
    flexDirection: 'column',
    padding: '2%'
  }

  const [Date, setDate] = useState(dayjs());
  const handleDate = (event) => {
    setDate(event.target.value);
  }

  const consoleValues = () => {


    console.log('Hello I am testing this');
    console.log(Date.format());

  }

  const [trip, setTrip] = useState('');

  const handleChange = (event) => {
    setTrip(event.target.value);
  };

  const inputDivs = { width: '80%', display: 'flex', alignSelf: 'center', padding: '1rem', gap: '0.5rem', placeContent: 'center', };

  const inputDivsCalender = { width: '80%', display: 'flex', alignSelf: 'center', padding: '1rem', gap: '1.5rem', placeContent: 'center', };

  const buttonDisabled = {
    width: '45%', backgroundColor: '#D9D9D9', color: 'black', textTransform: 'none', fontSize: '1rem', fontWeight: '500', fontFamily: 'Montserrat'
  };
  const buttonEnabled = {
    width: '45%', backgroundColor: 'black', color: '#D9D9D9', textTransform: 'none', fontSize: '1rem', fontWeight: '500', fontFamily: 'Montserrat'
  };
  return (
    <div>
      <div style={middleDiv}>
        <p style={{ color: '#112211', fontSize: '1.5rem', fontWeight: '600' }}>Where are you flying?</p>
        <div style={inputDivs}>
          <FormControl sx={{
            m: 1, width: '40%', '& .MuiOutlinedInput-root': {
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
            m: 1, width: '40%', '& .MuiOutlinedInput-root': {
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
        <div style={inputDivs}>
          <FormControl sx={{
            m: 1, width: '40%', '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              }, '& .MuiInputLabel-root': {
                color: 'black',
              },
              '& .MuiSelect-icon': {
                color: 'black',
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
              sx={{ color: 'black' }}
            >
              <MenuItem style={{ color: 'black' }} value={1}>One Way</MenuItem>
              <MenuItem style={{ color: 'black' }} value={2}>Round Trip</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{
            m: 1, width: '40%', '& .MuiOutlinedInput-root': {
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
        <div style={inputDivsCalender} >
          <div style={{ width: '40%' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box
                sx={{
                  width: '100%',
                  color: 'black', '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'black',
                    },
                    '&:hover fieldset': {
                      borderColor: 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    }, '& .MuiInputLabel-root': {
                      color: 'black',
                    },
                    '& .MuiSelect-icon': {
                      color: 'black',
                    },
                    '& input': {
                      color: 'black',
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: 'black',
                      opacity: 1,
                    },
                    '& .MuiSvgIcon-root': {
                      color: 'black',
                    },
                    '& .MuiIconButton-root': {
                      color: 'black',
                    },
                  },
                }}
              >
                <DatePicker
                  label='Departure'
                  sx={{ width: '100%' }}
                  slotProps={{
                    field: { clearable: true },
                  }}
                />
              </Box>
            </LocalizationProvider>
          </div>
          <div style={{ width: '40%' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box
                sx={{
                  width: '100%',
                  color: 'black', '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'black',
                    },
                    '&:hover fieldset': {
                      borderColor: 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    }, '& input': {
                      color: 'black',
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: 'black',
                      opacity: 1,
                    },
                    '& .MuiSvgIcon-root': {
                      color: 'black',
                    },
                    '& .MuiIconButton-root': {
                      color: 'black',
                    }, '& .MuiFormLabel-root': {
                      color: 'black',
                      '&.Mui-focused': {
                        color: 'black',
                      },
                    },
                  },
                }}
              >
                <DatePicker
                  label='Return'
                  sx={{ width: '100%' }}
                  slotProps={{
                    field: { clearable: true },
                  }}
                />
              </Box>
            </LocalizationProvider>
          </div>
        </div>
        <div style={{ display: 'flex', alignSelf: 'center', width: '50%', paddingTop: '1.5rem', justifyContent: 'space-between', gap: '1rem' }}>
          <Button onClick={() => disabledButton(0)} style={disabled[0] ? buttonDisabled : buttonEnabled} variant="contained">Economy</Button>
          <Button onClick={() => disabledButton(1)} style={disabled[1] ? buttonDisabled : buttonEnabled} variant="contained">Business</Button>
          <Button onClick={() => disabledButton(2)} style={disabled[2] ? buttonDisabled : buttonEnabled} variant="contained">First Class</Button>
        </div>
        <Button onClick={consoleValues} type='submit' style={{ width: '20%', height: '3rem', backgroundColor: '#8DD3BB', color: 'black', textTransform: 'none', fontSize: '1rem', fontFamily: 'Montserrat', alignSelf: 'center', marginTop: '2rem' }} variant="contained" startIcon={<IoNavigateSharp />}>
          Search
        </Button>
      </div>
    </div>
  )
}

export default FlightBooking
