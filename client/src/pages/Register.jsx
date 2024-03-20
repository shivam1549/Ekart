import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { publicRequest } from '../requestMethods';
import { Navigate, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { Register } from '../redux/apiCalls';

function Register() {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});
 
  const handleChange = (e) => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value }
  })
  }

  // console.log(inputs)

  const handleClick = async (e) =>{
    e.preventDefault()
    try{
      const res = await publicRequest.post("/auth/register", inputs)
      navigate("/login");
    }catch{}
  }
  return (
    <div>
      <Navbar />
      
      <div className='container-fluid  pb-100 pt-100'>
        <div className='title mb-2 text-center'>
          <h2>Register Now</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4">
          <div className="card p-2">
            <div className="card-body">
              <div className="form-group mb-2">
              <input name="username" type="text" placeholder='Name' className='form-control'  onChange={handleChange}/>
              </div>
              <div className="form-group mb-2">
              <input name="email" type="email" placeholder='Email' className='form-control' onChange={handleChange}  />
              </div>
          

              <div className="form-group mb-2">
                <input name="password" type="password" placeholder='password' className='form-control' onChange={handleChange} />
              </div>

              <button className='btn btn-dark' onClick={handleClick} >Register Now</button>
             
            </div>
          </div>
          </div>
        </div>

        </div>

      <Footer />
      </div>
  )
}

export default Register