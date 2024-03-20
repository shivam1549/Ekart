import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

function Addtenant() {
  return (
    <div className="container-scroller">
    <div>home</div>
    <Navbar/>
    <div className="container-fluid page-body-wrapper">
      <Sidebar/>
      <div className="main-panel">
       <div className='content-wrapper'>
       <div className="row">
       <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Default form</h4>
                  <p class="card-description">
                    Basic form layout
                  </p>
                  <form class="forms-sample">
                    <div class="form-group">
                      <label for="exampleInputUsername1">Add Tenant Name</label>
                      <input type="text" class="form-control" id="addtenantname" placeholder="Username" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">First Name</label>
                      <input type="text" class="form-control" id="fname" placeholder="Email" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Last Name</label>
                      <input type="text" class="form-control" id="lname" placeholder="Password" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputConfirmPassword1">Address 1</label>
                      <input type="text" class="form-control" id="address1" placeholder="Password" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputConfirmPassword1">Address 2</label>
                      <input type="text" class="form-control" id="address2" placeholder="Password" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Contact</label>
                      <input type="text" class="form-control" id="contact" placeholder="Password" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Cin</label>
                      <input type="cin" class="form-control" id="cin" placeholder="Password" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">GST</label>
                      <input type="gst" class="form-control" id="gst" placeholder="Password" />
                    </div>
                   
                    <button type="submit" class="btn btn-primary mr-2" id="submitform">Submit</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
       </div> 
        </div> 

        <Footer/>
      </div>
    </div>
  </div>
  )
}

export default Addtenant