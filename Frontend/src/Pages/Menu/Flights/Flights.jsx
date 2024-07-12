import React from 'react'
import Navbar from '../../../Components/Common/Navbar'
import PlaneTransport from '../../../Assets/PlaneTransport.png'
import FlightBooking from '../../../Components/Menu/Flights/FlightBooking'
import Destinations from '../../../Components/Menu/Flights/Destinations'
import Footer from '../../../Components/Common/Footer'

const Flights = () => {
  const upperDiv = {
    backgroundImage: `url(${PlaneTransport})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    fontFamily: 'Montserrat", sans-serif',
  }
  return (
    <div>
      <Navbar />
      <div style={upperDiv}>
        <div style={{ paddingTop: '25%', paddingBottom: '3%' }}><p style={{ color: '#FFFFFF', fontWeight: '700', fontFamily: 'Montserrat', textAlign: 'left', marginLeft: '8%', fontSize: '2rem' }}>TRANSPORTATION</p>
          <p style={{ color: '#FFFFFF', textAlign: 'left', marginLeft: '8%' }}>Special offers to suit your plan</p>
        </div>
      </div>
      <FlightBooking />
      <Destinations />
      <Footer />
    </div>
  )
}

export default Flights
