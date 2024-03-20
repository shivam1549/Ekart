import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase';
import { addProduct, updateProduct } from '../../redux/apiCalls';
import { useLocation } from 'react-router-dom'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../Footer'


const Product = () => {
  const location = useLocation()
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const productId = location.pathname.split("/")[2];
  const product = useSelector((state) =>
    state.product.products.find(product => product._id === productId)
  );

  const [inputs, setInputs] = useState({
    title: product.title || '',
    price: product.price || '',
    categories: product.categories || '',
    desc: product.desc || '',
    inStock: product.inStock ? 'true' : 'false',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  console.log(inputs)
  const handleSubmit = (e) => {
    const id = product._id;
  
    e.preventDefault();
    // updateProduct()
    if (file) {
      const filename = new Date().getTime() + file.name;
      const storage = getStorage(app)
      const storageRef = ref(storage, filename);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const product = { ...inputs, img: downloadURL };
            updateProduct(id, product, dispatch)
          });
        }
      );
    }
    else{
      const product = { ...inputs};
      updateProduct(id, product, dispatch)
    }
  }
  return (

    <div className="container-scroller">

      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className='row'>
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Edit Product Details</h4>
                    <p className="card-description">
                      {product.title}
                    </p>
                    <form className="forms-sample">
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Product Title</label>
                        <input
                          onChange={handleChange}
                          name="title"
                          type="text"
                          className="form-control"
                          value={inputs.title}
                          id="exampleInputUsername1"
                          placeholder="Username"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Price</label>
                        <input
                          onChange={handleChange}
                          name="price"
                          type="number"
                          className="form-control"
                          value={inputs.price}
                          id="exampleInputEmail1"
                          placeholder="Price"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword4">Categories</label>
                        <input
                          type="text"
                          value={inputs.categories}
                          className="form-control"
                          onChange={(e) => setInputs((prev) => ({ ...prev, categories: e.target.value }))}
                          id="exampleInputPasswor24"
                          placeholder="Jeans, Tshirt"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Description</label>
                        <textarea
                          name="desc"
                          type="text"
                          className="form-control"
                          onChange={handleChange}
                          value={inputs.desc}
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputUsername1">In Stock</label>
                        <select
                          name="inStock"
                          id=""
                          value={inputs.inStock}
                          className="form-control"
                          onChange={handleChange}
                        >
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </div>


                      <div className="form-group">
                        <label>File upload</label>
                        <input type="file" name="img" onChange={e => setFile(e.target.files[0])} className="" />
                        <br />
                        <img style={{ width: '120px' }} src={product.img} alt="" />
                      </div>


                      <button onClick={handleSubmit} className="btn btn-primary mr-2">Submit</button>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Product