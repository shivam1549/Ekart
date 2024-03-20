import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { useLocation } from 'react-router-dom';
import { updateCategory} from '../../redux/apiCalls';

const Category = () => {

    const location = useLocation();
    const dispatch = useDispatch();

    const categoryId = location.pathname.split("/")[2];
    const category = useSelector((state) =>
      state.category.categories.find(category => category._id === categoryId)
    );
  
    const [inputs, setInputs] = useState({
      name: category.name || '',
      url: category.url || '',
      description: category.description || '',
    });

    const handleChange = (e) => {
        if (e.target.name === "name") {
            const formattedUrl = e.target.value.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-");
            setInputs(prev => {
                return {
                    ...prev,
                    url: formattedUrl,
                    [e.target.name]: e.target.value
                }
            })
        } else {
            setInputs(prev => {
                return { ...prev, [e.target.name]: e.target.value }
            })
        }

    }

    const handleClick = (e) => {
        const id = categoryId;
        e.preventDefault();
        const category = { ...inputs };
        updateCategory(id, category, dispatch)

    }
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
                                        <h4 className="card-title">Edit category</h4>
                                        <p className="card-description">Edit category</p>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1">Name</label>
                                            <input name="name" type="text" onChange={handleChange} value={inputs.name} className="form-control" id="exampleInputName1" placeholder="Name" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword4">Slug</label>
                                            <input name="url" type="text" onChange={handleChange} value={inputs.url} className="form-control" id="exampleInputPassword4" placeholder="URL" />
                                        </div>


                                        <div className="form-group">
                                            <label htmlFor="exampleTextarea1">Description</label>
                                            <textarea name="description" className="form-control" id="exampleTextarea1" onChange={handleChange}  rows="4">{inputs.description}</textarea>
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

export default Category