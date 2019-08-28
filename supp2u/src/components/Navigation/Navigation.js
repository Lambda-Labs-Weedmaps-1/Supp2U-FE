import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
      <div>
        <nav className="Navigation">
          <h1 className="NavTitle" >supp2u</h1> 
          <NavLink className="Link" to="/">Home</NavLink>
        </nav>  
      </div>
    )
}