import React, {Component} from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements'
import Axios from 'axios';
import './checkout.sass';
class CheckoutForm extends Component {
    constructor(props) {
      super(props);
      this.submit = this.submit.bind(this);
    }
  
    async submit(ev) {
      // User clicked submit
      let {token} = await this.props.stripe.createToken({name: "supp2u"});
      console.log(token.id)
      Axios.post(`${process.env.REACT_APP_BACKEND_URL}charges`, {token:token.id, amount:this.props.amount * 100, business_id:this.props.business_id})
        .then(res => {
          console.log(token, token.id)
          console.log(res)
          this.props.callback()
        })
        .catch(error => {
          console.log(error)
        })
    }
  
    render() {
      return (
        <div className="checkout">
          <p>Please enter your card information below.</p>
          <CardElement />
          <div className="card-info">
            <p className="1">Card Number</p>
            <p className="2">Exp. Date / CVC</p>
          </div>
          <button onClick={this.submit}>Place Order</button>
        </div>
      );
    }
  }
  
  export default injectStripe(CheckoutForm);