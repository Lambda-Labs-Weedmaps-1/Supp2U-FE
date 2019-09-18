import { Link } from 'react-router-dom';
import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import SearchRoot from '../Search/SearchRoot';

const CustomerNav = () => {
  let custy = localStorage.customer_id;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '3.5%',
        paddingRight: '8px',
        justifyContent: 'space-evenly'
      }}
    >
      <Link
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '25px',
          marginBottom: '14px',
          justifyContent: 'space-around'
        }}
        to={{ pathname: `/customer/view` }}
      >
        My Profile{' '}
      </Link>

      <Link
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '25px',
          marginBottom: '14px',
          // marginTop: '1.5%',
          // paddingLeft: '20px',
          justifyContent: 'space-around'
        }}
        to={{ pathname: `/customer/view` }}
      >
        My Orders{' '}
      </Link>
    </div>
  );
};

export default CustomerNav;
