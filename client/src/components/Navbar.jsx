import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="">E Kart</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Shop</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" >
               About Us
              </Link>
            
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" >
               Contact Us
              </Link>
            
            </li>
           
          </ul>
          <div className="d-flex ">
          
          <Link className="nav-link text-white" to="/register" >LOGIN / REGISTER</Link>
          <Link className="nav-link text-white" to="/cart" > <i className='ti ti-shopping-cart'></i> <sup>{quantity}</sup></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar