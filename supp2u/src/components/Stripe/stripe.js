import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './checkout';

class Stripe extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_Lk7CkE4Yez5LYD3KvwJwoYN500AVGVDnfZ">
        <div className="example">
          <Elements>
            <CheckoutForm amount={this.props.amount} business_id={this.props.business_id} callback={this.props.callback}/>
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Stripe;