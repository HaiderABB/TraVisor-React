import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { CiSearch } from "react-icons/ci";
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { IoNavigateSharp } from 'react-icons/io5';


const SearchRestaurants = () => {
  const middleDiv = {
    backgroundColor: '#FAFBFC',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem'
  }

  const disabledButton = (index) => {
    const tempDisabled = disabled.map((value, i) => {
      if (i !== index) {
        return value = true;
      }
      return false
    });
    setDisabled(tempDisabled);
  };

  const [disabled, setDisabled] = useState([false, true, true]);
  const [typeDisabled, setTypeDisabled] = useState([true, true, true, true, true, true, true, true, true, true]);

  const HandleType = (index) => {
    const temp = [...typeDisabled];
    temp[index] = !temp[index];
    setTypeDisabled(temp);
  }

  const buttonDisabled = {
    width: '45%', backgroundColor: '#D9D9D9', color: 'black', textTransform: 'none', fontSize: '1rem', fontWeight: '500', fontFamily: 'Montserrat'
  };
  const buttonEnabled = {
    width: '45%', backgroundColor: 'black', color: '#D9D9D9', textTransform: 'none', fontSize: '1rem', fontWeight: '500', fontFamily: 'Montserrat'
  };

  const typeButtonEnabled = {
    width: '45%', backgroundColor: '#BEE1FA', color: 'black', textTransform: 'none', fontSize: '1rem', fontWeight: '500', fontFamily: 'Montserrat'
  }

  const typeButtonDisabled = {
    width: '45%', backgroundColor: 'black', color: '#BEE1FA', textTransform: 'none', fontSize: '1rem', fontWeight: '500', fontFamily: 'Montserrat'
  }


  const searchBarStyle = {
    '& .MuiOutlinedInput-root': {
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
  };

  const inputDivsCalender = { width: '80%', display: 'flex', alignSelf: 'center', paddingTop: '3%', gap: '1.5rem', placeContent: 'center', };

  return (
    <div style={middleDiv}>
      <div style={{ display: 'flex', alignSelf: 'center', gap: '2rem' }}><p style={{ color: '#112211', fontSize: '1.5rem', fontWeight: '600', alignSelf: 'center' }}>Search Destination</p>
        <TextField
          id="outlined-basic"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CiSearch style={{ color: 'black', fontSize: '1.5rem' }} />
              </InputAdornment>
            ),
            style: { color: 'black', textAlign: 'center' },
          }}
          sx={searchBarStyle}
        />
      </div>
      <div style={{ display: 'flex', alignSelf: 'center', width: '50%', paddingTop: '1.5%', justifyContent: 'space-between', gap: '1rem' }}>
        <Button onClick={() => disabledButton(0)} style={disabled[0] ? buttonDisabled : buttonEnabled} variant="contained">Buffet</Button>
        <Button onClick={() => disabledButton(1)} style={disabled[1] ? buttonDisabled : buttonEnabled} variant="contained">Dine-In</Button>
        <Button onClick={() => disabledButton(2)} style={disabled[2] ? buttonDisabled : buttonEnabled} variant="contained">Take Away</Button>
      </div>
      <div style={{ display: 'flex', alignSelf: 'center', width: '70%', paddingTop: '1.5%', justifyContent: 'space-between', gap: '1rem' }}>
        <Button onClick={() => HandleType(0)} style={typeDisabled[0] ? typeButtonEnabled : typeButtonDisabled} variant="contained">Chinese</Button>
        <Button onClick={() => HandleType(1)} style={typeDisabled[1] ? typeButtonEnabled : typeButtonDisabled} variant="contained">Thai</Button>
        <Button onClick={() => HandleType(2)} style={typeDisabled[2] ? typeButtonEnabled : typeButtonDisabled} variant="contained">Indian</Button>
        <Button onClick={() => HandleType(3)} style={typeDisabled[3] ? typeButtonEnabled : typeButtonDisabled} variant="contained">French</Button>
        <Button onClick={() => HandleType(4)} style={typeDisabled[4] ? typeButtonEnabled : typeButtonDisabled} variant="contained">Turkish</Button>
      </div>
      <div style={{ display: 'flex', alignSelf: 'center', width: '70%', paddingTop: '1.5%', justifyContent: 'space-between', gap: '1rem' }}>
        <Button onClick={() => HandleType(5)} style={typeDisabled[5] ? typeButtonEnabled : typeButtonDisabled} variant="contained">American</Button>
        <Button onClick={() => HandleType(6)} style={typeDisabled[6] ? typeButtonEnabled : typeButtonDisabled} variant="contained">Seafood</Button>
        <Button onClick={() => HandleType(7)} style={typeDisabled[7] ? typeButtonEnabled : typeButtonDisabled} variant="contained">Japanese</Button>
        <Button onClick={() => HandleType(8)} style={typeDisabled[8] ? typeButtonEnabled : typeButtonDisabled} variant="contained">Californian</Button>
        <Button onClick={() => HandleType(9)} style={typeDisabled[9] ? typeButtonEnabled : typeButtonDisabled} variant="contained">Italian</Button>
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
                label='Date'
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
            <Box sx={{
              width: '100%', paddingTop: '0',
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
            }}><DemoContainer sx={{ paddingTop: '0' }} components={['TimePicker']}>
                <TimePicker slotProps={{
                  field: { clearable: true },
                }} sx={{ width: '100%' }} label="Time" />
              </DemoContainer></Box>
          </LocalizationProvider>
        </div>
      </div>
      <Button style={{ width: '20%', height: '3rem', backgroundColor: '#8DD3BB', color: 'black', textTransform: 'none', fontSize: '1rem', fontFamily: 'Montserrat', alignSelf: 'center', marginTop: '2rem' }} variant="contained" startIcon={<IoNavigateSharp />}>
        Search
      </Button>
    </div>
  )
}

export default SearchRestaurants
