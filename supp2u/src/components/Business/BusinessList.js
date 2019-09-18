import React from 'react';
import BusinessCard from '../Search/BusinessCard';

export const BusinessList = props => {
  return (
    <div>
      {props.businesses.map(business => {
        return <BusinessCard key={business.name} business={business} />;
      })}
    </div>
  );
};
