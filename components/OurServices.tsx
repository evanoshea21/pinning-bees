// import React from 'react'
import classes from '../styles/Services.module.css'

const OurServices = () => {

  return (
    <div className={classes.main}>
      <div className={classes.left}>
        <div className={classes.leftContent}>
          <div className={classes.col1}>
            <div className={classes.card1}>
              <img src='/icons/evergreen.png' alt='icon'></img>
              <h3>Copywriting</h3>
              <p>We offer fully-optimized copywriting so every pin is search-engine optimized for pinterest's algorithm.</p>
            </div>
            <div className={classes.card2}>
              <img src='/icons/evergreen2.png' alt='icon'></img>
              <h3>Creatives</h3>
              <p>We develop every pin from scratch to match you brand image and to boost conversions via originality.</p>
            </div>
          </div>
          <div className={classes.col2}>
            <div className={classes.card3}>
              <img src='/icons/evergreen3.png' alt='icon'></img>
              <h3>Ad Monitoring</h3>
              <p>We meticulously track the performance of your pins to strategically update them to improve conversions .</p>
            </div>
            <div className={classes.card4}>
              <img src='/icons/cost.png' alt='icon'></img>
              <h3>Customer Input</h3>
              <p>We will keep you up to date on the perform- ance of your pins.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.rightContent}>
          <div className={classes.spacer}>Services</div>
          <h2>We offer Full-Account Management & Pinterest Ads</h2>
          <p>We deliver refined Pinterest Marketing with data-driven results. We offer brand-centric content and ad campaign monitoring.</p>
        </div>
      </div>


    </div>
  )
}

export default OurServices