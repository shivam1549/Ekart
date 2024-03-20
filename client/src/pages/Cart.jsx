import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from '../requestMethods'

const KEY = process.env.REACT_APP_STRIPE

function Cart() {
  const cart = useSelector(state => state.cart)
  const navigate = useNavigate();

  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) =>{
    setStripeToken(token);
  };
  useEffect(()=>{
    const makeRequest = async ()=>{
      try{
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount:500,
          
        })
        navigate("/success",{data:res.data});
      }catch{}
    };
    setStripeToken &&  makeRequest()
  }, [stripeToken, cart.total, navigate])
  return (
    <div>
      <Navbar />

      <div className='container-fluid mt-4 mb-4'>
        <h2 className='text-center mb-2'>Your Bag</h2>
        <Link className='btn btn-dark' to="/">Continue Shopping</Link>
        <div className="row mt-4">
          <div className="col-lg-8">
            {cart.products.map(product => (


              <div className="products mb-3 border">
                <div className='row align-items-center'>
                  <div className='col-md-4'>
                    <img className='w-50' src="https://www.shutterstock.com/image-photo/handsome-male-model-wear-jacket-600nw-718746736.jpg" alt="" />
                  </div>
                  <div className='col-md-8'>
                    <h3 className='mb-2'>{product.title}</h3>
                    <p>{product.quantity}</p>
                    <span>Size: {product.size}</span>
                    <br />
                    <span>Color: {product.color}</span>
                    <br />
                    <p> $
                      {product.price * product.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-4">
            <div className="card border p-4">
              <h4 className='text-center mb-2'>Order Summary</h4>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p>Subtotal:</p>
                  <p>$
                    {cart.total}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Total:</p>
                  <p>$
                    {cart.total}
                  </p>
                </div>

                <div className='mt-2'>
                  <StripeCheckout
                    name="Lama Shop"
                    billingAddress
                    shippingAddress
                    description={`Your Cart Total is $ ${cart.total}`}
                    amount={cart.total*100} // Amount in cents
                    token={onToken}
                    stripeKey={KEY}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Cart