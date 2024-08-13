import React from 'react'
import { Button } from '@mui/material';
import ExploreParis from '../../../Assets/ExploreParis.png'
import ExploreTurkey from '../../../Assets/ExploreTurkey.png'
import ExploreGreece from '../../../Assets/ExploreGreece.png'
import ExploreJapan from '../../../Assets/ExploreJapan.png'
import ExploreAmsterdam from '../../../Assets/ExploreAmsterdam.png'
import ExploreNY from '../../../Assets/ExploreNY.png'
import ExploreSydney from '../../../Assets/ExploreSydney.png'
import ExploreDubai from '../../../Assets/ExploreDubai.png'
import ExploreKorea from '../../../Assets/ExploreKorea.png'
import ExploreCanada from '../../../Assets/ExploreCanada.png'
import ExploreMaldives from '../../../Assets/ExploreMaldives.png'
import ExploreLondon from '../../../Assets/ExploreLondon.png'
import ParisGuide from '../../../Assets/ParisGuide.png'
import DubaiGuide from '../../../Assets/DubaiGuide.png'
import LondonGuide from '../../../Assets/LondonGuide.png'

import { FaArrowRightLong } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";


const TopGuides = () => {
  const mainStyles = {
    fontFamily: 'Montserrat',
    backgroundColor: '#FAFBFC'
  };

  const GuidesRow = { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '2%' };
  const infoDiv = { display: 'flex', flexDirection: 'column', textAlign: 'left' };
  const city = { fontFamily: 'Open Sans', paddingTop: '2%', fontWeight: 'bold', fontSize: '1.3rem' };
  const guideDesc = { fontFamily: 'Open Sans', paddingTop: '2%', fontSize: '0.8rem' };
  const guideInfo = { display: 'flex', flexDirection: 'row', gap: '0.4rem', alignItems: 'center', paddingTop: '2%' };
  const icons = { fontSize: '0.9rem' };
  return (
    <div style={mainStyles}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2%', paddingBottom: '4%' }}>
        <div style={{ textAlign: 'left' }}>
          <p style={{ color: '#051721', fontWeight: 'bolder', fontSize: '1.5rem' }}>Top Guides</p>
        </div>
        <div>
          <Button style={{ textTransform: 'none', color: '#276968', borderColor: '#276968' }} variant="outlined">See All</Button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>

        <div style={GuidesRow}>
          <div style={infoDiv}>
            <div>
              <img src={ExploreParis} alt=''>
              </img>
            </div>
            <p style={city}>Explore Paris</p>
            <p style={guideDesc}>Born and raised in Paris</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div style={guideInfo}>
                <img src={ParisGuide} alt=''>
                </img>
                <p style={{ color: '#FA8B02' }}>Lucy A</p>
                <FaArrowRightLong style={{ color: '#FA8B02' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CiHeart style={icons} />
                <p style={icons}>100</p>
                <CiUser style={icons} />
                <p style={icons}>6452</p>
              </div>
            </div>
          </div>

          <div style={infoDiv}>
            <div>
              <img src={ExploreDubai} alt=''>
              </img>
            </div>
            <p style={city}>Explore Dubai</p>
            <p style={guideDesc}>I made travel vlogs on yout...</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div style={guideInfo}>
                <img src={DubaiGuide} alt=''>
                </img>
                <p style={{ color: '#FA8B02' }}>Larah M</p>
                <FaArrowRightLong style={{ color: '#FA8B02' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CiHeart style={icons} />
                <p style={icons}>100</p>
                <CiUser style={icons} />
                <p style={icons}>6452</p>
              </div>
            </div>
          </div>


          <div style={infoDiv}>
            <div>
              <img src={ExploreGreece} alt=''>
              </img>
            </div>
            <p style={city}>Explore Greece</p>
            <p style={guideDesc}>Enjoy the best days in</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div style={guideInfo}>
                <img src={ParisGuide} alt=''>
                </img>
                <p style={{ color: '#FA8B02' }}>Liana</p>
                <FaArrowRightLong style={{ color: '#FA8B02' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CiHeart style={icons} />
                <p style={icons}>100</p>
                <CiUser style={icons} />
                <p style={icons}>6452</p>
              </div>
            </div>
          </div>


          <div style={infoDiv}>
            <div>
              <img src={ExploreLondon} alt=''>
              </img>
            </div>
            <p style={city}>Explore London</p>
            <p style={guideDesc}>Born and raised here</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div style={guideInfo}>
                <img src={LondonGuide} alt=''>
                </img>
                <p style={{ color: '#FA8B02' }}>Kate</p>
                <FaArrowRightLong style={{ color: '#FA8B02' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CiHeart style={icons} />
                <p style={icons}>100</p>
                <CiUser style={icons} />
                <p style={icons}>6452</p>
              </div>
            </div>
          </div>
        </div>


        <div style={GuidesRow}>
          <div style={infoDiv}>
            <div>
              <img src={ExploreKorea} alt=''>
              </img>
            </div>
            <p style={city}>Explore Korea</p>
            <p style={guideDesc}>Born and raised in Paris</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div style={guideInfo}>
                <img src={ParisGuide} alt=''>
                </img>
                <p style={{ color: '#FA8B02' }}>Lucy A</p>
                <FaArrowRightLong style={{ color: '#FA8B02' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CiHeart style={icons} />
                <p style={icons}>100</p>
                <CiUser style={icons} />
                <p style={icons}>6452</p>
              </div>
            </div>
          </div>

          <div style={infoDiv}>
            <div>
              <img src={ExploreCanada} alt=''>
              </img>
            </div>
            <p style={city}>Explore Canada</p>
            <p style={guideDesc}>I made travel vlogs on yout...</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div style={guideInfo}>
                <img src={DubaiGuide} alt=''>
                </img>
                <p style={{ color: '#FA8B02' }}>Larah M</p>
                <FaArrowRightLong style={{ color: '#FA8B02' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CiHeart style={icons} />
                <p style={icons}>100</p>
                <CiUser style={icons} />
                <p style={icons}>6452</p>
              </div>
            </div>
          </div>


          <div style={infoDiv}>
            <div>
              <img src={ExploreNY} alt=''>
              </img>
            </div>
            <p style={city}>Explore New York</p>
            <p style={guideDesc}>Enjoy the best days in</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div style={guideInfo}>
                <img src={ParisGuide} alt=''>
                </img>
                <p style={{ color: '#FA8B02' }}>Liana</p>
                <FaArrowRightLong style={{ color: '#FA8B02' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CiHeart style={icons} />
                <p style={icons}>100</p>
                <CiUser style={icons} />
                <p style={icons}>6452</p>
              </div>
            </div>
          </div>


          <div style={infoDiv}>
            <div>
              <img src={ExploreSydney} alt=''>
              </img>
            </div>
            <p style={city}>Explore Sydney</p>
            <p style={guideDesc}>Born and raised here</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div style={guideInfo}>
                <img src={LondonGuide} alt=''>
                </img>
                <p style={{ color: '#FA8B02' }}>Kate</p>
                <FaArrowRightLong style={{ color: '#FA8B02' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CiHeart style={icons} />
                <p style={icons}>100</p>
                <CiUser style={icons} />
                <p style={icons}>6452</p>
              </div>
            </div>
          </div>
        </div>



        <div style={GuidesRow}>
          <div style={infoDiv}>
            <div>
              <img src={ExploreMaldives} alt=''>
              </img>
            </div>
            <p style={city}>Explore Maldives</p>
            <p style={guideDesc}>Born and raised in Paris</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div style={guideInfo}>
                <img src={ParisGuide} alt=''>
                </img>
                <p style={{ color: '#FA8B02' }}>Lucy A</p>
                <FaArrowRightLong style={{ color: '#FA8B02' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CiHeart style={icons} />
                <p style={icons}>100</p>
                <CiUser style={icons} />
                <p style={icons}>6452</p>
              </div>
            </div>
          </div>

          <div style={infoDiv}>
            <div>
              <img src={ExploreTurkey} alt=''>
              </img>
            </div>
            <p style={city}>Explore Turkey</p>
            <p style={guideDesc}>I made travel vlogs on yout...</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div style={guideInfo}>
                <img src={DubaiGuide} alt=''>
                </img>
                <p style={{ color: '#FA8B02' }}>Larah M</p>
                <FaArrowRightLong style={{ color: '#FA8B02' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CiHeart style={icons} />
                <p style={icons}>100</p>
                <CiUser style={icons} />
                <p style={icons}>6452</p>
              </div>
            </div>
          </div>


          <div style={infoDiv}>
            <div>
              <img src={ExploreJapan} alt=''>
              </img>
            </div>
            <p style={city}>Explore Japan</p>
            <p style={guideDesc}>Enjoy the best days in</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div style={guideInfo}>
                <img src={ParisGuide} alt=''>
                </img>
                <p style={{ color: '#FA8B02' }}>Liana</p>
                <FaArrowRightLong style={{ color: '#FA8B02' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CiHeart style={icons} />
                <p style={icons}>100</p>
                <CiUser style={icons} />
                <p style={icons}>6452</p>
              </div>
            </div>
          </div>


          <div style={infoDiv}>
            <div>
              <img src={ExploreAmsterdam} alt=''>
              </img>
            </div>
            <p style={city}>Explore Amsterdam</p>
            <p style={guideDesc}>Born and raised here</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div style={guideInfo}>
                <img src={LondonGuide} alt=''>
                </img>
                <p style={{ color: '#FA8B02' }}>Kate</p>
                <FaArrowRightLong style={{ color: '#FA8B02' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CiHeart style={icons} />
                <p style={icons}>100</p>
                <CiUser style={icons} />
                <p style={icons}>6452</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default TopGuides
