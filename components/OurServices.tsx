// import React from 'react'
import classes from '../styles/Services.module.css'

const OurServices = () => {

  return (
    <div className={classes.main}>
      <div className={classes.left}>
        <div className={classes.leftContent}>
          <div className={classes.col1}>
            <div className={classes.card1}>
              <img src='/icons/cost.png' alt='icon'></img>
              <h3>Full-account Management</h3>
              <p>We provide A-to-Z Pinterest marketing services, so you can focus on growing your business.</p>
            </div>
            <div className={classes.card2}>
              <img src='/icons/evergreen2.png' alt='icon'></img>
              <h3>Viral Images</h3>
              <p>We create optimized images from scratch & scroll-stopping videos that separate you from the crowd. </p>
            </div>
          </div>
          <div className={classes.col2}>
            <div className={classes.card3}>
              <img src='/icons/evergreen.png' alt='icon'></img>
              <h3>Copywriting</h3>
              <p>We write compelling SEO content that is designed to convert, gaining traction for our client's brands.</p>
            </div>
            <div className={classes.card4}>
              <img src='/icons/evergreen3.png' alt='icon'></img>
              <h3>Ad Monitoring</h3>
              <p>We meticulously track the performance of your pins to strategically update them to improve conversions.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.rightContent}>
          <div className={classes.spacer}>Services</div>
          <h2 className={classes.header} >We offer Full-Account Management & Pinterest Ads</h2>
          <p className={classes.subheader} >We deliver refined Pinterest Marketing with data-driven results. We offer brand-centric content and ad campaign monitoring.</p>
        </div>
      </div>


    </div>
  )
}

export default OurServices