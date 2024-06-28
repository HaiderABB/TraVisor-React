import React from 'react'
import { useState } from 'react'
import { IoNavigateSharp } from "react-icons/io5";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { GoArrowSwitch } from "react-icons/go";
import { IoBed } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
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

const HotelBooking = () => {

  const middleDiv = {
    backgroundColor: '#FAFBFC',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem'
  }

  const inputDivs = { width: '80%', display: 'flex', alignSelf: 'center', padding: '1rem', gap: '0.5rem', placeContent: 'center', };

  const inputDivsCalender = { width: '80%', display: 'flex', alignSelf: 'center', padding: '1rem', gap: '1.5rem', placeContent: 'center', };

  return (
    <div>
      <div style={middleDiv}>
        <p style={{ color: '#112211', fontSize: '1.5rem', fontWeight: '600' }}>Find Hotels</p>
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
            <InputLabel style={{ color: 'black' }} >Enter Destination</InputLabel>
            <OutlinedInput
              style={{ color: 'black' }}
              id="outlined-adornment-password"
              type={'text'}
              startAdornment={
                <InputAdornment position="start">
                  <IoBed style={{ color: 'black' }}></IoBed>
                </InputAdornment>
              }
              label="Enter Destination"
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
            <InputLabel style={{ color: 'black' }}>Guests</InputLabel>
            <NoArrowsOutlinedInput
              style={{ color: 'black' }}
              id="outlined-adornment-number"
              type="number"
              startAdornment={
                <InputAdornment style={{ color: 'black' }} position="start"><FaUser /></InputAdornment>
              }

              label="Guests"
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
                  label='Check-In'
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
                  label='Check-Out'
                  sx={{ width: '100%' }}

                  slotProps={{
                    field: { clearable: true },
                  }}
                />
              </Box>
            </LocalizationProvider>
          </div>
        </div>
        <Button style={{ width: '20%', height: '3rem', backgroundColor: '#8DD3BB', color: 'black', textTransform: 'none', fontSize: '1rem', fontFamily: 'Montserrat', alignSelf: 'center', marginTop: '2rem' }} variant="contained" startIcon={<IoNavigateSharp />}>
          Find
        </Button>
      </div>
    </div>
  )
}

export default HotelBooking
