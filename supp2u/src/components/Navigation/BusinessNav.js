import React from 'react';
import { NavLink } from "react-router-dom";

const BusinessNav = () => {

    return (
        <div>
            <NavLink className="Link" to="/business/create">Create Business</NavLink>
        </div>
    );

}

export default BusinessNav;