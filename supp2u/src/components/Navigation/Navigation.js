import React from 'react';
import { Route, Link } from "react-router-dom";
import App from "../../App";

export default function Navigation() {
    return (
      <div>
        <nav className="Navigation">
          <h1>Supp2U</h1> 
          <Link className="Link" to="/">Home</Link>
        </nav>  
        <Route exact path="/" component={App} />
      </div>
    )
}