import React from 'react'
import Footer from '../../../Components/Common/Footer'
import GuidesPic from '../../../Assets/Guides.png'
import Explore from '../../../Components/Menu/Guides/Explore'
import TopGuides from '../../../Components/Menu/Guides/TopGuides'

const Guides = () => {


  const upperDiv = {
    backgroundImage: `url(${GuidesPic})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    fontFamily: 'Montserrat", sans-serif',
    width: '100%',
  }

  return (
    <div>
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
