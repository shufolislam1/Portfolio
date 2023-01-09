import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
    return (
        <div>
            <h1 className='text-red-600 font-serif my-10'>Contact Me</h1>
            <div className='grid grid-cols-2 gap-4 mt-10'>
                <div className='w-3/5'>
                    <form action="" method="post">
                        <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xl" /> <br />
                        <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xl my-4" /> <br />
                        <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xl" /> <br />
                        <textarea className="textarea textarea-error w-full max-w-xl my-4" placeholder="Bio"></textarea> <br />
                        <input type="submit" value="Submit" className="btn btn-wide" />
                    </form>
                </div>
                <div>
                    <LocationOnIcon></LocationOnIcon><br /> 
                    <p className='font-serif my-2 font-bold text-xl'>Dhanmondi-8, Dhaka, Bangladesh.</p>
                    <EmailIcon></EmailIcon> <br />
                    <p className='font-serif my-2 font-bold text-xl'>smshufolislam@gmail.com</p>
                    <GitHubIcon></GitHubIcon> <br />
                    <p className='font-serif my-2 font-bold text-xl'><a href="https://github.com/shufolislam1">Github</a></p>
                    <LinkedInIcon></LinkedInIcon>
                    <p className='font-serif my-2 font-bold text-xl'><a href="https://www.linkedin.com/in/shufol-islam-441b0922b/">LinkedIn</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;