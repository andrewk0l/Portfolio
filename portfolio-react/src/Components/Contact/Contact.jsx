import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail.png'
import call_icon from '../../assets/call.png'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "574269f3-6238-4099-acb3-480a90c9ffb0");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };
    return (
        <div id='contact' className='contact'>
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
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name' />
                    <label htmlFor=''>Your Email</label>
                    <input type='email' placeholder='Enter your Email' name='email' />
                    <label htmlFor=''>Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your Message'></textarea>
                    <button type='submit' className="contact-submit">Submit</button>
                </form>
            </div>

        </div>
    )
}
export default Contact