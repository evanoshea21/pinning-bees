'use client';
import React from 'react'
import classes from '../styles/nav.module.css'
import Link from 'next/link'
import $ from 'jquery'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const pathname = usePathname();

  React.useEffect(() => {
    console.log('pathname: ', pathname);
  }, [pathname]);

  const scrollToWhyUs = () => {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#WhyUs").offset()!.top - 120
  }, 600, 'swing');
  };
  const scrollToCaseStudies = () => {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#CaseStudies").offset()!.top - 90
  }, 600, 'swing');
  };

  if(pathname === '/contact') {
    return (
    <nav className={classes.navbar} >
      <div className={classes.navContent}>
      <h1 className={classes.logo}>
        <Link href='/' className={classes.logoLink} >
          The Pinning Bees
        </Link>
      </h1>
      </div>
    </nav>
    )
  }

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
          <li onClick={scrollToCaseStudies} >Our Work</li>
          <li onClick={scrollToWhyUs} >Why Choose Us</li>
          {/* <li>Resources</li> */}
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
  const pathname = usePathname();
  const [dropHeight, setDropHeight] = React.useState('0px');

  function toggleHeight() {
    if(dropHeight === '0px') setDropHeight('180px')
    if(dropHeight === '180px') setDropHeight('0px')
  }

  const scrollToWhyUs = () => {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#WhyUs").offset()!.top - 130
  }, 700, 'swing');
  setDropHeight('0px');
};
const scrollToCaseStudies = () => {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#CaseStudies").offset()!.top - 90
  }, 700, 'swing');
  setDropHeight('0px');
  };

  if(pathname === '/contact') {
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
    </div>
    </nav>
    )
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
          <li onClick={scrollToCaseStudies} >Our Work</li>
          <li onClick={scrollToWhyUs} >Why Choose Us</li>
            <li>Resources</li>
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