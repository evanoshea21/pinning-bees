// import React from 'react'
import classes from '../styles/WhyPinterest.module.css'

const WhyPinterest = () => {

  return (
    <div className={classes.main}>
      <h1>Why Choose Pinterest</h1>
      <p>Why you should choose pinterest instead of other major social media platform</p>

      <div className={classes.boxes}>
        <div className={classes.box1}>
          <img src='/icon.jpeg' alt='icon'></img>
          <h3>Shopping Intent</h3>
          <p>Your audience on pinterest are primed to buy due to the nature of the platform.
          <br/><br/>
          People go to pinterest to find inspration!
          <br/><br/>
          Furthermore, the demographic of pinterst's audience are more afluent.
          </p>
        </div>
        <div className={classes.box2}>
          <img src='/icon.jpeg' alt='icon'></img>
          <h3>Long Shelf Life</h3>
          <p>Unlike other platforms where your content is buried under a constantly updating feed, pinterest's pins rank organically.
          <br/><br/>
          Say goodbye to short-lived pins and get ready for high ROI pins that are evergreen, bringing traffic to your brands forever.
          </p>
        </div>
        <div className={classes.box3}>
          <img src='/icon.jpeg' alt='icon'></img>
          <h3>Cost Effect</h3>
          <p>Due to the lower demand of Pinterest Marketing, Cost-per-click is 40% less than comparable platforms.
          <br/><br/>
          This means you'll be getting your brand in front of more eyes, for less.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyPinterest