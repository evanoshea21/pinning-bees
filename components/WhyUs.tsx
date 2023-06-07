import classes from '../styles/WhyUs.module.css'

const WhyUs = () => {

  return (
    <div className={classes.main}>
      <div className={classes.headers}>
        <h2 className={classes.header} >Why Brands Trust Us</h2>
        <p className={classes.subheader} >We pride ourselves in our professional procedure for serving our clients most effectively.</p>
      </div>
      <div className={classes.cards}>
        <div className={classes.card1}>
          <img src='/icons/evergreen.png' alt='icon'></img>
          <h3>Expert Team</h3>
          <p>We bring together top-level teams of pinterest strategists, analytic experts, account specialists, & digital designers to build the best Pinterest marketing plan for your business.</p>
        </div>
        <div className={classes.card2}>
          <img src='/icons/evergreen2.png' alt='icon'></img>
          <h3>High Value</h3>
          <p>We have developed a streamlined process to output a large quantity of pins without compromising on quality. Our competitors offer 300 pins/month compared to our 600+.</p>
        </div>
        <div className={classes.card3}>
          <img src='/icons/evergreen3.png' alt='icon'></img>
          <h3>High Converting Creatives</h3>
          <p>We develop pins from scratch to capture a quality image of your brand while opitmizing for SEO and conversion rates.</p>
        </div>
      </div>


    </div>
  )
}

export default WhyUs