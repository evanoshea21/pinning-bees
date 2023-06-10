'use client';
import React from 'react'
import classes from '../styles/nav.module.css'
import Link from 'next/link'

const Nav = () => {

  return (
    <nav className={classes.navbar} >
    <div className={classes.navContent}>

      <h1 className={classes.logo}>
        <Link href='/' className={classes.logoLink} >
          The Pinning Bees
        </Link>
      </h1>
      <div className={classes.linksAndBtn}>
        <ul className={classes.links}>
          <li><a href="#work">Our Results</a></li>
          <li><a href="http://localhost:3000">Why Us</a></li>
          <li><a href="http://localhost:3000">Why Pinterest</a></li>
        </ul>
        <Link href='/contact'>
          <button className={classes.contactBtn} >
          Contact Sales
          </button>
        </Link>
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
      <h1 className={classes.smLogo}>
        <Link href='/' style={{
          textDecoration: 'none',
          color: 'var(--navy)'
        }}>
          The Pinning Bees
        </Link>
        </h1>
        <img className={classes.icon}  src='/icons/hamburger.png' alt='toggle'
        onClick={toggleHeight}
        ></img>
      </div>

      <div className={classes.dropdown}
      style={{height: dropHeight}}
      >
        <div className={classes.cols}>
          <ul className={classes.smLinks}>
            <li><a href="#work">Our Results</a></li>
            <li><a href="http://localhost:3000">Why Us</a></li>
            <li><a href="http://localhost:3000">Why Pinterest</a></li>
          </ul>
          <div className={classes.btnBox}>
            <Link href='/contact'>
              <button className={classes.contactSm}
              onClick={toggleHeight}
              >Contact</button>
            </Link>
          </div>
        </div>
      </div>

    </nav>
  )
}

export {Nav, SmNav}