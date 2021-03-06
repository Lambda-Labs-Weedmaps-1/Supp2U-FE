import React from "react";
import { connect } from "react-redux";

import { BusinessList } from "../BusinessList"
import { getBusinessInfo } from "../../../actions/getBusiness"

class BusinessListView extends React.Component {

  componentDidMount() {
    this.props.getBusinessInfo();
  }

  render() {
    // if (this.props.gettingBusinesses) {
    //   <h2>Fetchingyar business data...</h2>;
    // }
    return (
      <div>
        <BusinessList businesses={this.props.businesses} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('businessListView state',state);
  return {
    businesses: state.businessGet.businesses,
    error: state.businessGet.error,
    gettingBusinesses: state.businessGet.gettingBusinesses
  };
};

export default connect(
  mapStateToProps,
  { getBusinessInfo }
)(BusinessListView);
