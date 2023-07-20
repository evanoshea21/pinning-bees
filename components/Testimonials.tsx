import classes from "../styles/Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <img src="/icons/quoteRed.png" />
        <h1>Testimonials</h1>
      </div>

      <div className={classes.reviews}>
        <div className={classes.rev1}>
          <p className={classes.words}>
            The Pinning Bees have dramatically opened up our business
            opportunities through their expertise, understanding, and tireless
            efforts to help us find competitive edges against our competitors.
            Since we recently started Pinterest services, sales have already
            increased by 20%, and we have increased our brand authority amongst
            a warmed up audience that are ready to buy our products. Excited to
            see what's to come!
          </p>
          <div className={classes.who}>
            <img src="/profiles/testm2.png" />
            <div className={classes.whoInfo}>
              <h5>Alison Collins</h5>
              <p>Marketer</p>
            </div>
          </div>
        </div>
        <div className={classes.rev2}>
          <p className={classes.words}>
            We are very pleased with The Pinning Bees' level of understanding of
            Pinterest marketing. In addition, their holistic understanding of
            our company needs and goals is nothing short of remarkable. They
            have really become a great asset to our marketing team.
          </p>
          <div className={classes.who}>
            <img src="/profiles/testm1.png" />
            <div className={classes.whoInfo}>
              <h5>Pat Reiss</h5>
              <p>CMO</p>
            </div>
          </div>
        </div>
        <div className={classes.rev3}>
          <p className={classes.words}>
            The Pinning Bees have taken time to learn our industry, which is a
            bit afield of their normal clientele. They have created a full
            funnel content strategy that has given us excellent results on
            Pinterest. I've worked with many agencies throughout my career, The
            Pinning Bees is top notch and gives me confidence that we'll keep
            getting where we want to go.
          </p>
          <div className={classes.who}>
            <img src="/profiles/testm3.png" />
            <div className={classes.whoInfo}>
              <h5>Cheri Anderson</h5>
              <p>Co-founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
