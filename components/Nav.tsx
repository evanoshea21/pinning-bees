'use client';
import React from 'react'
import classes from '../styles/nav.module.css'

const Nav = () => {

  return (
    <nav className={classes.navbar} >
    <div className={classes.navContent}>

      <h1 className={classes.logo}>The Pinning Bees</h1>
      <div className={classes.linksAndBtn}>
        <ul className={classes.links}>
          <li><a href="http://localhost:3000">Our Results</a></li>
          <li><a href="http://localhost:3000">Why Us</a></li>
          <li><a href="http://localhost:3000">Why Pinterest</a></li>
        </ul>
        <button className={classes.contactBtn} >Contact Sales</button>
        <div className={classes.btnBox}>
          <button className={classes.contactSm} >Contact</button>
        </div>
      </div>

    </div>
    </nav>
  )
}

const SmNav = () => {
  const [dropHeight, setDropHeight] = React.useState('0px');

  function toggleHeight() {
    if(dropHeight === '0px') setDropHeight('180px')
    if(dropHeight === '180px') setDropHeight('0px')
  }

  return (
    <nav className={classes.smNavbar} >
      <div className={classes.smNavContent}>
        <h1 className={classes.smLogo}>The Pinning Bees</h1>
        <img className={classes.icon}  src='/icons/arrow-ur.png' alt='arrow'
        onClick={toggleHeight}
        ></img>
      </div>

      <div className={classes.dropdown}
      style={{height: dropHeight}}
      >
        <div className={classes.cols}>
          <ul className={classes.smLinks}>
            <li><a href="http://localhost:3000">Our Results</a></li>
            <li><a href="http://localhost:3000">Why Us</a></li>
            <li><a href="http://localhost:3000">Why Pinterest</a></li>
          </ul>
          <div className={classes.btnBox}>
            <button className={classes.contactSm} >Contact</button>
          </div>
        </div>
      </div>

    </nav>
  )
}

export {Nav, SmNav}