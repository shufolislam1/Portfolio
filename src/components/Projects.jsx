import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const Projects = () => {
    return (
        <div className='mt-48'>
            <h1 className='text-red-600 font-serif mb-4'>Projects</h1>
            <OwlCarousel  className='owl-theme' loop margin={10} nav={true} autoPlay={true}>
                <div className='item'>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">1</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">2</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default Projects;