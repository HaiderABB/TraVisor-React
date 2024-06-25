import React from 'react'
import Navbar from '../../../Components/Navbar'
import PlaneTransport from '../../../Assets/PlaneTransport.png'
import FlightBooking from './FlightBooking'
import Destinations from './Destinations'

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
        <div style={{ paddingTop: '18rem', paddingBottom: '2.5rem' }}><p style={{ color: '#FFFFFF', fontWeight: '700', fontFamily: 'Montserrat', textAlign: 'left', marginLeft: '5rem', fontSize: '2rem' }}>TRANSPORTATION</p>
          <p style={{ color: '#FFFFFF', textAlign: 'left', marginLeft: '5rem' }}>Special offers to suit your plan</p>
        </div>
      </div>
      <FlightBooking />
      <Destinations />
    </div>
  )
}

export default Flights
