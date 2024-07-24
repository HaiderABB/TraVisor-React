import React from 'react'
import profilePhoto from '../../Assets/profilePhoto.png'
import TraVisor from '../../Assets/TraVisor.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <div className="bg-primary flex flex-row font-karla text-white p-4 items-center justify-between">
      <div >
        <img className=' w-24' src={TraVisor} alt=''></img>
      </div>
      <div className=' flex items-center justify-between gap-12 xl:gap-8 '>
        <Link><p>Home</p> </Link>
        <Link to='/Flights' ><p className=' hover:opa'>Flights</p></Link>
        <Link to='/Hotels'><p>Hotels</p></Link>
        <Link to='/Restaurants'> <p>Restaurants</p></Link>
        <Link to='/Guides'><p>Guides</p></Link>
        <Link> <p>About Us</p></Link>
      </div>
      <div className=' gap-9 items-center flex '>
        <div className='flex items-center gap-2'>
          <img src={profilePhoto} className=' h-10' alt=''></img>
          <p>Your Profile</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
