import React from 'react'
import profilePhoto from '../../Assets/profilePhoto.png'
import TraVisor from '../../Assets/TraVisor.png'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {

  const location = useLocation();
  const hideNavbarPaths = ['/', '/SignUp', '/ForgotPassword', '/CheckEmail', '/ResetPassword', '/SetNewPassword'];

  // Determine if the navbar should be hidden
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  if (shouldHideNavbar) {
    return null; // Don't render the navbar
  }

  return (
    <div className="bg-primary w-full z-10 flex fixed flex-row font-karla text-white p-4 items-center justify-between">
      <div >
        <img className=' w-24 hover:w-30 hover:cursor-pointer' src={TraVisor} alt=''></img>
      </div>
      <div className=' flex items-center justify-between gap-12 xl:gap-8 '>
        <Link><p className=' hover:underline'>Home</p> </Link>
        <Link to='/Flights' ><p className=' hover:underline'>Flights</p></Link>
        <Link to='/Hotels'><p className=' hover:underline'>Hotels</p></Link>
        <Link to='/Restaurants'> <p className=' hover:underline'>Restaurants</p></Link>
        <Link to='/Guides'><p className=' hover:underline'>Guides</p></Link>
        <Link> <p className=' hover:underline'>About Us</p></Link>
      </div>
      <div className=' gap-9 items-center flex '>
        <div className='flex items-center gap-2'>
          <img src={profilePhoto} className=' h-10' alt=''></img>
          <p className=' hover:underline'>Your Profile</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
