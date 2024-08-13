import React from 'react'
import Istanbul from '../../../Assets/Istanbul.png'
import Sydney from '../../../Assets/Sydney.png'
import Maldives from '../../../Assets/Maldives.png'
import Baku from '../../../Assets/Baku.png'


const RecentSearches = () => {
  const mainStyles = {
    fontFamily: 'Montserrat',
    backgroundColor: '#FAFBFC'
  };

  const imgStyles = {
    width: '65%',
  };

  const descDiv = { display: 'flex', flexDirection: 'column', alignSelf: 'center' };
  const mainDiv = {
    display: 'flex', width: '100%', padding: '2%', justifyContent: 'space-between'
  };
  const name = { color: '#112211', textAlign: 'left', fontWeight: '550' };
  const places = { color: '#112211', textAlign: 'left' };
  return (
    <div style={mainStyles}>
      <div style={{ textAlign: 'left', paddingLeft: '2.5rem', paddingTop: '1rem' }}>
        <p style={{ fontWeight: 'bold', color: '#000000', fontSize: '1.3rem' }}>Your Recent Searches</p>
      </div>
      <div style={mainDiv}>
        <div style={{ display: 'flex' }}>
          <div>
            <img style={imgStyles} src={Istanbul} alt=''></img>
          </div>
          <div style={descDiv}>
            <p style={name}>Istanbul, Turkey</p>
            <p style={places}>325 places</p>
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div>
            <img style={imgStyles} src={Sydney} alt=''></img>
          </div>
          <div style={descDiv}>
            <p style={name}>Sydney, Australia</p>
            <p style={places}>325 places</p>
          </div>
        </div>


        <div style={{ display: 'flex' }}>
          <div>
            <img style={imgStyles} src={Baku} alt=''></img>
          </div>
          <div style={descDiv}>
            <p style={name}>Baku, Azerbaijan</p>
            <p style={places}>325 places</p>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div>
            <img style={imgStyles} src={Maldives} alt=''></img>
          </div>
          <div style={descDiv}>
            <p style={name}>Male, Maldives</p>
            <p style={places}>325 places</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default RecentSearches
