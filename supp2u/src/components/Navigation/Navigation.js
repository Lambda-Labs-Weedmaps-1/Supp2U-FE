import React from 'react';
import { NavLink, Link } from "react-router-dom";
import {auth} from "../../utils/init";
import {Button} from "reactstrap";
import BusinessNav from "./BusinessNav";
import CustomerNav from "./CustomerNav";
import { withRouter } from 'react-router';

function Navigation(props) {
    let renderLogInLogOut = () => {
        if (localStorage.getItem('customer_id') || localStorage.getItem('business_id') || localStorage.getItem('user_id')) {
            return (<Button color="primary" onClick={auth.logout}>
                Sign out
            </Button>)
        }else{
            return (<Button color="primary" onClick={ () => auth.login(props.history)}>
                Sign In / Sign Up
            </Button>)
        }
    };

    let renderUserType = () => {
        if (localStorage.getItem('customer_id') && localStorage.getItem('customer_id')) {
            return (
                <CustomerNav />
            )
        }else if(localStorage.getItem('business_id') && localStorage.getItem('business_id')){
            return (
                <BusinessNav />
                )
        }else{
            return (<Link className="Link" to="/"></Link>)
        }
    };

    return (
        <div>
        <nav className="Navigation">
          <h1 className="NavTitle">supp2u</h1> 
            {renderUserType()}
          <Link className="Link" to="/home">Home</Link>
          {/* <NavLink className="Link" to="/business/reviews/add">Add Business Review</NavLink> */}
          {/* <NavLink className="Link" to="/businesses/create">Create Your Business</NavLink> */}
            {renderUserType()}
            {renderLogInLogOut()}
        </nav>  
      </div>
    )
};

export default withRouter(Navigation);
