import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark footershop text-light pt-5 pb-3 pb-2">
      <div className="container pt-5">
        <div className="row">
          {/* Brand Name Column */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h3 className="text-uppercase">E Kart</h3>
            <p>Some text describing the brand.</p>
          </div>

          {/* Links Column 1 */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li><Link to="#">Home</Link></li>
              <li><Link to="#">Shop</Link></li>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Login</Link></li>
              <li><Link to="#">Regsiter</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}


          {/* Subscribe Column */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase">Subscribe</h5>
            <p>Get the latest updates and news.</p>
            <form>

              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <div class="input-group-append">
                  <button className="btn btn-outline-light" type="submit">Subscribe</button>
                  </div>
              </div>

         
            </form>
          </div>
          <div className="col-lg-12">
            <div className="d-flex justify-content-center align-items-center">
              All Right Reserved E Kart
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer