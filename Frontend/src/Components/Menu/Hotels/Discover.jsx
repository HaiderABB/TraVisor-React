import React from 'react'
import Button from '@mui/material/Button';
import image1 from '../../../Assets/image1.png'
import image2 from '../../../Assets/image2.png'
import image3 from '../../../Assets/image3.png'
import image4 from '../../../Assets/image4.png'

const Discover = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2%', fontFamily: 'Karla' }}>
        <div style={{ textAlign: 'left' }}>
          <p style={{ fontWeight: 'bold', color: '#276968' }}>Top Hotel</p>
          <p style={{ color: '#051721', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Montserrat Alternates' }}>Discover your love</p>
        </div>
        <div>
          <Button style={{ textTransform: 'none', color: '#276968', borderColor: '#276968' }} variant="outlined">See All</Button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '1%', placeContent: 'center', paddingBottom: '3%', gap: '1%' }}>
        <div style={{ backgroundColor: '#276968', width: '50%', borderRadius: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3%', fontFamily: 'Montserrat Alternates' }}>
            <div style={{ width: '50%' }}> <p style={{ color: '#FFFFFF', fontSize: '2rem', textAlign: 'left', fontWeight: '550' }}>Discover the best hotel in Greece</p></div>

            <div style={{ backgroundColor: '#FFFFFF', color: '#276968', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', width: '11%' }}>
              <p style={{ fontSize: '0.8rem' }}>From <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>$200</span></p>
            </div>
          </div>
          <div style={{ width: '100%', padding: '1%' }}>
            <p style={{ color: '#FFFFFF', textAlign: 'left', fontFamily: 'Montserrat', fontSize: '1rem' }}>Perched high above the Aegean Sea in this magical place, privy to the island’s most emblematic views, is it any wonder that the picturesque sanctuary that is the Grace Hotel, Auberge Resorts Collection in Santorini, has come out on top of a poll of travel magazine readers as the Best Hotel in Greece and ranked as the second Best Hotel in the World?</p>
          </div>
          <Button style={{ width: '95%', height: '3rem', backgroundColor: '#FFFFFF', color: '#276968', textTransform: 'none', fontSize: '1rem', fontFamily: 'Montserrat', alignSelf: 'center', marginTop: '15%' }} variant="contained">
            Book Hotel
          </Button>
        </div>
        <div >
          <div style={{ display: 'flex', gap: '1%' }}>
            <img src={image1}></img>
            <img src={image2}></img>
          </div>
          <div style={{ display: 'flex', gap: '1%', marginTop: '1%' }}>
            <img src={image3}></img>
            <img src={image4}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover
