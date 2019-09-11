import React, {Component} from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements'
import Axios from 'axios';

class CheckoutForm extends Component {
    constructor(props) {
      super(props);
      this.submit = this.submit.bind(this);
    }
  
    async submit(ev) {
      // User clicked submit
      let {token} = await this.props.stripe.createToken({name: "supp2u"});
      console.log(token.id)
      Axios.post(`${process.env.REACT_APP_BACKEND_URL}charges`, {token:token.id, amount:500})
        .then(res => {
          console.log(token, token.id)
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    }
  
    render() {
      return (
        <div className="checkout">
          <p>Would you like to complete the purchase?</p>
          <CardElement />
          <button onClick={this.submit}>Send</button>
        </div>
      );
    }
  }
  
  export default injectStripe(CheckoutForm);