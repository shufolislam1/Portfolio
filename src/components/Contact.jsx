import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hvvu5e6', 'template_3h7sj6k', form.current, 'Rv_5cHasR0f7nx5ig')
            .then((result) => {
                if (result) {
                    Swal.fire({
                        title: 'success!',
                        text: 'You are done.',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div id='contact'>
            <h1 className='text-red-600 font-serif my-10 text-5xl'>Contact Me</h1>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 my-36'>
                <div className='lg:w-full sm:justify-items-center'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered w-full max-w-xl" required /> <br />
                        <input type="text" placeholder="Email" name='email' className="input input-bordered w-full max-w-xl my-4" required /> <br />
                        <input type="text" placeholder="Subject" name='subject' className="input input-bordered w-full max-w-xl" required /> <br />
                        <textarea className="textarea textarea-bordered w-full max-w-xl my-4" name='message' placeholder="Write your message" required></textarea> <br />
                        <input type="submit" value="Send Message" className="btn btn-wide" />
                    </form>
                </div>
                <div className='lg:w-full sm:w-2/3 ml-16'>
                    <img src='https://i.ibb.co/zSvt03M/contact.gif' />
                </div>
            </div>
        </div>
    );
};

export default Contact;