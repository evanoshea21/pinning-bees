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

export default function Home() {
  return (
    <div className={classes.main}>

      {/* CONTENT */}
      <div className='content'>
      <Hero />
      <Stats />
      <WhyPinterest />
      <OurServices />
      <WhyUs />
      <Work />
      <TakeAction />
      <FAQ />
      <Footer />


      </div>
    </div>
  )
}
