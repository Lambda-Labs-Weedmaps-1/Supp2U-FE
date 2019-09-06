import React from 'react';
import { NavLink } from "react-router-dom";

const CustomerNav = () => {

    return (
        <div>
            <NavLink className="Link" to="/customer/create">Create Customer</NavLink>
        </div>
    );

}

export default CustomerNav;