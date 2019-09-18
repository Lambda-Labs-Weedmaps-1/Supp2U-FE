import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import CheckoutForm from '../Stripe/stripe'
import './CustomerCart.sass'
import { businessGet } from './../../reducers/businessReducer';

function CustomerCart(props) {

  const [customer, setCustomer] = useState([{}]);
  const [cart, setCart] = useState([{}]);
  const [cartlist, setCartlist] = useState([{}]);
  
  let custy = localStorage.getItem("customer_id");
  let user_id = localStorage.getItem("user_id");
  let businy = null;

  useEffect(() => {
    
    Axios.get(`${process.env.REACT_APP_BACKEND_URL}users/${user_id}/customers`)
      .then(res =>{
          setCustomer(res.data)
      })
      .catch(err =>{
          console.log('ERROR GETTING CUSTOMER\n', err)
      })
    
    Axios.get(`${process.env.REACT_APP_BACKEND_URL}customers/${custy}/carts`)
    .then( async res => {
        await setCart(res.data);
        console.log('carty the cart cart ', cart);
        getList(res.data)
        console.log(res.data.business_id)
        businy = res.data.business_id;

    })
    .catch( error => {
        console.log('ERROR PULLING CUTOMER CART INFO', error)
    });


  }, [])

  const totals = cartlist =>{
    let total = 0.00
    console.log(cartlist);
    cartlist.map( stuff => {
      total = total+stuff.price
    })
    return total.toFixed(2);
  }

  const getList = data => {
    console.log('data',data)
    Axios.get(`${process.env.REACT_APP_BACKEND_URL}carts/${data.id}/itemfetch`)
        .then(res => {
          setCartlist(res.data)
          console.log('cartlist the cartlist', cartlist)
        })
        .catch( error => {
          console.log('ERROR PULLING Cart Log', error )
        })
  }

  const placeOrder = () => {
    console.log('getlist at checkout', cart.business_id)
    
    let orderInfoSend = {
      "customer_id": custy,
      "business_id": cart.business_id
    }

    Axios.post(`${process.env.REACT_APP_BACKEND_URL}customers/${custy}/orders`, orderInfoSend)
    .then(res => {
      console.log('order sent', res)
      window.location.href = "/success"
    })
    .catch( err => {
      console.log('order failed')
    })
  }

  const gobackprev = () => {
    window.location.href = `/business/${cart.business_id}/order`
  }

  return (
    <div className="centerOrder">
     
      { cart.item_numbers == undefined ? <p>Number of Items in Cart: 0</p> :
      <div>
        <h2>Number of Items in Cart: {cart.item_numbers.length}</h2>
        <h3>Your Cart</h3>
        
        <button className="buttony" onClick={gobackprev}>Go Back to Menu / Add More Items</button>
      </div> 
      }

      { cart.id === null ? <p>No Cart Avliable</p> : <p></p> }        

      <div className="cart-order-showcase">
            {cartlist > 0 ? <p>Cart IS EMPTY!</p> :
            cartlist.map( stuff => {
              return(
                <div className="cart-order-box">
                  <div className="cart-order-box-1">
                    <p>{stuff.item_name}</p>
                  </div>
                  <div className="cart-order-box-2">
                    <p>{stuff.price}</p>
                  </div>
                </div>
              )
              
            })}
      </div>

      <br></br><br></br>
      

      <div className="checkoutbox">
          <h3>Order Total: $ {totals(cartlist)} </h3>
          <CheckoutForm amount={totals(cartlist)} business_id={props.match.params.id} callback={placeOrder} />
          {/* <button onClick={placeOrder}>Place Order</button> */}
      </div>

      <br></br><br></br>
    </div>
    
  )
}

export default CustomerCart