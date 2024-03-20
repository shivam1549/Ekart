import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import './Subscribe.css'


const Slide = ({ backgroundImage, title, description, image }) => (
    <div className="inner-slides">
        <p>{description}</p>

        <div className="titlename">
            {title}
        </div>
    </div>
);

const NextArrow = ({ onClick }) => (
    <div className="custom-arrow-client next" onClick={onClick}>
       <i className='ti-arrow-right'></i>
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow-client prev" onClick={onClick}>
        <i className='ti-arrow-left'></i>
    </div>
);

const Client = () => {


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
            
            title: 'John doe',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
       
        },
        {
            
            title: 'Tyler',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
           
        },
        // Add more slides as needed
    ];

    return (
        <div className="row align-items-center">
            <div className="col-md-6">
                <img src="https://mooncart.dexignzone.com/xhtml/images/girl.png" alt="" />
            </div>
            <div className="col-md-6">
                <h2>What our clients say
                    about us</h2>
                <div className="sliderclients">
                    <Slider {...settings}>
                        {slides.map((slide, index) => (
                            <Slide key={index} {...slide} />
                        ))}
                    </Slider>



                </div>
            </div>
        </div>
    )
}

export default Client



