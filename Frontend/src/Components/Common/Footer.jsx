import React from 'react'
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import TraVisor from '../../Assets/TraVisor.png'

const Footer = () => {

  return (
    <div className=' flex flex-row bg-primary p-[4%] justify-between font-montserratAlternates font-semibold'>
      <div className=' flex flex-col self-center w-1/4'>
        <div className=' self-center'  >
          <img className=' w-full' src={TraVisor} alt=''></img>
        </div>
        <div className=' flex self-center gap-4 pt-[6%] text-white'>
          <MdFacebook />
          <FaTwitter />
          <FaYoutube />
          <LuInstagram />
        </div>
      </div>

      <div className=' flex text-white text-left justify-between w-[65%]'>

        <div>
          <p className='font-semibold text-lg'>Links</p>
          <div className='font-medium text-sm'><p>Flights</p>
            <p>Stays</p>
            <p>Discover</p>
            <p>About Us</p>
            <p>Contact</p></div>
        </div>

        <div>
          <p className=' font-semibold text-lg'>Our Activities</p>
          <div className='font-medium text-sm'>
            <p>Tour</p>
            <p>Explore</p>
            <p>Guides</p>
          </div>
        </div>

        <div>
          <p className=' font-semibold text-lg'>About Us</p>
          <div className='font-medium text-sm'>
            <p>Our Story</p>
          </div>
        </div>

        <div>
          <p className=' font-semibold text-lg'>Contact</p>
          <div className='font-medium text-sm'><p>Flights</p>
            <p>Address: FAST NUCES</p>
            <p>Lahore, Pakistan</p>
            <p>Phone: 033883973</p>
            <p>Email: travisor@gmail.com</p>
            <p>Maps: Fast Nuces, Lahore</p>
          </div>
        </div>

      </div>




    </div>
  )
}

export default Footer
