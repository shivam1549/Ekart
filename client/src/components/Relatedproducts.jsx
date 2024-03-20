import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { publicRequest } from '../requestMethods';


const Slide = ({ title, price, img, _id }) => (
    <div className="singleproduct">
        <Link to={`/product/${_id}`}>
            <div className="products product-trend  text-center">
                <div class="imgcober" >
                    <div className="product-img">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="text-names">
                    <h4 className='text-dark mt-3'>{title}</h4>
                    <p className='prices'>$ {price}</p>

                </div>

            </div>
        </Link>
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

const Relatedproducts = ({ id }) => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/relatedproducts/" + id);
                console.log("Related Products:", res.data);
                setProducts(res.data);
            } catch (err) {

            }
        }
        getProduct();
    }, [id]);



    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        margin:10,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />, // Custom next arrow component
        prevArrow: <PrevArrow />, // Custom previous arrow component
    };


    return (
        <Slider {...settings}>
            {products.map((slide, index) => (
                <Slide key={index} {...slide} />
            ))}
        </Slider>



    )
}

export default Relatedproducts