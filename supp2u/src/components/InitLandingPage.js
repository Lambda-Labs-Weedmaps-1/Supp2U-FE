import React from "react";
import { connect } from "react-redux";

import { BusinessList } from "../components/Business/BusinessList"
import { getBusinessInfo } from "../actions/getBusiness"

class InitLandingPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    
  }

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
        <br></br><hr></hr><br></br>
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
