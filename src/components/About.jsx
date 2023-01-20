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
                <p className='font-serif mt-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo commodi harum quod alias aperiam doloribus nobis ratione animi laudantium fugit quo vero, minus deserunt tempore repellendus nihil nesciunt nam accusantium.</p>
                <a href="#contact"><button className="btn font-serif mt-8"> Let ' s Connect !</button></a>
                </div>
            </div>
        </div>
    );
};

export default About;