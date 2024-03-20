import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Link, useLocation } from 'react-router-dom'
import Products from '../components/Products'
import './Categories.css'

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({})
    const[sort, setSort] = useState("newest")

    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }

    console.log(filters);

    return (
        
        <div>
            <Navbar />
            {/* <Announcement /> */}
            <div className='container-fluid pb-100 categories pt-100'>
                <div className="container">

                
                <div className='title'>
                    <h2>{cat}</h2>
                </div>
                <div className='filter row mb-3'>
                    <div className='col-md-6'>
                        <h5>Filter Products:</h5>
                        <div className='d-flex'>

                            <div className='w-25'>
                                <select className='form-control' name="color" onChange={handleFilters} id="">
                                    <option value="">--Color--</option>
                                    <option value="red">Red</option>
                                    <option value="black">Black</option>
                                </select>
                            </div>
                            <div className='w-25 mx-2'>
                                <select name="size" className='form-control' onChange={handleFilters} id="">
                                    <option value="">--Size--</option>
                                    <option value="M">Medium</option>
                                    <option value="S">Small</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 text-right'>
                        <h5>Sort By:</h5>
                        <div className='w-25 ml-auto mr-0'>
                            <select name="" className='form-control' id="" onChange={(e) => setSort(e.target.value)}>
                              
                                <option value="newest">Newest</option>
                                <option value="asc">Price ASC</option>
                                <option value="desc">Price DESC</option>
                            </select>
                        </div>
                    </div>
                </div>
                <Products cat={cat} filters={filters} sort={sort} />
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductList