import React, { useEffect, useState } from 'react'
import { userRequest } from '../../requestMethod'

const WidgetLg = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get("orders")
                setOrders(res.data);
            } catch (err) {

            }
        }
        getOrders();
    }, [])
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-title mb-0">Orders</p>
                <div className="table-responsive">
                    <table className="table table-striped table-borderless">
                        <thead>
                            <tr>
                                <th>User Id</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order)=>(

                            
                            <tr key={order._id}>
                                <td> {order.userId}</td>
                                <td className="font-weight-bold">${order.amount}</td>
                                <td>{order.createdAt}</td>
                                <td className="font-weight-medium">
                                    <div className="badge badge-success">{order.status}</div>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default WidgetLg