import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Slidercomponent from '../components/Slidercomponent'
import Categories from '../components/Categories'
import './Home.css'
import Features from '../components/Features'
import Subscribe from '../components/Subscribe'
import Client from '../components/Client'

const home = () => {
  return (
    <div>
      <Navbar />
      {/* Your content goes here */}
      <Slidercomponent />

      <div className="container-fluid mb-4 pb-100 pt-100">
        <div className="container">
          <div className="container-new">

            <Categories />
          </div>
        </div>

      </div>
      <div className='container-fluid mt-4 mb-4 bg-gray pb-100 pt-100'>
        <div className="container">
          <div className="container-new">

            <div className='title'>
              <h2 className=''>Recently Added</h2>
            </div>
            <div className='products'>
              <Products />
            </div>

          </div>
        </div>

      </div>

      <div className='container-fluid featies pb-100 pt-100'>
        <div className="container">
          <Features />

        </div>

      </div>


      <div className='container-fluid clienttestimonials pb-100 pt-100'>
        <div className="container">
          <Client />

        </div>

      </div>

     


      <div className='container-fluid mt-4  pt-100'>
        <div className="container">
          <div className="container-new">

            <div className='title'>
              <h2 className=''>Trending Products</h2>
            </div>
            <div className='products'>
              <Products />
            </div>

          </div>
        </div>

      </div>

      <div className='container-fluid messagesubs pb-100 pt-100'>
        <div className="container">
          <Subscribe />

        </div>

      </div>

     

      <Footer />
    </div>

  )
}

export default home