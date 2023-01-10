import React from 'react';

const Services = () => {
    return (
        <div  className='mt-32 bg-sky-600'>
            <h1 className='text-red-600 font-serif mb-4'>Services</h1>
            <div className='grid grid-cols-3 gap-6 my-32'>
                <div className="card lg:card-side bg-sky-600 hover:bg-sky-700 shadow-xl ">
                    <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;