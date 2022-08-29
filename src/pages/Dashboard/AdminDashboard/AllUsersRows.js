import React from 'react';
import { toast } from "react-toastify";

const AllUsersRows = ({ user, refetch, index }) => {
    const { name, email, role } = user;
    console.log(email, role);
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log(res);
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`Successfully made an admin`);
                }
            })
    }

    return (
        <tr>
            <th className='bg-orange-300'>{index + 1}</th>
            <td className='bg-pink-600'>{name}</td>
            <td className='bg-orange-400'>{email}</td>
            <td className='bg-pink-600'>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>

            {/* <td>
                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                {(a.price && a.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                </div>}
                            </td> */}
        </tr>
    );
};

export default AllUsersRows;