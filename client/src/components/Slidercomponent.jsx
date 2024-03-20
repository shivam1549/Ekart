import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import './Slider.css';

const Slide = ({ backgroundImage, title, description, image }) => (
    <div className="slide-container">

        <div className="slide-content">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="text-container banner d-flex justify-content-center">
                        <div>
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <Link className="btn btn-outline-dark mt-2">Shop Now</Link>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">

                    <div className="image-container">
                        <img className='w-100' src={image} alt="Slider Image" />
                    </div>
                </div>
            </div>



        </div>
    </div>
);

const NextArrow = ({ onClick }) => (
    <div className="custom-arrow next" onClick={onClick}>
        Next
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev" onClick={onClick}>
        Prev
    </div>
);

const Slidercomponent = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />, // Custom next arrow component
        prevArrow: <PrevArrow />, // Custom previous arrow component
    };

    

    const slides = [
        {
            backgroundImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Discover Your Signature Look',
            description: 'Discover a curated collection of fashion-forward clothing that transcends boundaries and celebrates individuality.',
            image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            backgroundImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Fashion Finds, Just for You',
            description: 'Step into a world where sophistication meets innovation, and explore a range of meticulously crafted clothing that stands the test of time.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        // Add more slides as needed
    ];

    

    return (
        <div>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <Slide key={index} {...slide} />
                ))}
            </Slider>
        </div>
    )
}

export default Slidercomponent