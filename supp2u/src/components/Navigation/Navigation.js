import React from 'react';
import { NavLink } from "react-router-dom";
import {auth} from "../../utils/init";
import {Button} from "reactstrap";
import BusinessNav from "./BusinessNav";
import CustomerNav from "./CustomerNav";

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

    let renderUserType = () => {
        if (localStorage.getItem('customer_id') && localStorage.getItem('user_id')) {
            return (
                <CustomerNav />
            )
        }else if(localStorage.getItem('business_id') && localStorage.getItem('user_id')){
            return (
                <BusinessNav />
                )
        }else{
            return (<NavLink className="Link" to="/"></NavLink>)
        }
    };

    return (
      <div>
        <nav className="Navigation">
          <h1 className="NavTitle" >supp2u</h1> 
            {renderUserType()}
            {renderLogInLogOut()}
        </nav>  
      </div>
    )
};

{/* <NavLink className="Link" to=""></NavLink> */}