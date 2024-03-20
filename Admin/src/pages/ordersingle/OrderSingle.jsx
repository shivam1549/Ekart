import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const OrderSingle = () => {
    const location = useLocation()
    const orderId = location.pathname.split("/")[2];
    const order = useSelector((state) =>
        state.order.orders.find(order => order._id === orderId)
    );

    const converDate = (dateString) => {
        const date = new Date(dateString);

        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return formattedDate;
    }

    return (
        <div className="container-scroller">

            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row">
                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Order</h4>
                                        <p className="card-description">
                                            View Order Details of Id: {order._id}
                                        </p>
                                        <div className="d-flex flex-wrap mb-5">
                                            <div className="mr-5 mt-3">
                                                <p className="text-muted">Order value</p>
                                                <h3 className="text-primary fs-30 font-weight-medium">$ {order.amount}</h3>
                                            </div>

                                            <div className="mr-5 mt-3">
                                                <p className="text-muted">User Id</p>
                                                <h3 className="text-primary fs-30 font-weight-medium">{order.userId}</h3>
                                            </div>
                                            <div className="mt-3">
                                                <p className="text-muted">Date</p>
                                                <h3 className="text-primary fs-30 font-weight-medium">{converDate(order.createdAt)}</h3>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h5>Shipping Address:</h5>
                                                <p>{order.address}</p>
                                            </div>
                                            
                                            <div className="col-md-6">
                                                <h5>Product Details</h5>
                                            <div className="table-responsive">
                                            <table className="table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th className="pl-0 pb-2 border-bottom">Product Name</th>
                                                        <th className="border-bottom pb-2">Quantity</th>
                                                        <th className="border-bottom pb-2">Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {order.products.map((product)=>(

                                                 
                                                    <tr>
                                                        <td className="pl-0">{product.productId}</td>
                                                        <td>
                                                            <p className="mb-0">
                                                                <span className="font-weight-bold mr-2">{product.quantity}</span>
                                                            </p>
                                                        </td>
                                                        <td className="text-muted">$ 65</td>
                                                    </tr>
                                                       ))}
                                                    {/* Add more rows as needed */}
                                                </tbody>
                                            </table>
                                        </div>
                                            </div>
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

export default OrderSingle