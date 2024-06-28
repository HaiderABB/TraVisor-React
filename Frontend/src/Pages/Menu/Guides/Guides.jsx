import React from 'react'
import Navbar from '../../../Components/Navbar'
import Footer from '../../../Components/Footer'
import GuidesPic from '../../../Assets/Guides.png'
import Explore from './Explore'
import TopGuides from './TopGuides'

const Guides = () => {


  const upperDiv = {
    backgroundImage: `url(${GuidesPic})`,
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
        <div style={{ paddingTop: '25%', paddingBottom: '3%' }}><p style={{ color: '#FFFFFF', fontWeight: '700', fontFamily: 'Montserrat', textAlign: 'left', marginLeft: '8%', fontSize: '2rem' }}>GUIDES</p>
        </div>
      </div>
      <Explore />
      <TopGuides />
      <Footer />
    </div>
  )
}

export default Guides
