import React, { useEffect, useState } from 'react'
import { publicRequest } from '../requestMethods';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import './Product.css'
import Relatedproducts from '../components/Relatedproducts';

function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(res.data);
      } catch (err) {

      }
    }
    getProduct();
  }, [id]);


  useEffect(() => {
    const getReviews = async () => {
      try {
        const res = await publicRequest.get("/reviews/find/" + id)
        setReviews(res.data);
      } catch (err) {

      }
    }
    getReviews();
  }, [id]);

  console.log("Reviews:", reviews);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  }
  return (
    <div>
      <Navbar />

      <div className='container-fluid single-product pb-100 pt-100'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="product-img">
                <div className="innerimg">
                  <img src={product.img} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="producttitle mb-2">
                {product.title}
              </h2>
              <h4 className='price text-success bold mb-2'>$ {product.price}</h4>
              <div className="desc mb-2">
                {product.desc}
              </div>
              <div className="row mb-2">
                <div className="col-md-4">
                  <div className="color mb-2">
                    <h4>Color:</h4>
                    <select name="color" className='form-control ' id="" onClick={(e) => setColor(e.target.value)}>
                      {product.color?.map((c) =>
                        <option key={c} >{c} </option>
                      )}
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="size mb-2">
                    <h4>Size:</h4>
                    <select name="size" className='form-control ' id="" onClick={(e) => setSize(e.target.value)}>
                      {product.size?.map((s) =>
                        <option key={s}> {s} </option>
                      )}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div class="input-group mb-3">
                    <span class="input-group-text" onClick={() => handleQuantity("dec")} id="basic-addon1">-</span>
                    <input type="number" class="form-control" value={quantity} />
                    <span class="input-group-text" onClick={() => handleQuantity("inc")} id="basic-addon2">+</span>
                  </div>
                </div>
                <div className="col-md-12">
                  <button class="btn btn-dark" onClick={handleClick}>Add to cart</button>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">


          <div className="description">

          </div>
          <div className="reviews">
            <h2 className='border-bottom pb-2 mb-3'>Comments</h2>
            <div className="row">

              {reviews && reviews.map && reviews.map((review, index) => (


                <div className="col-md-12 main-column" key={index}>
                  <div className="row align-items-center">
                    <div className="username col-md-2">
                      <p>{review.username}</p>
                    </div>
                    <div className="mesagetext col-md-10">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus perferendis ut nostrum, minus sequi quibusdam culpa illo et laborum illum neque dicta repellendus id, officiis alias fugiat nihil pariatur porro!</p>
                      <div className="stars">
                        {Array.from({ length: Number(review.stars) }, (_, i) => (
                          <i key={i} className='ti ti-star'></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-lg-12 mt-3">
                <h4 className='mb-2'>Write Your Review</h4>
                    <div className="form">

                      <input type="text" className='form-control mb-2' name="mesage" placeholder='Please write your review'/>
                      <select name="rating" className='form-control mb-2' id="">
                        <option value="1">1 Star</option>
                        <option value="2">2 Star</option>
                        <option value="3">3 Star</option>
                        <option value="4">4 Star</option>
                        <option value="5">5 Star</option>
                      </select>
                      <button className='btn btn-dark'>Give Rating</button>

                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="related-products">
        <div className="container-fluid pt-100 pb-100">
          <div className="container">
            <h2>Related Products</h2>
            <Relatedproducts id={id} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Product