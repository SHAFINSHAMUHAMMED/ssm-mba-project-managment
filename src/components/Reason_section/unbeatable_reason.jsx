import React from 'react'
import Player from '../VideoPlayer/player'
import ButtonDark from '../Buttons/buttonDark'
import Claim_description from '../Description/claim_description'

import unbeatable1  from "../../assets/svg/unbeatable1-icon.svg"
import unbeatable2  from "../../assets/svg/unbeatable2-icon.svg"
import unbeatable3  from "../../assets/svg/unbeatable3-icon.svg"
import unbeatable4  from "../../assets/svg/unbeatable4-icon.svg"
import unbeatable5  from "../../assets/svg/unbeatable5-icon.svg"



function unbeatable_reason() {
  return (
    <div className='unbeatable-main bg-backgrounds-lightGreenBlue'>
      <h1 className='text-center'><span className='highlight-green'> 5 Unbeatable</span> <span className='highlight-green'>Reasons</span> To Get An MBA In 2023</h1>
      <div className='unbeatable-video-main'>
        <div className='unbeatable-video-player'>
         <Player/>
        </div>
      </div>
      <div className="unbeatable-outer-container">
    <div className="unbeatable-inner-container">
        <div className='unbeatable-inner-flex'>
            <img className='unbetable-inner-icon' src={unbeatable1} alt="" />
            <div className='unbeatable-inner-flex-content'>
                <h4 className=''>Companies Are Hiring More MBAs At Every Level</h4>
                <h6>Companies increasingly hire MBA graduates at all levels. A Statista survey reveals rising numbers: 50% in 2009, 80% in 2020, and peaking at 97% in 2021. This trend continues on job portals and platforms like LinkedIn, where an MBA is essential for new opportunities and challenges.</h6>
            </div>
        </div>
        <div className='unbeatable-inner-flex'>
            <img className='unbetable-inner-icon' src={unbeatable2} alt="" />
            <div className='unbeatable-inner-flex-content'>
                <h4 className=''>Enhanced Employability</h4>
                <h6>An MBA increases your attractiveness to employers due to its proven success path. Through the program, you develop expertise in finance, marketing, strategic thinking, and leadership, making you an ideal candidate for your dream job.</h6>
            </div>
        </div>
        <div className='unbeatable-inner-flex'>
            <img className='unbetable-inner-icon' src={unbeatable3} alt="" />
            <div className='unbeatable-inner-flex-content'>
                <h4 className=''>Career Acceleration</h4>
                <h6>An MBA fosters strategic thinking, enabling you to propel your career by charting your organization's path from A to B, and beyond. It equips you with crucial soft and hard skills to plan, paving the way for both your career and organizational growth.</h6>
            </div>
        </div>
        <div className='unbeatable-inner-flex'>
            <img className='unbetable-inner-icon' src={unbeatable4} alt="" />
            <div className='unbeatable-inner-flex-content'>
                <h4 className=''>Higher Earning Potential</h4>
                <h6>An MBA equals more money. As your career climbs, so does your income, including bonuses. Stats show that MBA grads earn 77% more than non-MBA peers. It's the path to financial growth.</h6>
            </div>
        </div>
        <div className='unbeatable-inner-flex'>
            <img className='unbetable-inner-icon' src={unbeatable5} alt="" />
            <div className='unbeatable-inner-flex-content'>
                <h4 className=''>Personal & Leadership Growth</h4>
                <h6>An MBA transforms you into a leader. Swiss School of Management's motto is to create leaders. It's about more than leadership skills; it's personal and interpersonal growth. You'll learn active listening, being there for others, and the challenges of leadership, growing as a person, specialist, and professional.</h6>
            </div>
        </div>
       <ButtonDark duration={2500} containerStyle={{ justifyContent: 'center' }}/>
       <Claim_description color='rgba(11, 67, 75, 0.79)'/>
    </div>
</div>

    </div>
  )
}

export default unbeatable_reason
