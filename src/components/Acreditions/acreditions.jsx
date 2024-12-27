import React from 'react'
import ButtonDark from '../Buttons/buttonDark';
import Marquee from 'react-fast-marquee';
import Claim_description from '../Description/claim_description';

import iao1 from "../../assets/svg/Accredit-iao-1-icon.svg"
import iao from "../../assets/svg/Accredit-iao-icon.svg"
import eduqua from "../../assets/svg/Accredit-eduqua-icon.svg"
import usrLazio from "../../assets/svg/Accredit-usr-lazio-icon.svg"
import businet from "../../assets/svg/Accredit-businet-icon.svg"
import Deac from "../../assets/svg/deac.svg"
import xila from "../../assets/svg/Accredit-xila-icon.svg"
import indian from "../../assets/svg/Accredit-indian-icon.svg"
import wes from "../../assets/svg/wes-icon.svg"
import iacbe from "../../assets/svg/Accredit-iacbe-icon.svg"



function acreditions() {
  return (
    <div class="accredit-main">
    <div className="accredit-overlay"></div>
  <div class="accredit-content w-screen z-10">
    <h1 class="accredit-h1 text-center">Globally <span className='wavy-underline-green'>Recognised</span> & <span className='wavy-underline-green'>Accredited</span> By</h1>
    <div className=' acredits-marquee-1'>
    <Marquee speed={200}>
    <div class="accredit-cards">
      <div class="accredit-card">
        <img src={iao1} alt="" />
      </div>
      <div class="accredit-card">
        <img src={iao} alt="" />
      </div>
      <div class="accredit-card">
        <img src={eduqua} alt="" />
      </div>
      <div class="accredit-card">
        <img src={usrLazio} alt="" />
      </div>
      <div class="accredit-card">
        <img src={businet} alt="" />
      </div>
     
      <div class="accredit-card">
        <img src={Deac} alt="" />
      </div>
      <div class="accredit-card">
        <img src={wes} alt="" />
      </div>
      <div class="accredit-card">
        <img src={xila} alt="" />
      </div>
      <div class="accredit-card">
        <img src={indian} alt="" />
      </div>
      <div class="accredit-card">
        <img src={iacbe} alt="" />
      </div>
    </div>
    </Marquee>
    </div>

    {/* //only for mobile screens */}
    <div className=' acredits-marquee-2 block  pb-5 pt-5'>
    <Marquee>
    <div class="accredit-cards">
      <div class="accredit-card">
        <img className='accredit-card-img' src={iao1} alt="" />
      </div>
      <div class="accredit-card">
        <img className='accredit-card-img' src={iao} alt="" />
      </div>
      <div class="accredit-card">
        <img className='accredit-card-img' src={eduqua} alt="" />
      </div>
      <div class="accredit-card">
        <img className='accredit-card-img' src={usrLazio} alt="" />
      </div>
      <div class="accredit-card">
        <img className='accredit-card-img' src={indian} alt="" />
      </div>
      <div class="accredit-card">
        <img className='accredit-card-img' src={businet} alt="" />
      </div>
    </div>
    </Marquee>
    <Marquee direction='right'>
    <div class="accredit-cards">
    <div class="accredit-card">
        <img className='accredit-card-img' src={wes} alt="" />
      </div>
      <div class="accredit-card">
        <img className='accredit-card-img' src={usrLazio} alt="" />
      </div>
      <div class="accredit-card">
        <img className='accredit-card-img' src={Deac} alt="" />
      </div>
      <div class="accredit-card">
        <img className='accredit-card-img' src={xila} alt="" />
      </div>
      <div class="accredit-card">
        <img className='accredit-card-img' src={businet} alt="" />
      </div>
      <div class="accredit-card">
        <img className='accredit-card-img' src={iacbe} alt="" />
      </div>
    </div>
    </Marquee>
    </div>
    <ButtonDark duration={2500} containerStyle={{ justifyContent: 'center' }}/>
    <Claim_description color='rgba(11, 67, 75, 0.79)'/>
  </div>
  {/* </div> */}
</div>
  )
}

export default acreditions
