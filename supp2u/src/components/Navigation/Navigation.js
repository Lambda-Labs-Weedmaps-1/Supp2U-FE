import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/init";
import { Button } from "reactstrap";
import BusinessNav from "./BusinessNav";
import CustomerNav from "./CustomerNav";
import { withRouter } from "react-router";
import "./nav.sass";
import Image from "../../images/Image5.png"

function Navigation(props) {
  let renderLogInLogOut = () => {
    if (
      localStorage.getItem("customer_id") ||
      localStorage.getItem("business_id") ||
      localStorage.getItem("user_id")
    ) {
      return (
        <Button className="auth-button"  onClick={auth.logout}>
          Sign out
        </Button>
      );
    } else {
      return (
        <Button className="auth-button"  onClick={() => auth.login(props.history)}>
          Sign In / Sign Up
        </Button>
      );
    }
  };

  let renderUserType = () => {
    if (
      localStorage.getItem("customer_id") &&
      localStorage.getItem("user_id")
    ) {
      return <CustomerNav />;
    } else if (
      localStorage.getItem("business_id") &&
      localStorage.getItem("user_id")
    ) {
      return <BusinessNav />;
    } else {
      return;
    }
  };

  return (
    <div>
      <nav className="Navigation">
      <Link to={{ pathname: `/` }}>
        <img className="Navwidget" src={Image} alt="logo"/>
      </Link>
        {/* <img src={Image} alt="logo" width="15%" height="90%" /> */}
        {/* <Link className="Link" to="/">
          Home
        </Link> */}
        {renderUserType()}
        <div>
          {renderLogInLogOut()}
        </div>
        
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
