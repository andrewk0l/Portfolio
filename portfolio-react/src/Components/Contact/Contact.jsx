import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail.png'
import linkedin from '../../assets/linkedin.png'
import call_icon from '../../assets/call.png'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-title">
                <h1>Contact me</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt='' />
                            <p>andyoged92@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt='' />
                            <p>+234 7063538500</p>

                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name'/>
                    <label htmlFor=''>Your Email</label>
                    <input type='email' placeholder='Enter your Email' name='email'/>
                    <label htmlFor=''>Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your Message'></textarea>
                    <button type='submit' className="contact-submit">Submit</button>
                </form>
            </div>

        </div>
    )
}
export default Contact