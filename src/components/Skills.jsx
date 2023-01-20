import React from 'react';

const Skills = () => {
    return (
        <div  className='mt-32' id='skill'>
            <h1 className='text-red-600 font-serif mb-8 text-5xl'>My Skills</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/M2sbmgq/react.gif" alt="react" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/5jM2pnf/nodejs.gif" alt="nodejs" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/DbFFDT6/javascript.gif" alt="javascript" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/xXQNjjx/mongodb.gif" alt="mongodb" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/mqTnS7d/github.gif" alt="github" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/mqjjrmB/html.gif" alt="html5" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/znymz1L/css.gif" alt="css3" className="rounded-xl" />
                    </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.icons8.com/color/240/null/tailwindcss.png" alt="css3" className="rounded-xl" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Skills;