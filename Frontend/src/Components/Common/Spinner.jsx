import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { FaPlane } from "react-icons/fa6";

function Spinner() {


  return (
    <div style={{ backgroundColor: '#1E516E', display: 'flex', height: '100vh', flexDirection: 'column', overflow: 'hidden' }}>
      <p style={{ color: '#FFFFFF', fontSize: '3rem', alignSelf: 'center', paddingTop: '6%', fontFamily: 'monospace', fontWeight: 'bold' }}>Please Wait</p>
      <div style={{ display: 'flex', height: '100vh', alignItems: 'center' }}>
        <FaPlane style={{ fontSize: '3rem', color: '#FFFFFF' }} className='rotating-plane' />
      </div>
    </div>

  );
}

export default Spinner;