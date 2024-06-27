import React from 'react'
import profilePhoto from '../Assets/profilePhoto.png'
import { CiSearch } from 'react-icons/ci'
import TraVisor from '../Assets/TraVisor.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-div'>
        <img style={{ width: '6rem' }} src={TraVisor} alt=''></img>
      </div>
      <div className='navbar-options'>
        <p>Home</p>
        <p>Transport</p>
        <p>Hotels</p>
        <p>Restaurants</p>
        <p>Guides</p>
        <p>About Us</p>
      </div>
      <div className='profile-Photo-Div'>
        {/* <img src={SearchLogo} style={{ height: '2rem', alignSelf: 'center' }} alt=''></img> */}
        <CiSearch style={{ fontSize: '2rem', alignSelf: 'center' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><img src={profilePhoto} style={{ height: '2.5rem' }} alt=''>
        </img>
          <p>Your Profile</p>
        </div>
      </div>
    </div>
  )
}
export default Navbar
