import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { deleteCategory, getCategories } from '../../redux/apiCalls'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CategoryList = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories)
    useEffect(() => {
        getCategories(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this user?",
            icon: "warning",
            dangerMode: true,
            
            showCancelButton: true,
          })
          .then(willDelete => {
            if (willDelete) {
                deleteCategory(id, dispatch)
            }
          });

        
    }
    return (
        <div className="container-scroller">

            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className='row'>
                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Manage Categories</h4>

                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Id
                                                        </th>
                                                        <th>
                                                            Category Name
                                                        </th>

                                                        <th>
                                                            Actions
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {categories.map((category) => (


                                                        <tr key={category._id}>
                                                            <td className="py-1">
                                                                {category._id}

                                                            </td>
                                                            <td>
                                                                {category.name}
                                                            </td>

                                                            <td>
                                                                <Link to={"/category/" + category._id} className='badge badge-info'>Edit<i class="mdi mdi-lead-pencil"></i></Link>

                                                                <button className='badge badge-danger' onClick={() => handleDelete(category._id)}>Delete <i class="mdi mdi-delete-forever"></i></button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    {/* Repeat the above structure for each row */}
                                                </tbody>
                                            </table>
                                        </div>
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

export default CategoryList