import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className='mt-48' id='home'>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div className='text-left ml-5'>
                    <h1 className='font-serif'> <span className='text-red-600'> Hi There !</span> I am a</h1>
                    <div className='mt-2 font-semibold text-2xl'>
                        <Typewriter
                            options={{
                                strings: ['Frontend Web Developer', 'Passionate learner'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <p className='font-serif mt-4 text-left sm:text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, blanditiis veniam dignissimos laborum numquam quis, beatae dolore ullam reprehenderit distinctio illo eaque fugiat voluptatem. Illo mollitia doloremque accusamus eos aspernatur!</p>
                    <a target="_blank" href="https://docs.google.com/document/d/1NmeK2iP6URPDEDUYdyZg3AEA_lUzbRyzD25-noH6Qmw/edit?usp=sharing"><button className="btn font-serif mt-8"> Download Resume</button></a>
                </div>
                <div className='mt-6 lg:w-full sm:w-1/2'>
                    <a><img src='https://gist.githubusercontent.com/shufolislam1/6e7f34f82b8968c2d04248b5234e9a59/raw/1c6a2eb1a9d4aa3e964faba92535e5098b483ed6/home.svg' title='development' /></a>
                </div>
            </div>
        </div>
    );
};

export default Home;