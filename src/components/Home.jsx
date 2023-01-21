import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className='mt-32' id='home'>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div className='text-left ml-5'>
                    <h1 className='font-serif text-5xl'> <span className='text-red-600'> Hi There !</span> I am a</h1>
                    <div className='mt-2 font-semibold text-4xl'>
                        <Typewriter
                            options={{
                                strings: ['React Developer','Passionate learner','Frontend Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <p className='font-serif mt-4 text-justify text-lg max-w-xl'>A javascript lover who tries to understand it from the core and is comfortable developing projects with it's most popular library, React. Mostly do Frontend development but have knowledge about Node Js, Express Js for the backend, and MongoDB for the database.</p>
                    <a target="_blank" href="https://docs.google.com/document/d/1NmeK2iP6URPDEDUYdyZg3AEA_lUzbRyzD25-noH6Qmw/edit?usp=sharing"><button className="btn font-serif mt-8"> Download Resume</button></a>
                </div>
                <div className='mt-6 lg:w-full sm:w-1/2 ml-10'>
                    <a><img src='https://i.ibb.co/KV1xF1m/juicy-man-programmer-writing-code-and-make-web-design-on-a-pc.gif'/></a>
                </div>
            </div>
        </div>
    );
};

export default Home;