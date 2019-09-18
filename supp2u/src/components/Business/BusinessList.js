import React, { useEffect, useState } from 'react';
import BusinessCard from '../Search/BusinessCard';
import axios from 'axios';

export default function BusinessList(props) {
  // console.log(props);
  // console.log(props.location.search.split('=')[1]);
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
        console.log(response.data[0], response.data[1]);
        setBusinesses(response.data[0].concat(response.data[1]));
        // this.results.push(...response.data.guides);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {businesses.map(business => {
        return <BusinessCard key={business.name} business={business} />;
      })}
    </div>
  );
}

// export BusinessList;
