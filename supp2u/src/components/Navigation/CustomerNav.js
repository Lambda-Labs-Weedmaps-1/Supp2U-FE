import { Link } from "react-router-dom";
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'

const CustomerNav = () => {
  let custy = localStorage.customer_id;
  return (
    <div>
      <Link to={{ pathname: `/customer/view` }} >My Profile </Link>
      --
      <Link to={{ pathname: `/customer/view` }} >My Orders </Link>
      --
      <Link to={{ pathname: `/customer/cart` }} >Cart </Link>
    </div>
  );
}

export default CustomerNav;


