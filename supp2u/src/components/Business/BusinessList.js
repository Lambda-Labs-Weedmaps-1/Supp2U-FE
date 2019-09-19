import React, { useEffect, useState } from 'react';
import BusinessCard from '../Search/BusinessCard';
import axios from 'axios';

export default function BusinessList(props) {
  // let searchString = props.location.search.split('=')[1]
  const [businesses, setBusinesses] = useState([{}]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}search?query=${
          props.location.search.split('=')[1]
        }`
      )
      .then(response => {
        setBusinesses(response.data[0].concat(response.data[1]));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      }}
    >
      {businesses.map(business => {
        return <BusinessCard key={business.name} business={business} />;
      })}
    </div>
  );
}
