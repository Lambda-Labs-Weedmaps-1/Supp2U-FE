import React from "react";
import { connect } from "react-redux";

import Map from "../../components/googleMap/Map"

class Landing extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    
  }


  render() {
    
    return (
        <div className="Map_Holder">
            <Map />
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
)(Landing);
