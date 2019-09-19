import React from 'react';
import moment from "moment";
import './order.sass';
import OrderItems from "./OrderItems";
import {Link} from 'react-router-dom'
export default ({order}) =>{
    if(!order.items){
        return <p>Loading..</p>
    }
    const orderItem = order.items.map(item => (<OrderItems item={item}/>));
    return(
        <div className={"order"}>
            <div className="order__header">
                <strong><p>Created at {moment(order.updated_at).format("MMM Do YYYY")}</p></strong>
                <strong><p>Status: {order.status}</p></strong>
            </div>
            <div className="order__body flex">
                <div className="order__items">
                    {orderItem}
                </div>
                <div className="order__links">
                    <Link to={`/business/${order.business_id}`}>Write Business review</Link>
                </div>
            </div>
        </div>
    )
}