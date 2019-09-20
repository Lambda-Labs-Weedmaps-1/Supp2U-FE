import React, {useEffect , useState} from 'react'
import Axios from 'axios'
import './menu.sass'

function MenuOrder(props) {
    //these items are set and then mapped over
    const [items, setItem] = useState([{ }])
    const [cart, setCart] = useState([{}])

    // let businessy = props.match.params.id;
    let businessy = props.businy;
    let custy = localStorage.getItem("customer_id");
    

    console.log('inc props', props)

    useEffect( () => {
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}menus/${props.props}/items`)
        .then(res => {
            setItem(res.data)
            console.log('items', items)
        }).catch(error =>{
            console.log('ERROR getting menu...\n',error);
        });


        let cartInfo = {
            "customer_id" : custy,
            "business_id" : businessy 
        }

        Axios.post(`${process.env.REACT_APP_BACKEND_URL}customers/${custy}/carts`, cartInfo)
        .then( res => {
            setCart(res.data);
            console.log('cart ', cart);
            
        })
        .catch( error => {
            console.log('ERROR! MAKING CART FOR CUSTOMER', error)
        });

    }, [businessy, cart, custy, items, props.props])

    const addToCart = item =>{
        // e.preventDefault()
        let itemy = { "item_number": item }

        console.log("Item Attempting Add to Cart!")
        console.log("Itemy: ", itemy)
        // console.log("CART INFOOOOOOOOOOOO", cart)

        Axios.put(
            `${process.env.REACT_APP_BACKEND_URL}carts/${cart.id}/add`, itemy
        )
        .then( res => {
            console.log('added item to cart', res)
            setCart(res.data)
            console.log('CART ITEMS',cart.item_numbers)
        })
        .catch ( error => {
            console.log('errer adding item', error)
        })
    }

    const orderCart = e =>{
        window.location.href = "customer/cart"
    }

    const quantifyitems = itemy => {
        let bob = 0;
        cart.item_numbers.forEach( holding => {
            if(holding === itemy) {
                bob++
            }
        })
        
        return bob;
    }
    
    if (businessy !== cart.business_id) {
        return (
            <div>
                <br></br><br></br>
            <p>You Already Have An Active Cart With Another Restauraunt</p>
            <p>Please click the Cart Link at the top of page to view!</p>
            </div>
        )
    }
    else {

    return (
        
        <div>
        
            { cart.item_numbers === undefined ? <p>Number of Items in Cart: 0</p> :
            <div className="centerOrder">
                <div className="check-info">
                <h3>Number of Items in Cart: {cart.item_numbers.length}</h3>
                <button onClick={orderCart}>Check Out Now !</button>
                </div>
            </div>
            }
            <br></br><br></br>
            <div>
                <div className="menu-order-showcase">
                    {items.map( item =>{ 
                        console.log('mapped item', item.id)
                        console.log('cart ', cart);
                        // let numby = 0;
                        return(
                        
                            <div className="menu-order-box">  
                                <div className="menu-order-box-1">
                                <p>{item.item_name}</p>
                                </div>
                                <div className="menu-order-box-1">
                                <p>{item.category}</p>
                                </div>
                                <div className="menu-order-box-1">
                                <p>${item.price}</p>
                                </div>
                                <div className="menu-order-box-2">
                                <button className="buttony" onClick={function() {addToCart(item.id)} }>Add Item</button>
                                { cart.item_numbers.includes(item.id) ? <p>Qty:{quantifyitems(item.id)}</p> : <p>Qty:0</p>}  
                                </div>

                            </div>

                        ) } )
                    }

                </div>
                
            </div>

            <br></br>
            { cart.item_numbers === undefined ? <p>Number of Items in Cart: 0</p> :
            <div className="centerOrder">
            <div className="check-info">
            <h3>Number of Items in Cart: {cart.item_numbers.length}</h3>
            <button onClick={orderCart}>Check Out Now !</button>
            </div>
        </div>
            }
            <br></br><br></br>
        </div>
    )
    }

}

export default MenuOrder
