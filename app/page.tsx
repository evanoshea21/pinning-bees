import classes from './page.module.css'
import Hero from '../components/Hero'
import WhyPinterest from '../components/WhyPinterest'
import OurServices from '../components/OurServices'
import WhyUs from '../components/WhyUs'
import Work from '../components/Work'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={classes.main}>
      {/* NAVBAR */}
      <nav className={classes.navbar} >
      <div className={classes.navContent}>

        <h1 className={classes.logo} >The Pinning Bees</h1>
        <div className={classes.linksAndBtn}>
          <ul className={classes.links}>
            <li><a href="http://localhost:3000">Our Results</a></li>
            <li><a href="http://localhost:3000">Why Us</a></li>
            <li><a href="http://localhost:3000">Why Pinterest</a></li>
          </ul>
          <button className={classes.contactBtn} >Contact Sales</button>
        </div>

      </div>
      </nav>
      <div className={classes.navbarGap}></div>
      {/* CONTENT */}
      <div className='content'>
      <Hero />
      <WhyPinterest />
      <OurServices />
      <WhyUs />
      <Work />
      <Footer />
      </div>
    </div>
  )
}
