import React, {  useState } from 'react'
import { useDispatch } from 'react-redux';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { addCategory} from '../../redux/apiCalls';



const NewCategory = () => {

    const dispatch = useDispatch();
   
    const [inputs, setInputs] = useState({});
  

    const handleChange = (e) => {
        if(e.target.name === "name"){
            const formattedUrl = e.target.value.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-");
            setInputs(prev => {
                return { ...prev, 
                    url: formattedUrl,
                    [e.target.name]: e.target.value 
                }
            })
        }else{
            setInputs(prev => {
                return { ...prev, [e.target.name]: e.target.value }
            })
        }
       
    }

    const handleClick = (e) => {
        e.preventDefault();
        const category = { ...inputs };
        addCategory(category, dispatch)

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
                                        <h4 className="card-title">Add New category</h4>
                                        <p className="card-description">Add New category</p>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1">Name</label>
                                            <input name="name" type="text" className="form-control" id="exampleInputName1" placeholder="Name" onChange={handleChange} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword4">Slug</label>
                                            <input name="url" type="text" className="form-control" id="exampleInputPassword4" placeholder="URL" value={inputs.url} onChange={handleChange} />
                                        </div>


                                        <div className="form-group">
                                            <label htmlFor="exampleTextarea1">Description</label>
                                            <textarea name="description" className="form-control" id="exampleTextarea1" onChange={handleChange} rows="4"></textarea>
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

export default NewCategory