import React from 'react'
import Paris from '../../../Assets/Paris.png'
import BoraBora from '../../../Assets/BoraBora.png'
import London from '../../../Assets/London.png'
import Tahiti from '../../../Assets/Tahiti.png'
import Rome from '../../../Assets/Rome.png'
import Dubai from '../../../Assets/Dubai.png'
import Bali from '../../../Assets/Bali.png'
import StLucia from '../../../Assets/StLucia.png'
import Button from '@mui/material/Button';


const Destinations = () => {

  const detailsTag = { display: 'flex', flexDirection: 'column', color: '#FFFFFF', fontFamily: 'Montserrat', paddingTop: '94%' };
  const detailsName = { fontWeight: '550', paddingLeft: '5%', fontSize: '1.5rem' };
  const detailsCost = { display: 'flex', paddingLeft: '5%', gap: '20%', fontSize: '1rem' };

  return (
    <div style={{ backgroundColor: '#FAFBFC' }} className=' font-montserratAlternates'>
      <div className=' flex flex-row items-center justify-between p-4'>
        <div className=' text-left'>
          <p className=' font-bold text-secondary'>Destinations</p>
          <p className=' text-headings font-bold text-2xl'>Discover your love</p>
        </div>
        <div>
          <Button style={{ textTransform: 'none', color: '#276968', borderColor: '#276968' }} variant="outlined">See All</Button>
        </div>
      </div>
      <div className=' flex p-8 pl-10 gap-4'>
        <div style={{
          backgroundImage: `url(${Paris})`, backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: '0.5rem', width: '25%', textAlign: 'left',
          padding: '1%'
        }}>
          <div style={detailsTag}>
            <p style={detailsName}>Paris</p>
            <div style={detailsCost}>
              <p>A Paris Adventure</p>
              <p>$ 600</p>
            </div>
            <Button style={{ textTransform: 'none', width: '80%', alignSelf: 'center', backgroundColor: '#FFFFFF', color: '#276968', marginTop: '3%' }} variant="contained">Book Flight</Button>
          </div>
        </div>
        <div style={{
          backgroundImage: `url(${BoraBora})`, backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: '0.5rem', width: '25%', textAlign: 'left', height: '100%',
          padding: '1%'
        }}>
          <div style={detailsTag}>
            <p style={detailsName}>Bora Bora</p>
            <div style={detailsCost}>
              <p>An Amazing Journey</p>
              <p>$ 1500</p>
            </div>
            <Button style={{ textTransform: 'none', width: '80%', alignSelf: 'center', backgroundColor: '#FFFFFF', color: '#276968', marginTop: '3%' }} variant="contained">Book Flight</Button>
          </div>
        </div><div style={{
          backgroundImage: `url(${London})`, backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: '0.5rem', width: '25%', textAlign: 'left', height: '100%',
          padding: '1%'
        }}>
          <div style={detailsTag}>
            <p style={detailsName}>London</p>
            <div style={detailsCost}>
              <p>An Amazing Journey</p>
              <p>$ 350</p>
            </div>
            <Button style={{ textTransform: 'none', width: '80%', alignSelf: 'center', backgroundColor: '#FFFFFF', color: '#276968', marginTop: '3%' }} variant="contained">Book Flight</Button>
          </div>
        </div><div style={{
          backgroundImage: `url(${Tahiti})`, backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: '0.5rem', width: '25%', textAlign: 'left', height: '100%',
          padding: '1%'
        }}>
          <div style={detailsTag}>
            <p style={detailsName}>Sydney</p>
            <div style={detailsCost}>
              <p>An Amazing Journey</p>
              <p>$ 300</p>
            </div>
            <Button style={{ textTransform: 'none', width: '80%', alignSelf: 'center', backgroundColor: '#FFFFFF', color: '#276968', marginTop: '3%' }} variant="contained">Book Flight</Button>
          </div>
        </div>

      </div>
      <div style={{ display: 'flex', padding: '2rem', paddingLeft: '2.5rem', gap: '1rem' }}>
        <div style={{
          backgroundImage: `url(${Rome})`, backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: '0.5rem', width: '25%', textAlign: 'left', height: '100%',
          padding: '1%'
        }}>
          <div style={detailsTag}>
            <p style={detailsName}>Tahiti</p>
            <div style={detailsCost}>
              <p>An Amazing Journey</p>
              <p>$ 200</p>
            </div>
            <Button style={{ textTransform: 'none', width: '80%', alignSelf: 'center', backgroundColor: '#FFFFFF', color: '#276968', marginTop: '3%' }} variant="contained">Book Flight</Button>
          </div>
        </div>
        <div style={{
          backgroundImage: `url(${Dubai})`, backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: '0.5rem', width: '25%', textAlign: 'left', height: '100%',
          padding: '1%'
        }}>
          <div style={detailsTag}>
            <p style={detailsName}>Rome</p>
            <div style={detailsCost}>
              <p>An Amazing Journey</p>
              <p>$ 230</p>
            </div>
            <Button style={{ textTransform: 'none', width: '80%', alignSelf: 'center', backgroundColor: '#FFFFFF', color: '#276968', marginTop: '3%' }} variant="contained">Book Flight</Button>
          </div>
        </div><div style={{
          backgroundImage: `url(${Bali})`, backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: '0.5rem', width: '25%', textAlign: 'left', height: '100%',
          padding: '1%'
        }}>
          <div style={detailsTag}>
            <p style={detailsName}>Bali</p>
            <div style={detailsCost}>
              <p>An Amazing Journey</p>
              <p>$ 850</p>
            </div>
            <Button style={{ textTransform: 'none', width: '80%', alignSelf: 'center', backgroundColor: '#FFFFFF', color: '#276968', marginTop: '3%' }} variant="contained">Book Flight</Button>
          </div>
        </div><div style={{
          backgroundImage: `url(${StLucia})`, backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: '0.5rem', width: '25%', textAlign: 'left', height: '100%',
          padding: '1%'
        }}>
          <div style={detailsTag}>
            <p style={detailsName}>St Lucia</p>
            <div style={detailsCost}>
              <p>An Amazing Journey</p>
              <p>$ 446</p>
            </div>
            <Button style={{ textTransform: 'none', width: '80%', alignSelf: 'center', backgroundColor: '#FFFFFF', color: '#276968', marginTop: '3%' }} variant="contained">Book Flight</Button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Destinations