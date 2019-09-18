import React, { useState } from "react";

const FoodCard = ({ movie }) => {

  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <p>({movie.Year})</p>
    </div>
  );
};

export default FoodCard;
