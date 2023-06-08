'use client';
import React from 'react'
import classes from '../styles/Work.module.css'

const Work = () => {
  const [media, setMedia] = React.useState(1);

  return (
    <div className={classes.main}>
      <h1>See Our Results</h1>
      <p>Our results speak for themselves.</p>
      <p>Numbers: 1.26mil pins created; </p>

      <div className={classes.content}>

      <div className={classes.left}>
        Media Goes Here
      </div>
      <div className={classes.right}>
        <div className={classes.row1}
        onClick={() => setMedia(1)}
        style={{
          backgroundColor: media === 1 ? 'var(--red)' : '',
          color: media === 1 ? 'var(--grey)' : '',
        }}
        >
          <div className={classes.header}>
            <h2>Viral Pins</h2>
            <img src='/icons/arrow-ur.png' alt='arrow'></img>
          </div>
          <p>Pinning Bees case studio shows extremely consistent results, with 100% of pins receiving at least 9,000 impressions and ranging to 25k impressions.</p>
        </div>
        <div className={classes.row2}
        onClick={() => setMedia(2)}
        style={{
          backgroundColor: media === 2 ? 'var(--red)' : '',
          color: media === 2 ? 'var(--grey)' : '',
        }}
        >
          <div className={classes.header}>
            <h2>3D Rendering</h2>
            <img src='/icons/arrow-ur.png' alt='arrow'></img>
          </div>
          <p>Our flagship content format is this stunning 3D rendering of your product displayed included in a scroll-stopping animation video.</p>
        </div>
        <div className={classes.row3}
        onClick={() => setMedia(3)}
        style={{
          backgroundColor: media === 3 ? 'var(--red)' : '',
          color: media === 3 ? 'var(--grey)' : '',
        }}
        >
          <div className={classes.header}>
            <h2>Case Study #2</h2>
            <img src='/icons/arrow-ur.png' alt='arrow'></img>
          </div>
          <p>This is another case study where we received 19 million impressions in less than 3 months. This is a result of our data-driven strategies.</p>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Work