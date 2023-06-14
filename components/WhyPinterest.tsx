// import React from 'react'
import classes from '../styles/WhyPinterest.module.css'

const WhyPinterest = () => {

  return (
    <div className={classes.main}>
      <h1 className={classes.header} >Why Choose Pinterest to<br/>Market your Brand</h1>
      <p className={classes.subheader} >Pinterest is the most sophisticated visual discovery engine in the world, and is the largest free traffic-driving tool for interactive marketing.</p>

      <div className={classes.cards}>

        <div className={classes.card1}>
        <div className={classes.imgBox}>
          <img src='/icons/shopping.png' alt='icon'></img>
        </div>
        <div className={classes.cardContent}>
          <h3>Shopping Intent</h3>
          <p>
          Pinterst has <span>5x more shopping intent than any other social media platform.</span>
          <br/>
          <br/>
          Unlike Instagram and Facebook, the nature of Pinterest is future-focused, with 97% of users seeking inspiration from <span>non-branded products.</span>
          </p>
        </div>
        </div>

        <div className={classes.card2}>
          <div className={classes.imgBox}>
            <img src='/icons/evergreen.png' alt='icon'></img>
          </div>
          <div className={classes.cardContent}>
            <h3>Long Shelf Life</h3>
            <p>Unlike other platforms where your content is buried under a constantly updating feed, Pinterest pins rank organically.
            <br/><br/>
            <span>Say goodbye to short-lived ads and get ready for high-ROI pins that are evergreen</span>, bringing traffic to your brands for months, even years later.
            </p>
          </div>
        </div>
        <div className={classes.card3}>
        <div className={classes.imgBox}>
          <img src='/icons/cost.png' alt='icon'></img>
        </div>
        <div className={classes.cardContent}>
          <h3>Cost Effective</h3>
          <p>Due to the lower competition of Pinterest Marketing, Cost-per-click (CPC) is 40% less than comparable platforms.
          <br/><br/>
          Leverage Pinterest Ads to <span>reach a larger audience, with a 2.3x lower cost-per-conversion</span> rate compared to other platforms.

          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default WhyPinterest