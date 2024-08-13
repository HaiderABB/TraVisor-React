import React from 'react'
import LeceisterSquareKitchen from '../../../Assets/LeceisterSquareKitchen.jpg'
import KodLondon from '../../../Assets/KöDLondon.jpg'
import OrmerMayfair from '../../../Assets/OrmerMayfair.jpg'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Suggested = () => {
  const hotelCost = { backgroundColor: '#380C72', color: '#FFFFFF', width: '20%', textAlign: 'center', height: '2.5rem' };

  const hotelDetails = { display: 'flex', paddingTop: '2%', placeContent: 'space-between' };

  const hotelName = { fontFamily: 'Sora', fontWeight: '500' };

  const hotelRating = { display: 'flex', gap: '0.2rem', alignItems: 'center' };

  const hotelLocationDiv = { display: 'flex', alignItems: 'center', gap: '2%', paddingTop: '2%' };

  const hotelLocation = { fontFamily: 'Nunito', fontSize: '0.8rem', color: '#646464' };

  const mainDiv = { display: 'flex', gap: '1%', padding: '2%' };

  return (
    <div style={{ backgroundColor: '#FAFBFC' }}>
      <div style={{ textAlign: 'left', padding: '2%', paddingBottom: '0' }}>
        <p style={{ color: '#051721', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Montserrat Alternates' }}>Suggested for you
        </p>
      </div>
      <p style={{ textAlign: 'left', paddingTop: '1%', paddingLeft: '2%', color: '#051721', fontWeight: 'bold', fontSize: '1rem', fontFamily: 'Sora' }}>Fine Dining
      </p>

      <div style={mainDiv}>

        <div style={{ width: '25%', display: 'flex', flexDirection: 'column' }}>
          <div style={{
            backgroundImage: `url(${LeceisterSquareKitchen})`, backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: '0.5rem', width: '100%', textAlign: 'left',
            padding: '3%', display: 'flex', justifyContent: 'space-between', paddingBottom: '40%'
          }}>
            <div style={hotelCost}>
              <p style={{ fontFamily: 'Sora' }} >
                $ <span style={{ fontSize: '1.5rem' }}>270</span></p>
            </div>
            <CiHeart style={{ fontSize: '2rem' }} />
          </div>
          <div style={hotelDetails}>
            <p style={hotelName}>Leceister Square Kitchen</p>
            <div style={hotelRating}>
              <FaStar style={{ color: '#FF6700' }} /><p>4.9</p>
            </div>
          </div>
          <div style={hotelLocationDiv}>
            <CiLocationOn />
            <p style={hotelLocation}>31-36 Leicester Square, England</p>
          </div>
        </div>

        <div style={{ width: '25%', display: 'flex', flexDirection: 'column' }}>
          <div style={{
            backgroundImage: `url(${KodLondon})`, backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: '0.5rem', width: '100%', textAlign: 'left',
            padding: '3%', display: 'flex', justifyContent: 'space-between', paddingBottom: '40%'
          }}>
            <div style={hotelCost}>
              <p style={{ fontFamily: 'Sora' }} >
                $ <span style={{ fontSize: '1.5rem' }}>290</span></p>
            </div>
            <CiHeart style={{ fontSize: '2rem' }} />
          </div>
          <div style={hotelDetails}>
            <p style={hotelName}>Kod London</p>
            <div style={hotelRating}>
              <FaStar style={{ color: '#FF6700' }} /><p>4.9</p>
            </div>
          </div>
          <div style={hotelLocationDiv}>
            <CiLocationOn />
            <p style={hotelLocation}>9A Devonshire Square, England</p>
          </div>
        </div>


        <div style={{ width: '25%', display: 'flex', flexDirection: 'column' }}>
          <div style={{
            backgroundImage: `url(${OrmerMayfair})`, backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: '0.5rem', width: '100%', textAlign: 'left',
            padding: '3%', display: 'flex', justifyContent: 'space-between', paddingBottom: '40%'
          }}>
            <div style={hotelCost}>
              <p style={{ fontFamily: 'Sora' }} >
                $ <span style={{ fontSize: '1.5rem' }}>240</span></p>
            </div>
            <CiHeart style={{ fontSize: '2rem' }} />
          </div>
          <div style={hotelDetails}>
            <p style={hotelName}>Ormer Mayfair</p>
            <div style={hotelRating}>
              <FaStar style={{ color: '#FF6700' }} /><p>4.9</p>
            </div>
          </div>
          <div style={hotelLocationDiv}>
            <CiLocationOn />
            <p style={hotelLocation}>7-12 Half Moon Street Flemings, England</p>
          </div>
        </div>


        <div style={{ width: '25%', display: 'flex', flexDirection: 'column' }}>
          <div style={{
            backgroundImage: `url(${LeceisterSquareKitchen})`, backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: '0.5rem', width: '100%', textAlign: 'left',
            padding: '3%', display: 'flex', justifyContent: 'space-between', paddingBottom: '40%'
          }}>
            <div style={hotelCost}>
              <p style={{ fontFamily: 'Sora' }} >
                $ <span style={{ fontSize: '1.5rem' }}>270</span></p>
            </div>
            <CiHeart style={{ fontSize: '2rem' }} />
          </div>
          <div style={hotelDetails}>
            <p style={hotelName}>PPA Denver Opens at Gates</p>
            <div style={hotelRating}>
              <FaStar style={{ color: '#FF6700' }} /><p>4.9</p>
            </div>
          </div>
          <div style={hotelLocationDiv}>
            <CiLocationOn />
            <p style={hotelLocation}>Gates Tennis Center, Denver, CO</p>
          </div>
        </div>




      </div>
    </div >
  )
}

export default Suggested
