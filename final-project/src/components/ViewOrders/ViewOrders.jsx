import React from 'react';
import './ViewOrders.css'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

const ViewOrders = ({orders, deleteOrder}) => {
    return orders.map(order=>(

        <tr key={order.tourName}>
            <td>{order.tourName}</td>
            <td>{order.name}</td>
            <td>{order.phone}</td>
            <td className='delete-btn' onClick={()=>deleteOrder(order.tourName)}>
                <Icon icon={trash}/>
            </td>
        </tr>

    ))
}

export default ViewOrders;