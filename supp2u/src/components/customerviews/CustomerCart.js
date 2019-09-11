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

    })
    .catch( error => {
        console.log('ERROR PULLING CUTOMER CART INFO', error)
    });

    Axios.get(`${process.env.REACT_APP_BACKEND_URL}carts/1/itemfetch`)
    .then(res => {
      setCartlist(res.data)
      console.log('cartlist the cartlist', res.data)
    })
    .catch( error => {
      console.log('ERROR PULLING Cart Log', error )
    })

  }, [])

  // const getList = event => {
  //   Axios.get(`${process.env.REACT_APP_BACKEND_URL}carts/${cart.id}/itemfetch`)
  //       .then(res => {
  //         setCartlist(res.data)
  //         console.log('cartlist the cartlist', cartlist)
  //       })
  //       .catch( error => {
  //         console.log('ERROR PULLING Cart Log', error )
  //       })
  // }

  return (
    <div>
      {/* {getList()} */}
      <h1 className="name-box"> {customer[0].custname} </h1>
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

      </div>
    </div>
  )
}

export default CustomerCart