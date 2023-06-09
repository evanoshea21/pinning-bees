import classes from '../styles/TakeAction.module.css'
import Link from 'next/link'

const TakeAction = () => {

  return (
    <div className={classes.main}>
      <div className={classes.left}>
        <h2 className={classes.header} >Display your Brand<br/>on Pinterest Today</h2>
        <h2 className={classes.smallH2} >Display your<br/>Brand on<br/>Pinterest Today</h2>
        <p>Pinterest can help keep your brand ranked organically forever. Stay relevant with long-lasting Pins on Pinterest.</p>
        <Link href='/contact'>
          <button>Get Started</button>
        </Link>
      </div>
      <div className={classes.right}>
        Media Here
      </div>
    </div>
  )
}

export default TakeAction