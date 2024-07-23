import React from 'react'
import profilePhoto from '../../Assets/profilePhoto.png'
import { CiSearch } from 'react-icons/ci'
import TraVisor from '../../Assets/TraVisor.png'
import { Link } from 'react-router-dom'

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
    <div className="b" style={navbar}>
      <div style={logoDiv}>
        <img style={{ width: '6rem' }} src={TraVisor} alt=''></img>
      </div>
      <div style={navbarOptions}>
        <Link><p>Home</p> </Link>
        <Link to='/Flights' ><p>Flights</p></Link>
        <Link to='/Hotels'><p>Hotels</p></Link>
        <Link to='/Restaurants'> <p>Restaurants</p></Link>
        <Link to='/Guides'><p>Guides</p></Link>
        <Link> <p>About Us</p></Link>
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
