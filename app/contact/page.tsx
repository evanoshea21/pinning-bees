'use client';
import React from 'react'
import classes from '../../styles/ContactPage.module.css'
import emailjs from '@emailjs/browser'

const ContactPage = () => {
  const [loading, setLoading] = React.useState(false);

  function submitForm(e: any) {
    e.preventDefault();

    let formData: {[key: string]: string} = {};
    for(let i = 0; i < e.target.length; i++) {
      formData[e.target[i].name] = e.target[i].value;
    }
    // console.log('formData:', formData);
    emailjs.send('service_br878cj','template_lyr98oa', formData, 'dBARdKzebDtUYaWO6')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.log('FAILED...', err);
    });

  }


  return (
    <div className={classes.main} >
      <h1 className={classes.header} >Contact Us</h1>

      <form className={classes.form} onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input type="text" name="from_name" id="name" placeholder='John Doe'/>

        <label htmlFor="email">Email</label>
        <input type="email" name="from_email" id="email" placeholder='test@gmail.com'/>

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" placeholder='Hey i was just wondering...'
        rows={10}
        cols={80}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactPage