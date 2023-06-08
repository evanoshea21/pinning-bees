'use client';
import React from 'react'
import classes from '../styles/Stats.module.css'


const Stats = () => {

  return (
    <div className={classes.main}>
      <div className={classes.num1}>
        <h3>300+</h3>
        <p>Happy Customers</p>
      </div>
      <div className={classes.num2}>
        <h3>1.26mil</h3>
        <p>Pins Created</p>
      </div>
      <div className={classes.num3}>
        <h3>7+</h3>
        <p>Years Experience</p>
      </div>
      <div className={classes.num4}>
        <h3>6mil</h3>
        <p>Lifetime Impressions</p>
      </div>
    </div>
  )
}

export default Stats