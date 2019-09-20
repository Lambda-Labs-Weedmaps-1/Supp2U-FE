import React, { useEffect, useState} from 'react'
import Axios from 'axios'

import './BusinessOrders.sass'



function BusinessOrders(props) {
    
    let businy = localStorage.getItem("business_id")
   
    const [info, setInfo] = useState([{}])
    const [orders, setOrders] = useState({})
    
    

    useEffect(() => {
       
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${businy}`)
        .then(res =>{
            setInfo(res.data)
        })
        .catch(err =>{
            console.log('ERROR GETTING BUSINESS\n', err)
        })

        // Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${businy}/orders`)
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${businy}/orders`)
        .then(res => {
            setOrders(res.data)
        })
        .catch(err => {
            console.log('Error getting business ORDERS ', err)
        })
        
    }, [info, businy, setInfo])

    // Axios call that ships the order
    const orderDone = ( id ) =>{
        Axios.post(`${process.env.REACT_APP_BACKEND_URL}orders/${id}/ship`)
        .then(res => {
            console.log('Order Shipped ', res)
        })
        .then(alert('You have shipped your item?'))
        .then(window.location.reload())
        .catch( err => {
            console.log('Error Shipping Order', err)
        })
        
    }

    return (
        <div>
            { orders[0] == undefined ? <p>Loading the Orders...</p> :
            <div>
            <b>Your orders</b>
            <div>
                {/* there are 2 maps the first brings in the information about the order, the second brings in all the items for that order */}
                {orders.map(order => {
                    return (
                        <div>
                            <p>----------------------------------------------------</p>
                            <div className="order-info-header">
                                <p><b>Order ID:</b> <i>{order.id}</i></p>
                                <p><b>Order Customer:</b> <i>{order.customer_id}</i></p>
                            </div>
                            <p>Order Items:</p>
                            <p>_____________</p>
                            {order.items.map(inneritems => {
                                return(
                                    <div>
                                       <p>{inneritems.id} - {inneritems.name} - {inneritems.price}</p>
                                    </div>
                            
                                )
                            })}
                            <p>_____________</p>
                            <b>Order Status:</b> 
                            {/* the text will change color if it is pending or shipping */}
                            {order.status === "pending" ? 
                            <i className="color-red"> {order.status}</i> : 
                            <b className="color-black"> {order.status}</b>}<br />
                            {/* shipping button */}
                            <button className='buttonA' onClick={() => {
                                orderDone(order.id)} }>Complete & Ship</button>
                        </div>
                    )
                })}
            </div>
            </div>
            }
        </div>
    
    )
}

export default BusinessOrders
