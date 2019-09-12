import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function CustomerCart(props) {

  const [customer, setCustomer] = useState([{}]);
  const [cart, setCart] = useState([{}]);
  const [cartlist, setCartlist] = useState([{}]);
  
  let custy = localStorage.getItem("customer_id");
  let user_id = localStorage.getItem("user_id");

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

    })
    .catch( error => {
        console.log('ERROR PULLING CUTOMER CART INFO', error)
    });


  }, [])

  const whatever = cartlist =>{
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

  const placeOrder = info => {
    let orderInfoSend = {
      "customer_id": custy,
      "business_id": props.match.params.id
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

  return (
    <div>
      {/* {getList()} */}
      <h1 className="name-box"> {customer.custname} </h1>
      { cart.item_numbers == undefined ? <p>Number of Items in Cart: 0</p> :
            <h2>Number of Items in Cart: {cart.item_numbers.length}</h2> }
      <div>
        
        <h3>Your Cart</h3>
        <div>

          {cart.id === null ? <p>no cart avliable</p> :
          <div>
            <p>Cart Now Available</p>
          </div> 
          }

          {cartlist > 0 ? <p>Cart IS EMPTY!</p> :
          cartlist.map( stuff => {
            return(
              <p>{stuff.item_name} - {stuff.price}</p>
            )
            
          })}
        </div>
        <h3>Order Total: $ {whatever(cartlist)} </h3>
        <button onClick={placeOrder}>Place Order</button>

          <br></br><br></br>
      </div>
    </div>
  )
}

export default CustomerCart