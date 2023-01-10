import React from 'react';
import { Card } from "@nextui-org/react";

const Services = () => {
    return (
        <div  className='mt-32' id='services'>
            <h1 className='text-red-600 font-serif mb-4'>Services</h1>
            <div className='grid grid-cols-3 gap-6 my-20'>
                <Card isHoverable isPressable>
                <div className="card lg:card-side shadow-xl ">
                    <figure><img src="https://i.ibb.co/Lpq7RdV/frontend.gif" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sawari Spark</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn">Listen</button>
                        </div>
                    </div>
                </div>
                </Card>
                <Card isHoverable isPressable>
                <div className="card lg:card-side shadow-xl ">
                    <figure><img src="https://i.ibb.co/JCrJw2d/dazzle-man-programmer-writing-code-on-a-laptop-1.gif" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                </Card>
                <Card isHoverable isPressable>
                <div className="card lg:card-side shadow-xl ">
                    <figure><img src="https://i.ibb.co/pX4Hh2h/backend.gif" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                </Card>
            </div>
        </div>
    );
};

export default Services;