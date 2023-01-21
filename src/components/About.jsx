import React from 'react';

const About = () => {
    return (
        <div className='mt-36 bg-sky-600' id='about'>
            <h1 className='text-red-600 font-serif mb-4 sm:text-center text-5xl'>About Me</h1>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4 ml-5 my-36'>
                <div>
                    <img src='https://i.ibb.co/nfx1WrF/aboutme.gif' />
                </div>
                <div className='text-left ml-16'>
                <h6 className='font-serif text-red-600 text-4xl'>Shufol Islam</h6>
                <p className='font-serif mt-4 text-justify text-lg'>I am currently studying in the CSE department at Sonargaon University. I am comfortable developing projects with Html 5, CSS 3, Tailwind CSS, Daisy UI, React, and other React libraries. Also have knowledge about version controling system github. Besides,  Passionate about exploring new technologies, learning new things by doing a project, and being dedicated to solving problems. I am also curious about Competetive Programming and trying to be a good problem solver. I am always open to new projects and would love to explore new things together. If you have any queries or have opportunities, don't hesitate to knock.</p>
                <a href="#contact"><button className="btn font-serif mt-8"> Let ' s Connect !</button></a>
                </div>
            </div>
        </div>
    );
};

export default About;