'use client';
import React from 'react'
import $ from 'jquery'
import Image from 'next/image'
import classes from '../styles/FAQ.module.css'

interface Obj { [key: number]: string; }
interface Obj2 { [key: number]: boolean; }

const FAQ = () => {
  const [qHeight, setQHeight] = React.useState<Obj>({
    0: '120px',
    1: '120px',
    2: '120px',
  });
  const [arrow, setArrow] = React.useState<Obj2>({
    0: true,
    1: true,
    2: true,
  });
  const imageSize = 30;

  function toggleArrow(n: number) {
    setArrow(prev => {
      let obj = prev;
      obj[n] = prev[n] ? false : true;
      return obj;
    })
  }

  function toggleHeight(n: number) {
    toggleArrow(n);
    //if current height is not 120, set to 120
    if(qHeight[n] !== '120px') {
      setQHeight(prev => (
        {...prev,
        [n]: '120px'
        }
      ))
    } else { // else set to fit content
      let paraHeight = $('.a').eq(n).height() || 10;
      let heightPx = paraHeight + 180 + 'px';
      setQHeight(prev => (
        {...prev,
        [n]: heightPx
        }
      ))
    }
  }

  return (
    <div className={classes.main}>
      <h1>FAQs</h1>
      <div className={classes.content}>
        <div className={`${classes.qa} qa`}
        onClick={() => toggleHeight(0)}
        style={{height: qHeight[0]}}
        >
          <h3 className={classes.q} >
          Does my business need to be a certain size to work with the Pinning Bees agency?
          </h3>
          <Image
          src={'/icons/toggle.png'}
          width={imageSize}
          height={imageSize}
          alt='arrow'
          style={{
            transform: `rotate(${arrow[0] ? '0' : '180'}deg) translateY(-50%) `,
            transformOrigin: '50% 0',
            transition: 'all .7s ease'
          }}
          />
          <p className={`${classes.a} a`} >Your brand does need to be a suitable fit for the demographics of the Pinterest platform and a certain size for it to be worth it to work with us. If you're curious if you're a good fit, please fill out our application, and we can perform a free analysis on your brand!</p>
        </div>
        <div className={classes.qa}
        onClick={() => toggleHeight(1)}
        style={{height: qHeight[1]}}
        >
          <h3 className={classes.q} >
            How long does Pinterest advertising take to see results?
          </h3>
          <Image
          src={'/icons/toggle.png'}
          width={imageSize}
          height={imageSize}
          alt='arrow'
          style={{
            transform: `rotate(${arrow[1] ? '0' : '180'}deg) translateY(-50%) `,
            transformOrigin: '50% 0',
            transition: 'all .7s ease'
          }}
          />
          <p className={`${classes.a} a`} >
          Since Pinterest is a platform to plan the future, Pinterest advertising is a longer buying cycle. It's always our hope that our clients are so pleased with the results we deliver, that we develop a long term business relationship.
          </p>
        </div>
        <div className={classes.qa}
        onClick={() => toggleHeight(2)}
        style={{height: qHeight[2]}}
        >
          <h3 className={classes.q} >
            How will The Pinning Bees move people from the planning stage to buying?
          </h3>
          <Image
          src={'/icons/toggle.png'}
          width={imageSize}
          height={imageSize}
          alt='arrow'
          style={{
            transform: `rotate(${arrow[2] ? '0' : '180'}deg) translateY(-50%) `,
            transformOrigin: '50% 0',
            transition: 'all .7s ease'
          }}
          />
          <p className={`${classes.a} a`} >Because the Pinterest platform offers the unique opportunity for full-funnel marketing, we are able to leverage the strategies we've been perfecting over the years. We build out strategies, and campaigns to ensure that we have the message, the right targeting, and pin creative to hit every touchpoint in the buyer's journey.</p>
        </div>
        <div className={classes.qa}
        onClick={() => toggleHeight(3)}
        style={{height: qHeight[3]}}
        >
          <h3 className={classes.q} >
            Does The Pinning Bees agency work with other platforms as well?
          </h3>
          <Image
          src={'/icons/toggle.png'}
          width={imageSize}
          height={imageSize}
          alt='arrow'
          style={{
            transform: `rotate(${arrow[2] ? '0' : '180'}deg) translateY(-50%) `,
            transformOrigin: '50% 0',
            transition: 'all .7s ease'
          }}
          />
          <p className={`${classes.a} a`} >
            Definitely. We also manage Facebook, and Instagram advertising. It's best to keep all social media management under the one roof to keep congruent with corporate themed branding and marketing messages. Please reach out to our customer service team if you would like to learn more.
          </p>
        </div>
        <div className={classes.qa}
        onClick={() => toggleHeight(4)}
        style={{height: qHeight[4]}}
        >
          <h3 className={classes.q} >
            Which Niches are best for Pinterest advertising?
          </h3>
          <Image
          src={'/icons/toggle.png'}
          width={imageSize}
          height={imageSize}
          alt='arrow'
          style={{
            transform: `rotate(${arrow[2] ? '0' : '180'}deg) translateY(-50%) `,
            transformOrigin: '50% 0',
            transition: 'all .7s ease'
          }}
          />
          <p className={`${classes.a} a`} >
          The current most popular niches on PInterest are: Pets, Art, Home Decor, Health, Design, DIY & Crafts, Education, Hair & Beauty, Women's Fashion, Travel, Sport, Electronics, Gardening, Wedding, Children's Fashion, Men's Fashion, Food & Drinks. Because we are experts at marketing to all audiences in all niches, we believe that businesses who serve any of these target markets will do great.
          </p>
        </div>
        <div className={classes.qa}
        onClick={() => toggleHeight(5)}
        style={{height: qHeight[5]}}
        >
          <h3 className={classes.q} >
            Where is The Pinning Bees Agency Located & What Makes You Different?
          </h3>
          <Image
          src={'/icons/toggle.png'}
          width={imageSize}
          height={imageSize}
          alt='arrow'
          style={{
            transform: `rotate(${arrow[2] ? '0' : '180'}deg) translateY(-50%) `,
            transformOrigin: '50% 0',
            transition: 'all .7s ease'
          }}
          />
          <p className={`${classes.a} a`} >
          We are based out of Seattle, WA in the USA, and have teams that work remotely. The Pinning Bees is rapidly becoming the #1 Pinterest marketing agency for businesses all around the world. We create a solid foundation for all of our successful clients, and employ a highly creative team that launches stunning visuals with engaging SEO copy to bring optimum results.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FAQ