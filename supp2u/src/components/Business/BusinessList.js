import React, { useEffect, useState } from 'react';
import BusinessCard from '../Search/BusinessCard';
import { MdMoreHoriz } from 'react-icons/md';
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
  }, [props.location.search]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      }}
    >
      {businesses.length ? (
        businesses.map(business => {
          return <BusinessCard key={business.name} business={business} />;
        })
      ) : (
        <div className="info" style={{ width: '50%' }}>
          <h2>
            Looks like we couldn't come up with anything for your last search.
            No worries though if you try a new search, we'll come up with
            something for you ASAP!
          </h2>
          <h3 style={{ fontFamily: 'Work Sans' }}>
            Here's some popular search terms to get you some of Denver's finest.
          </h3>
          <span>
            <b>
              Pasta <MdMoreHoriz /> Pizza <MdMoreHoriz /> Tacos <MdMoreHoriz />{' '}
              Salad <MdMoreHoriz /> Cheese Burger <MdMoreHoriz /> Sushi
            </b>
          </span>
        </div>
      )}
    </div>
  );
}
