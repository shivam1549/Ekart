import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/apiCalls'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await login(dispatch, { username, password });
     
      navigate('/');
      
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
      // You can show an error message or perform other actions here
    }
  }
  return (
  

      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    <img src="../../images/logo.svg" alt="logo" />
                  </div>
                  <h4>Hello! let's get started</h4>
                  <h6 className="font-weight-light">Sign in to continue.</h6>

                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" onChange={e => setUsername(e.target.value)} id="exampleInputEmail1" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                  </div>
                  <div className="mt-3">
                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={handleClick}>SIGN IN</button>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    
  )
}

export default Login