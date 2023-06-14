import classes from '../styles/WhyUs.module.css'

const WhyUs = () => {

  return (
    <div id='WhyUs' className={classes.main}>
      <div className={classes.headers}>
        <h2 className={classes.header} >
          Why Brands <br className={classes.break}/>Trust Us</h2>
        <p className={classes.subheader} >We pride ourselves in our professional procedure for serving our clients most effectively.</p>
      </div>
      <div className={classes.cards}>
        <div className={classes.card1}>
          <div className={classes.imgBox}>
            <img src='/icons/expert.png' alt='icon'></img>
          </div>
          <h3>Expert Team</h3>
          <p>We bring together top-level teams of pinterest strategists, analytic experts, account specialists, & digital designers to build the best Pinterest marketing plan for your business.
          <br/>
          <br/>
          Marie O'Shea, CEO & Founder, has been deemed an industry-leading expert in the field of Pinterest Marketing.

          </p>
        </div>
        <div className={classes.card2}>
        <div className={classes.imgBox}>
          <img src='/icons/trust.png' alt='icon'></img>
        </div>
          <h3>Full Transparency</h3>
          <p>Our services operate with full transparency in mind. We let you know exactly how your account is run and the reasons behind the decisions we make.
            <br/>
            <br/>
            We are committed to growing your brands with an ethical conscience and drive. </p>
        </div>
        <div className={classes.card3}>
        <div className={classes.imgBox}>
          <img src='/icons/innovative.png' alt='icon'></img>
        </div>
          <h3>Constantly Innovating</h3>
          <p>Pinterest is constantly changing, so we see the importance of staying on top of trends and adapting to its ever-evolving algorithm.
            <br/>
            <br/>
          At Pinning Bees, we have marketing strategists that stay on top of these changes to keep your content relevant over time.
</p>
        </div>
      </div>


    </div>
  )
}

export default WhyUs