import React from "react";
import { Link } from "react-router-dom";
import CustomerOrderFinish from './../customerviews/CustomerOrderFinish';

const BusinessNav = () => {
  let business = localStorage.business_id;
  return (
    <div>
      <Link to={{ pathname: `/business/${business}` }} >View Business </Link>
      -
      <Link to={{ pathname: `/business/${business}/orderview` }} >Orders </Link>
      -
      <Link to={{ pathname: `/business/update/${business}` }} >Update Info </Link>
    </div>
  );
}

export default BusinessNav;
