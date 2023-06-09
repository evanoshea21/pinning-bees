import classes from './page.module.css'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import WhyPinterest from '../components/WhyPinterest'
import OurServices from '../components/OurServices'
import WhyUs from '../components/WhyUs'
import Work from '../components/Work'
import TakeAction from '../components/TakeAction'
import FAQ from '../components/FAQ'
import Footer from '../components/footer'
import {Nav, SmNav} from '../components/Nav'

export default function Home() {
  return (
    <div className={classes.main}>
      <Nav />
      <SmNav />
      <div className={classes.navbarGap}></div>
      {/* CONTENT */}
      <div className='content'>
      <Hero />
      <Stats />
      <WhyPinterest />
      <WhyUs />
      <OurServices />
      <Work />
      <TakeAction />
      <FAQ />
      <Footer />


      </div>
    </div>
  )
}
