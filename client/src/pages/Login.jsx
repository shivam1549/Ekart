import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const {isFetching, error} = useSelector((state) => state.user);
  const handleClick = (e) =>{
    e.preventDefault()
    login(dispatch, {username, password})
    
  }
  return (
    <div>
      <Navbar />
      
      <div className='container-fluid  pb-100 pt-100'>
        <div className='title mb-2 text-center'>
          <h2>Login Now</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4">
          <div className="card p-2">
            <div className="card-body">
              <div className="form-group mb-2">
                <input type="text" placeholder='username' className='form-control' onChange={(e) => setUsername(e.target.value)} />
              </div>

              <div className="form-group mb-2">
                <input type="password" placeholder='password' className='form-control' onChange={(e) => setPassword(e.target.value)} />
              </div>

              <button className='btn btn-dark' onClick={handleClick} disabled={isFetching}>Login Now</button>
              {error && <p className='text-danger'>Something Went Wrong</p>}
            </div>
          </div>
          </div>
        </div>

        </div>

      <Footer />
      </div>
  )
}

export default Login