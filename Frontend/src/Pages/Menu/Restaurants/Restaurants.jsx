import React from 'react'
import Navbar from '../../../Components/Navbar'
import Burger from '../../../Assets/Burger.png'
import SearchRestaurants from './SearchRestaurants'
import Suggested from './Suggested'
import Footer from '../../../Components/Footer'


const Restaurants = () => {

  const upperDiv = {
    backgroundImage: `url(${Burger})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    fontFamily: 'Montserrat", sans-serif',
    width: '100%'
  }

  return (
    <div>
      <Navbar />
      <div style={upperDiv}>
        <div style={{ paddingTop: '25%', paddingBottom: '3%' }}><p style={{ color: '#FFFFFF', fontWeight: '700', fontFamily: 'Montserrat', textAlign: 'left', marginLeft: '8%', fontSize: '2rem' }}>RESTAURANTS</p>
          <p style={{ color: '#FFFFFF', textAlign: 'left', marginLeft: '8%' }}>Special offers to suit your plan</p>
        </div>
      </div>
      <SearchRestaurants />
      <Suggested />
      <Footer />
    </div>
  )
}

export default Restaurants
