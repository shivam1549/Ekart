import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders, updateOrder } from '../../redux/apiCalls'
import { Link } from 'react-router-dom'

const Orders = () => {
    const dispatch = useDispatch();
    const [input, setInputs] = useState()
    const orders = useSelector((state) => state.order.orders)
    useEffect(() => {
        getOrders(dispatch)
    }, [dispatch])
    console.log(orders);

    const converDate = (dateString) => {
        const date = new Date(dateString);

        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return formattedDate;
    }
    const handleChange = (e, orderId) => {
        const orderstat = e.target.value;
        updateOrder(orderId, orderstat, dispatch);
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
                                        <h4 className="card-title">All Orders</h4>
                                        <p className="card-description">
                                            View All Orders
                                        </p>
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Id
                                                        </th>
                                                        <th>
                                                            User Id
                                                        </th>
                                                        <th></th>
                                                        <th>
                                                            Status
                                                        </th>
                                                        <th>
                                                            Amount
                                                        </th>
                                                        <th>
                                                            Order Date
                                                        </th>
                                                        <th>

                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {orders.map((order) => (
                                                        <tr key={order._id}>
                                                            <td className="py-1">
                                                                {order._id}
                                                            </td>
                                                            <td>
                                                                {order.userId}
                                                            </td>
                                                            <td>
                                                                <select value={order.status} name="" id="" onChange={(e) => handleChange(e, order._id)} className="form-control">
                                                                    
                                                                    <option value="In Process">In Process</option>
                                                                    <option value="On Hold">On Hold</option>
                                                                    <option value="Delivered">Delivered</option>
                                                                    <option value="Canceled">Canceled</option>
                                                                    <option value="Return">Return</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <label class="badge badge-danger">{order.status}</label>
                                                            </td>
                                                            <td>
                                                                $ {order.amount}
                                                            </td>
                                                            <td>
                                                                {converDate(order.createdAt)}
                                                            </td>
                                                            <td>
                                                                <Link to={`/order/${order._id}`}>
                                                                <i class="mdi mdi-eye"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))}
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

export default Orders