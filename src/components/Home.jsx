import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className='mt-48'>
        <div className='grid grid-cols-2 gap-4'>
            <div className='text-left ml-5'>
                <h1 className='font-serif'> <span className='text-red-600'> Hi There !</span> I am a</h1>
                <div className='mt-2 font-semibold text-xl'>
                    <Typewriter
                        options={{
                            strings: ['Frontend Web Developer', 'Passionate learner'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <p className='font-serif mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, blanditiis veniam dignissimos laborum numquam quis, beatae dolore ullam reprehenderit distinctio illo eaque fugiat voluptatem. Illo mollitia doloremque accusamus eos aspernatur!</p>
                <div className="btn font-serif mt-8">Download Resume</div>
            </div>
            <div className=''>
                <a><img src='https://svgshare.com/i/pNV.svg' title='development' /></a>
            </div>
        </div>
        </div>
    );
};

export default Home;