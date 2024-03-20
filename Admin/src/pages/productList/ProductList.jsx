import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { deleteProduct, getProducts } from '../../redux/apiCalls';
import { Link } from 'react-router-dom';

const ProductList = () => {
  // const [data, setData] = useState();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products)
  useEffect(() => {
    getProducts(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    deleteProduct(id, dispatch)
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
                    <h4 className="card-title">Manage Products</h4>
                   
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>
                              Id
                            </th>
                            <th>
                              Product Name
                            </th>
                            <th>
                              Stock
                            </th>
                            <th>
                              Price
                            </th>
                            <th>
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((product) => (


                            <tr key={product._id}>
                              <td className="py-1">
                               
                                <img src={product.img || ""} alt="image" />
                              </td>
                              <td>
                                {product.title}
                              </td>
                              <td>
                                <span className='badge badge-primary'>{product.inStock}</span>
                              </td>
                              <td>
                                $ {product.price}
                              </td>
                              <td>
                                <Link to={"/product/" + product._id} className='badge badge-inverse-success'>Edit<i class="mdi mdi-delete-forever"></i></Link>

                                <button className='badge badge-danger' onClick={() => handleDelete(product._id)}>Delete <i class="mdi mdi-lead-pencil"></i></button>
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

export default ProductList