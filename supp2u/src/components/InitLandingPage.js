import React from "react";
import { connect } from "react-redux";
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './Stripe/checkout'

class InitLandingPage extends React.Component {

  goCust = () => {
      window.location.href ='/customer/create'
  }

  goBus = () => {
    window.location.href ='/businesses/create'
}

  render() {
    // if (this.props.gettingBusinesses) {
    //   <h2>Fetching USER data...</h2>;
    // }
    return (
      <div>
        <h2>Register as a Customer</h2>
        <button onClick={this.goCust}>Customer</button>
        <br></br>
        <p>_____________________________________</p>
        <br></br>
        <h2>Register as a Business</h2>
        <button onClick={this.goBus}>Business</button>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {  
//   };
// };

export default connect(
//   mapStateToProps,
//   { }
)(InitLandingPage);
