import React from 'react'
import Hotel from '../../../Assets/Hotels.png'
import HotelBooking from '../../../Components/Menu/Hotels/HotelBooking'
import RecentSearches from '../../../Components/Menu/Hotels/RecentSearches'
import Discover from '../../../Components/Menu/Hotels/Discover'
import Footer from '../../../Components/Common/Footer'

const Hotels = () => {

  const upperDiv = {
    backgroundImage: `url(${Hotel})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    fontFamily: 'Montserrat", sans-serif',
    width: '100%'
  }

  return (
    <div>
      <div style={upperDiv}>
        <div style={{ paddingTop: '25%', paddingBottom: '3%' }}><p style={{ color: '#FFFFFF', fontWeight: '700', fontFamily: 'Montserrat', textAlign: 'left', marginLeft: '8%', fontSize: '2rem' }}>HOTELS</p>
          <p style={{ color: '#FFFFFF', textAlign: 'left', marginLeft: '8%' }}>Special offers to suit your plan</p>
        </div>
      </div>
      <HotelBooking />
      <RecentSearches />
      <Discover />
      <Footer />
    </div>
  )
}

export default Hotels
