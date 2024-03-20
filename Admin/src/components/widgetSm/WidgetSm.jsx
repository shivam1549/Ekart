import React, { useEffect, useState } from 'react'
import { userRequest } from '../../requestMethod'

const WidgetSm = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get("users/?new=true")
                setUsers(res.data);
            } catch (err) {

            }
        }
        getUsers();
    }, [])
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-title">New Joined Customers</p>
                <ul className="icon-data-list">
                    {users.map((user)=>(


                
                    <li key={user._id}>
                        <div className="d-flex">
                            <img src={user.img || ""} alt="user" />
                            <div>
                                <p className="text-info mb-1">{user.username}</p>
                                
                            </div>
                        </div>
                    </li>
                        ))}
                </ul>
            </div>
        </div>

    )
}

export default WidgetSm