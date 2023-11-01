
import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
                <div className="p1">
              <h2>Call Us</h2>
              </div>
              <div className='p2'>
              <p>Email: contact@yourwebsite.com</p>
              <p>Phone: (123) 456-7890</p>
              </div>
              <div className="p1"><h2>Location</h2></div>
              
              <div className='p2'>
              <p>121 Rock Street Avenue</p>
              </div>
              <div className="p1">
              <h2>Hours</h2>
              </div>
              <div className='p2'>
              <p>Mon-Fri 10am to 8pm</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="contact-form">
        <div className="contact-form-content">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" placeholder="Your Message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

             
