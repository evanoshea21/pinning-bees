'use client';
import React from 'react'
import $ from 'jquery'
import Image from 'next/image'
import classes from '../styles/FAQ.module.css'

interface Obj { [key: number]: string; }

const FAQ = () => {
  const [qHeight, setQHeight] = React.useState<Obj>({
    0: '120px',
    1: '120px',
    2: '120px',
  });
  const [imageSize, setImageSize] = React.useState(20)

  function toggleHeight(n: number) {
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
          <h3 className={classes.q} >What is SEO?</h3>
          <Image
          src={'/icons/arrow-ur.png'}
          width={imageSize}
          height={imageSize}
          alt='arrow'
          />
          <p className={`${classes.a} a`} >SEO stands for Search Engine Optimization. It is the practice of optimizing a website to increase the quantity and quality of traffic from organic search engine results. This involves optimizing the website's content, structure, and other elements to make it more appealing to search engines and improve its ranking in search results. The ultimate goal of SEO is to increase visibility and drive traffic to a website, which can lead to increased sales or other business objectives. structure, and other elements to make it more appealing to search engines and improve its ranking in search results. The ultimate goal of SEO is to increase visibility and drive traffic to a website, which can lead to increased sales or other business objectives. engines and improve its ranking in search results. The ultimate goal of SEO is to increase visibility and drive traffic to a website, which can lead to increased sales or other business objectives. structure, and other elements to make it more appealing to search engines and improve its ranking in search results. The ultimate goal of SEO is to increase visibility and drive traffic to a website, which can lead to increased sales or other business objectives.</p>
        </div>
        <div className={classes.qa}
        onClick={() => toggleHeight(1)}
        style={{height: qHeight[1]}}
        >
          <h3 className={classes.q} >What is Marketing?</h3>
          <Image
          src={'/icons/arrow-ur.png'}
          width={imageSize}
          height={imageSize}
          alt='arrow'
          />
          <p className={`${classes.a} a`} >Marketing is... stands for Search Engine Optimization. It is the practice of optimizing a website to increase the quantity and quality of traffic from organic search engine results. This involves optimizing the website's content, structure, and other elements to make it more appealing to search engines and improve its ranking in search results. The ultimate goal of SEO is to increase visibility and drive traffic to a website, which can lead to increased sales or other business objectives.</p>
        </div>
        <div className={classes.qa}
        onClick={() => toggleHeight(2)}
        style={{height: qHeight[2]}}
        >
          <h3 className={classes.q} >Why should I use Pinterest?</h3>
          <Image
          src={'/icons/arrow-ur.png'}
          width={imageSize}
          height={imageSize}
          alt='arrow'
          />
          <p className={`${classes.a} a`} >You should use Pinterest because... stands for Search Engine Optimization. It is the practice of optimizing a website to increase the quantity and quality of traffic from organic search engine results. This involves optimizing the website's content, structure, and other elements to make it more appealing to search engines and improve its ranking in search results. The ultimate goal of SEO is to increase visibility and drive traffic to a website, which can lead to increased sales or other business objectives.</p>
        </div>
      </div>
    </div>
  )
}

export default FAQ