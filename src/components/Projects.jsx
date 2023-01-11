import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Card } from "@nextui-org/react";



const Projects = () => {
    return (
        <div className='mt-48' id='projects'>
            <h1 className='text-red-600 font-serif mb-20'>Projects</h1>
            <OwlCarousel className='owl-theme grid' nav margin={10} autoplay autoplayTimeout={2000} loop>
                <div className='item sm:grid-cols-1'>
                    <Card isHoverable isPressable>
                        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/TYW8QJQ/sawari-spark-shufol-netlify-app.png")` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Sawari Spark</h1>
                                    <a target='_blank' href="https://sawari-spark-shufol.netlify.app/"><button className="btn"> View Live</button></a> 
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='item'>
                    <Card isHoverable isPressable>
                        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/hMw3mnP/dhaka-convention.png")` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Party Center</h1>
                                    <a target='_blank' href="https://awesome-galileo-7aef9e.netlify.app/"><button className="btn">View Live</button> </a> 
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default Projects;