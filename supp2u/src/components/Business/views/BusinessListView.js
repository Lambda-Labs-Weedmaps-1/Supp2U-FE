import React from 'react';
import { connect } from 'react-redux';

<<<<<<< HEAD:supp2u/src/views/BusinessListView.js
import { BusinessList } from '../components/Business/BusinessList';
import { getBusinessInfo } from '../actions/getBusiness';

class BusinessListView extends React.Component {
	componentDidMount() {
		this.props.getBusinessInfo();
	}

	render() {
		// if (this.props.gettingBusinesses) {
		//   <h2>Fetching business data...</h2>;
		// }
		return (
			<div>
				<BusinessList businesses={this.props.businesses} />;
			</div>
		);
	}
=======
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
>>>>>>> 8c57698cf03e84fa277a1867baec5405dd3c60f1:supp2u/src/components/Business/views/BusinessListView.js
}

const mapStateToProps = state => {
	console.log('businessListView state', state);
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
