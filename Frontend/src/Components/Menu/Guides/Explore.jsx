import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { CiSearch } from "react-icons/ci";
import { Button } from '@mui/material';
import { IoNavigateSharp } from 'react-icons/io5';
const Explore = () => {

  const middleDiv = {
    backgroundColor: '#FAFBFC',
    display: 'flex',
    flexDirection: 'column',
    padding: '2%'
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
      '&:placeholder fieldset': {
        textAlign: 'center'
      }
    },
    width: '30%',
    alignSelf: 'center',
    paddingTop: '2%',

  };

  return (
    <div style={middleDiv}>
      <p style={{ color: '#112211', fontSize: '2rem', fontWeight: '600', fontFamily: 'Montserrat' }}>Explore Travel guides</p>
      <TextField
        placeholder='Search for a destination'
        id="outlined-basic"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CiSearch style={{ color: 'black', fontSize: '1.5rem' }} />
            </InputAdornment>
          ),
          style: { color: 'black' },
        }}
        sx={searchBarStyle}
      />
      <Button style={{ width: '15%', height: '3rem', backgroundColor: '#8DD3BB', color: 'black', textTransform: 'none', fontSize: '1rem', fontFamily: 'Montserrat', alignSelf: 'center', marginTop: '2rem' }} variant="contained" startIcon={<IoNavigateSharp />}>
        Search
      </Button>
    </div>
  )
}

export default Explore
