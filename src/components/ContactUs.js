import React, { useState } from 'react'
import './ContactUs.css'
import Navbar from './navbar'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import Footer from './footer.js'
import { projectFirestore } from './firebase/config';
import { useFirestore } from './hooks/useFirestore';


const cors = require('cors')({ origin: true });

const ContactUs = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = projectFirestore;
    const collectionRef = db.collection('contact-us');

    // Create an object with the data to send to Firestore
    const data = {
      name,
      email,
      message
    };

    try {
      // Add the document to the collection
      const docRef = await collectionRef.add(data);
      console.log('Document written with ID: ', docRef.id);

      // Reset form fields or perform any other actions you need
      setName('')
      setEmail('')
      setMessage('')

    } catch (error) {
      console.error('Error adding document to Firestore: ', error);
      // Handle the error as needed
    }
  }

  return (
    <>
      <div className='top_comp'>
        <a href='/'><img className='left_img' src={left_img} alt="" /></a>
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt="" />
      </div>

      <Navbar />

      <h1 className="contact-us-heading">CONTACT US</h1>
      <div className="contact-us-main-container">
        <form onSubmit={handleSubmit}>
          <div className="contact-us-form-items">
            <div className='contact-us-items-form'>Name: <input type='text' value={name} onChange={(e) => setName(e.target.value)} required id="contact-name"></input></div>
            <div className='contact-us-items-form'>Email: <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} required id="contact-email"></input></div>
            <div className='contact-us-items-form'>Message: <textarea type='text' value={message} rows={4} onChange={(e) => setMessage(e.target.value)} required id="contact-name"></textarea></div>
          </div>
          <div className="contact-us-button">
            <button type='submit' className="">Submit</button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  )
}

export default ContactUs