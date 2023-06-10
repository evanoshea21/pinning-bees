import classes from '../styles/footer.module.css'
import Link from 'next/link'

const Footer = () => {

  return (
    <div className={classes.main}>
      <div className={classes.left}>
        <h1>Pinning Bees</h1>
        <p>A marketing company with innovative ideas to take your brand to the next level with evergreen, organic traffic.</p>
        <div className={classes.socials}>
          <Link href='http://facebook.com'>
            <img src='/icons/fb.png' alt='facebook'></img>
          </Link>
          <Link href='http://linkedin.com'>
            <img src='/icons/linkedin.png' alt='linkedIn'></img>
          </Link>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.col1}>
          <h4>Service</h4>
          <a href=''>SEO Service</a>
          <a href=''>Content Writer</a>
          <a href=''>Media Buying</a>
        </div>
        <div className={classes.col2}>
          <h4>Resource</h4>
          <a href=''>Blog</a>
          <a href=''>e-Book</a>
          <a href=''>Reference</a>
          <a href=''>Service List</a>
        </div>
        <div className={classes.col3}>
          <h4>Company</h4>
          <a href=''>About Us</a>
          <a href=''>Contact Us</a>
          <a href=''>Meet the Team</a>
          <a href=''>Career</a>
        </div>
        <div className={classes.col4}>
          <h4>Information</h4>
          <a href=''>Promotion</a>
          <a href=''>Affiliate Program</a>
          <a href=''>Testimonials</a>
        </div>
      </div>
    </div>
  )
}

export default Footer