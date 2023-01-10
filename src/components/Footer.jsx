import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <div className='mt-48'>
            <footer className="footer footer-center p-5  bg-neutral text-neutral-content rounded">
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a target='_blank' href='https://github.com/shufolislam1'><GitHubIcon></GitHubIcon></a>
                        <a target='_blank' href='https://www.linkedin.com/in/shufol-islam-441b0922b/'><LinkedInIcon></LinkedInIcon></a>
                        <a target='_blank' href='https://www.facebook.com/su.mu.39982'><FacebookIcon></FacebookIcon></a>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by Shufol Islam</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;