import React from 'react';
import { NavLink } from "react-router-dom";
import {auth} from "../../utils/init";
import {Button} from "reactstrap";

export default function Navigation(props) {
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

    return (
      <div>
        <nav className="Navigation">
          <h1 className="NavTitle" >supp2u</h1> 
          <NavLink className="Link" to="/">Home</NavLink>
          <NavLink className="Link" to="/business/reviews/add">Add Business Review</NavLink>
          <NavLink className="Link" to="/business/create">Create Your Business</NavLink>
            {renderLogInLogOut()}
        </nav>  
      </div>
    )
};