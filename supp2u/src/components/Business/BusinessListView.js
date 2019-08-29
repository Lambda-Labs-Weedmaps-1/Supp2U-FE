// import React from "react";
// import { connect } from "react-redux";

// import { CharacterList } from "../components";
// import { getCharacters } from "../actions";

// class BusinessListView extends React.Component {
//   constructor() {
//     super();
//   }

//   componentDidMount() {
//     this.props.getBusinesses();
//   }

//   render() {
//     if (this.props.fetching) {
//       <h2>Fetching business data...</h2>;
//     }
//     return (
//       <div>
//         <BusinessList businesses={this.props.businesses} />;
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     businesses: state.businsReducer.businesses,
//     error: state.businsReducer.error,
//     fetching: state.businsReducer.fetching
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getBusinesses }
// )(BusinessListView);
