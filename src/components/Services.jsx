import React from 'react';
import { Card } from "@nextui-org/react";

const Services = () => {
    return (
        <div  className='mt-32' id='services'>
            <h1 className='text-red-600 font-serif mb-4 text-5xl'>Services</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6 my-20'>
                <Card isHoverable isPressable>
                <div className="card lg:card-side sm:grid-cols-1 shadow-xl ">
                    <figure><img src="https://i.ibb.co/Lpq7RdV/frontend.gif" alt="Album" /></figure>
                    <div className="card-body text-left lg:w-2/3">
                        <h2 className="card-title font-serif ">Frontend Development</h2>
                        <p className='font-serif'>I am specialized in frontend development and mainly used technology is React, Tailwind CSS, Daisy Ui, Bootstrap, etc.</p>
                    </div>
                </div>
                </Card>
                <Card isHoverable isPressable>
                <div className="card lg:card-side sm:grid-cols-1 shadow-xl ">
                    <figure><img src="https://i.ibb.co/JCrJw2d/dazzle-man-programmer-writing-code-on-a-laptop-1.gif" alt="Album" /></figure>
                    <div className="card-body text-left lg:w-2/3">
                        <h2 className="card-title font-serif ">Fullstack Development</h2>
                        <p className=' font-serif'>As a junior, full-stack development is a little hard, but I always try my best and use the MERN stack. And lastly, I try to keep my code clean.</p>
                    </div>
                </div>
                </Card>
                <Card isHoverable isPressable>
                <div className="card lg:card-side sm:grid-cols-1 shadow-xl ">
                    <figure><img src="https://i.ibb.co/pX4Hh2h/backend.gif" alt="Album" /></figure>
                    <div className="card-body text-left lg:w-2/3">
                        <h2 className="card-title font-serif">Backend Development</h2>
                        <p className=' font-serif'>In the backend, I try to develop efficient and faster API with Node and Express JS.  Besides, as database I use MongoDB.</p>
                    </div>
                </div>
                </Card>
            </div>
        </div>
    );
};

export default Services;