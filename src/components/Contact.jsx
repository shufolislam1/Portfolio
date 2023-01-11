import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hvvu5e6', 'template_3h7sj6k', form.current, 'Rv_5cHasR0f7nx5ig')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div id='contact'>
            <h1 className='text-red-600 font-serif my-10'>Contact Me</h1>
            <div className='grid grid-cols-2 my-36'>
                <div className='w-3/5'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Name" name='from_name' className="input input-bordered w-full max-w-xl" /> <br />
                        <input type="text" placeholder="Email" name='from_email' className="input input-bordered w-full max-w-xl my-4" /> <br />
                        <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xl" /> <br />
                        <textarea className="textarea w-full max-w-xl my-4" name='message' placeholder="Write your message"></textarea> <br />
                        <input type="submit" value="Send Message" className="btn btn-wide" />
                    </form>
                </div>
                <div>
                    <img src='https://i.ibb.co/zSvt03M/contact.gif' />
                </div>
            </div>
        </div>
    );
};

export default Contact;