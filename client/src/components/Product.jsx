import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = ({item}) => {
  return (
  
        <div className="col-lg-3 col-md-6 col-sm-12">
                    <Link to={`/product/${item._id}`}>
                        <div className="products product-trend  text-center">
                        <div class="imgcober" >
                            <div className="product-img">
                                <img  src={item.img} alt="" />
                            </div>
                            </div>
                            <div className="text-names">
                            <h4 className='text-dark mt-3'>{item.title}</h4>
                            <p className='prices'>$ {item.price}</p>
                            
                            </div>
                            
                        </div>
                    </Link>
                </div>
    
  )
}

export default Product