import React, { useEffect, useState} from 'react'
import Axios from 'axios'

import './businessSingleView.sass'



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
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/1/orders`)
        .then(res => {
            setOrders(res.data)
            console.log(res.data)
            

        })
        .catch(err => {
            console.log('Error getting business ORDERS ', err)
        })
        
    }, [])


    const orderDone = id =>{

        Axios.post(`${process.env.REACT_APP_BACKEND_URL}orders/${id}/ship`)
        .then(res => {
            console.log('Order Shipped ', res)
        })
        .catch( err => {
            console.log('Error Shipping Order', err)
        })
        
    }

    return (
        <div>
            <h3>{info.name} Orders</h3>
            { orders[0] == undefined ? <p>Loading the Orders...</p> :
            <div>
            <h3>Orders are here</h3>
            <div>
                {orders.map(order => {
                    return (
                        <div>
                            <p>----------------------------------------------------</p>
                            <p>Order ID: {order.id}</p>
                            <p>Order Customer: {order.customer_id}</p>
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
                            <p>Order Status: {order.status}</p>
                            <button onClick={() => {orderDone(order.id)} }>Complete & Ship</button>
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
