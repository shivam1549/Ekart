import React, { useEffect, useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase';
import { addProduct, getCategories } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

const NewProduct = () => {
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.category.categories)
    useEffect(() => {
        getCategories(dispatch)
    }, [dispatch])



    const handleChange = (e) => {
        setInputs(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleCat = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions);
      
        // Extract values from the selected options
        const selectedValues = selectedOptions.map((option) => option.value);

        // Set the state with the array of selected values
        setCat(selectedValues);
    }

    console.log(cat)

    const handleClick = (e) => {
        e.preventDefault();
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
                    const product = { ...inputs, img: downloadURL, categories: cat };
                    addProduct(product, dispatch)
                });
            }
        );

    }

    console.log(file)
    return (
        <div className="container-scroller">

            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row">
                            <div className="col-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Add New Product</h4>
                                        <p className="card-description">Add New Product</p>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1">Name</label>
                                            <input name="title" type="text" className="form-control" id="exampleInputName1" placeholder="Name" onChange={handleChange} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword4">Price</label>
                                            <input name="price" type="number" className="form-control" id="exampleInputPassword4" placeholder="Price" onChange={handleChange} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword4" >Categories</label>

                                            <select className="form-control" onChange={handleCat} multiple>
                                                {categories.map((category) => (
                                                    <option key={category._id} value={category.name}>{category.name}</option>
                                                ))}
                                            </select>

                                        </div>

                                        <div className="form-group">
                                            <label>File upload</label>
                                            <input type="file" name="img" onChange={e => setFile(e.target.files[0])} className="file-control" />

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputCity1">Stock</label>
                                            <select name="inStock" className='form-control' onChange={handleChange} id="">
                                                <option value="true">Yes</option>
                                                <option value="false">No</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleTextarea1">Description</label>
                                            <textarea name="desc" onChange={handleChange} className="form-control" id="exampleTextarea1" rows="4"></textarea>
                                        </div>
                                        <button onClick={handleClick} className="btn btn-primary mr-2">
                                            Submit
                                        </button>
                                        <button className="btn btn-light">Cancel</button>

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

export default NewProduct