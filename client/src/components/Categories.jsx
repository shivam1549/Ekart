import React from 'react'
import { Link } from 'react-router-dom'
import './Category.css'

const Categories = () => {
  return (
    <div>
        <div className="row categories">
            <div className="col-md-6">
                <div className="bgimg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1630667208073-82d53b1db540?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                    <div className="navigatecat">
                        <Link to="/products/man" className='btncat text-black'>Best Men <br></br> Collection</Link>
                        <div>
                        <Link to="/products/man" className='btn btn-outline-dark mt-3'>Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="bgimg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553531540-d99596614a82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                    <div className="navigatecat">
                        <Link to="/products/women" className='btncat text-black'>Best Women <br></br> Collection</Link>
                        <div>
                        <Link to="/products/women" className='btn btn-outline-dark mt-3'>Shop Now</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
          
        </div>
    </div>
  )
}

export default Categories