import React from "react";

import Business from "./Business";

export const BusinessList = props => {
  return (
    <ul>
      {props.businesses.map(business => {
        return <Business key={business.name} business={business} />;
      })}
    </ul>
  );
};


