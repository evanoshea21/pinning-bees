// import React from 'react'
import classes from '../styles/Hero.module.css'

const Hero = () => {



  return (
    <div className={classes.main}>
      <div className={classes.left}>
        <h1>Evergreen, Organic Traffic on <span>Pinterest</span></h1>
        <p>We get your pins ranked highly so you can focus on your business.</p>
      </div>
      <div className={classes.right}>
        <img className={classes.img}  src='/heroImage.svg' alt='Pinterest Marketing'></img>
      </div>
    </div>
  )
}

export default Hero