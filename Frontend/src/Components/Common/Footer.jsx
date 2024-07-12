import React from 'react'
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import TraVisor from '../../Assets/TraVisor.png'
const Footer = () => {
  const basicFooterStyles = {
    display: 'flex',
    backgroundColor: '#1E516E',
    padding: '7%',
    fontFamily: 'Karla',
    justifyContent: 'space-between'

  };

  const headingStyles = { fontWeight: '550', fontSize: '1.7rem' };
  const itemStyles = { fontSize: '1rem' }
  return (
    <div style={basicFooterStyles}>
      <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
        <div style={{ alignSelf: 'center' }}  >
          <img style={{ width: '100%' }} src={TraVisor} alt=''></img>
        </div>
        <div style={{ display: 'flex', alignSelf: 'center', gap: '1rem', paddingTop: '6%' }}>
          <MdFacebook style={{ color: '#FFFFFF', }} />
          <FaTwitter style={{ color: '#FFFFFF' }} />
          <FaYoutube style={{ color: '#FFFFFF' }} />
          <LuInstagram style={{ color: '#FFFFFF' }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'left' }}>
        <p style={headingStyles}>Links</p>
        <div style={itemStyles}><p>Flights</p>
          <p>Stays</p>
          <p>Discover</p>
          <p>About Us</p>
          <p>Contact</p></div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'left' }}>
        <p style={headingStyles}>Our Activities</p>
        <div style={itemStyles}>
          <p>Tour</p>
          <p>Explore</p>
          <p>Guides</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'left' }}>
        <p style={headingStyles}>About Us</p>
        <div style={itemStyles}>
          <p>Our Story</p>
        </div>
      </div> <div style={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'left' }}>
        <p style={headingStyles}>Contact</p>
        <div style={itemStyles}><p>Flights</p>
          <p>Address: FAST NUCES</p>
          <p>Lahore, Pakistan</p>
          <p>Phone: 033883973</p>
          <p>Email: travisor@gmail.com</p>
          <p>Maps: Fast Nuces, Lahore</p>
        </div>
      </div>


    </div>
  )
}

export default Footer
