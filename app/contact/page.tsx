'use client';
import React from 'react'
import classes from './page.module.css'
import emailjs from '@emailjs/browser'
import Link from 'next/link'

type loadingState = 'not sent' | 'sent' | 'loading' | 'error'

const ContactPage = () => {
  const [loading, setLoading] = React.useState<loadingState>('not sent');

  function submitForm(e: any) {
    e.preventDefault();
    setLoading('loading');

    let formData: {[key: string]: string} = {};
    for(let i = 0; i < e.target.length; i++) {
      formData[e.target[i].name] = e.target[i].value;
    }
    // console.log('formData:', formData);
    emailjs.send('service_br878cj','template_lyr98oa', formData, 'dBARdKzebDtUYaWO6')
    .then((response) => {
      setLoading('sent');
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      setLoading('error');
      console.log('FAILED...', err);
    });

  }


  return (
    <div className={classes.main} >
      <h1 className={classes.header} >Contact Us</h1>
      {loading === 'not sent' && (
      <form className={classes.form} onSubmit={submitForm}>
        <div className={classes.nameEmail}>
          <div className={classes.nameInputs}>
            <label htmlFor="name"></label>
            <input required type="text" name="from_name" id="name" placeholder='Your Name'/>
          </div>

          <div className={classes.emailInputs}>
            <label htmlFor="email"></label>
            <input required type="email" name="from_email" id="email" placeholder='Email'/>
          </div>
        </div>

        <label htmlFor="message"></label>
        <textarea required name="message" id="message" placeholder='Message'
        rows={10}
        />
        <button className={classes.sendBtn}  type='submit'>Send Message</button>
      </form>
      )}
      {loading === 'loading' && (
        <div className={classes.status}><h2>Sending email...</h2></div>
      )}
      {loading === 'sent' && (
        <div className={classes.status}><h2>Email Sent</h2>
        <p>We will be in contact with you shortly!</p>
        <Link href='/'
        style={{color: 'var(--navy)'}}
        >Return to Homepage</Link>
        </div>
      )}
      {loading === 'error' && (
        <div className={classes.status}><h3>There was an error sending your email. Please try again later.</h3></div>
      )}
    </div>
  )
}

export default ContactPage