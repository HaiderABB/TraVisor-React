import React from 'react'
import profilePhoto from '../Assets/profilePhoto.png'
import { CiSearch } from 'react-icons/ci'
import TraVisor from '../Assets/TraVisor.png'

const Navbar = () => {

  const navbar = {
    backgroundColor: '#1E516E',
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Karla',
    color: '#FFFFFF',
    padding: '1rem',
    fontSize: '1rem',
    alignItems: 'center'
  }

  const navbarOptions = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1',
    gap: '3rem',
    padding: '0.3rem',
  }

  const logoDiv = {
    alignSelf: 'center'
  };

  const PhotoDiv = {
    width: '15%',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex'
  };

  return (
    <div style={navbar}>
      <div style={logoDiv}>
        <img style={{ width: '6rem' }} src={TraVisor} alt=''></img>
      </div>
      <div style={navbarOptions}>
        <p>Home</p>
        <p>Transport</p>
        <p>Hotels</p>
        <p>Restaurants</p>
        <p>Guides</p>
        <p>About Us</p>
      </div>
      <div style={PhotoDiv}>
        <CiSearch style={{ fontSize: '2rem', alignSelf: 'center' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <img src={profilePhoto} style={{ height: '2.5rem' }} alt=''></img>
          <p>Your Profile</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
