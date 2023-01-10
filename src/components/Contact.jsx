import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
    return (
        <div>
            <h1 className='text-red-600 font-serif my-10'>Contact Me</h1>
            <div className='grid grid-cols-2 my-36'>
                <div className='w-3/5'>
                    <form action="" method="post">
                        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xl" /> <br />
                        <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xl my-4" /> <br />
                        <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xl" /> <br />
                        <textarea className="textarea w-full max-w-xl my-4" placeholder="Write your message"></textarea> <br />
                        <input type="submit" value="Send Message" className="btn btn-wide" />
                    </form>
                </div>
                {/* <div>
                    <LocationOnIcon></LocationOnIcon><br /> 
                    <p className='font-serif my-2 font-bold text-xl'>Dhanmondi-8, Dhaka, Bangladesh.</p>
                    <EmailIcon></EmailIcon> <br />
                    <p className='font-serif my-2 font-bold text-xl'>smshufolislam@gmail.com</p>
                    <GitHubIcon></GitHubIcon> <br />
                    <p className='font-serif my-2 font-bold text-xl'><a href="https://github.com/shufolislam1">Github</a></p>
                    <LinkedInIcon></LinkedInIcon>
                    <p className='font-serif my-2 font-bold text-xl'><a href="https://www.linkedin.com/in/shufol-islam-441b0922b/">LinkedIn</a></p>
                </div> */}
                <img src='https://gist.githubusercontent.com/shufolislam1/9eede73698b2958f005ff92c2a4f5e5a/raw/14b9c275dd9994ba7438040f65707eb1739c5bcf/contact.svg' title='' />
            </div>
        </div>
    );
};

export default Contact;