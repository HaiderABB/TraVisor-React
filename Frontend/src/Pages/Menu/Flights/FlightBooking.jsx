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
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';

// Custom styled component to remove number input arrows

const FlightBooking = () => {

  const [disabled, setDisabled] = useState([false, true, true]);
  const [TripHandler, setTripHandler] = useState('');
  const [TripHandleBool, setTripHandleBool] = useState(false);
  const [Date, setDate] = useState(dayjs());
  const [From, setFrom] = useState('');
  const [To, setTo] = useState('');

  const HandleFrom = (event) => {
    const value = event.target.value;
    setFrom(value);
    // console.log(From);
  }

  const HandleTo = (event) => {
    const value = event.target.value;
    setTo(value);
    // console.log(From);
    // console.log(To);
  }

  const HandleTripChange = (event) => {

    const value = event.target.value;
    setTripHandler(value);
    // console.log(value);
    if (value === 'OneWay') {
      setTripHandleBool(false)
      // console.log('I set the value to false')
    }
    else if (value === 'TwoWay') {
      setTripHandleBool(true);
      // console.log('I set the value to true')
    }

  }

  const HandleDisabledButton = (index) => {

    const tempDisabled = disabled.map((value, i) => {
      if (i !== index) {
        return value = true;
      }
    });
    setDisabled(tempDisabled);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  }


  // Div and Input Styling

  const middleDiv = {
    backgroundColor: '#FAFBFC', display: 'flex', flexDirection: 'column', padding: '2%'
  }

  const inputDivs = { width: '80%', display: 'flex', alignSelf: 'center', padding: '0.5rem', gap: '0.5rem', placeContent: 'center', marginTop: '1%' };

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
        <FormControl>
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
                value={From}
                onInput={HandleFrom}
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
                required
                value={To}
                onInput={HandleTo}
              />
            </FormControl>
          </div>
          <div style={inputDivs}>
            <FormControl sx={{
              alignSelf: 'center',
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
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                style={{ color: 'black' }}
                sx={{ color: 'black' }}
                onChange={HandleTripChange}
                value={TripHandler}
              >
                <MenuItem style={{ color: 'black' }} value={'OneWay'}>One Way</MenuItem>
                <MenuItem style={{ color: 'black' }} value={'TwoWay'}>Round Trip</MenuItem>

              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box
                sx={{
                  m: 1,
                  alignSelf: 'center',
                  width: '40%',
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
                  sx={{ width: '100%', color: 'black', }}
                  slotProps={{
                    field: { clearable: true },
                  }}
                />
              </Box>
            </LocalizationProvider>

          </div>
          <div style={inputDivsCalender} >

            {TripHandleBool ? <div style={{ width: '40%' }}>
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
            </div> : null}

          </div>
          <div style={{ display: 'flex', alignSelf: 'center', width: '50%', paddingTop: '1rem', justifyContent: 'space-between', gap: '1rem' }}>
            <Button onClick={() => HandleDisabledButton(0)} style={disabled[0] ? buttonDisabled : buttonEnabled} variant="contained">Economy</Button>
            <Button onClick={() => HandleDisabledButton(1)} style={disabled[1] ? buttonDisabled : buttonEnabled} variant="contained">Business</Button>
            <Button onClick={() => HandleDisabledButton(2)} style={disabled[2] ? buttonDisabled : buttonEnabled} variant="contained">First Class</Button>
          </div>
          <Button type='submit' style={{ width: '20%', height: '3rem', backgroundColor: '#8DD3BB', color: 'black', textTransform: 'none', fontSize: '1rem', fontFamily: 'Montserrat', alignSelf: 'center', marginTop: '2rem' }} variant="contained" startIcon={<IoNavigateSharp />}>
            Search
          </Button>
        </FormControl>
      </div>
    </div >
  )
}

export default FlightBooking
