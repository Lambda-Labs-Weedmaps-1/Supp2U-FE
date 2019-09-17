import React from "react";
import { Link } from "react-router-dom";
import CustomerOrderFinish from './../customerviews/CustomerOrderFinish';
import Auth0 from './../Auth0';

const BusinessNav = () => {
  let business = localStorage.business_id;
  return (
    <div>
      <Link to={{ pathname: `/business/${business}` }} >View Business </Link>
      --
      <Link to={{ pathname: `/business/${business}/orderview` }} >View Orders </Link>
      --
      <Link to={{ pathname: `/business/update/${business}` }} >Update Info </Link>
    </div>
  );
}

export default BusinessNav;
