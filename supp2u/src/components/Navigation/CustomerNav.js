import React from 'react';
import { NavLink, Link } from "react-router-dom";

const CustomerNav = () => {

    return (
        <div>
            <Link className="Link" to="/customer/create">Create Customer</Link>
        </div>
    );

}

export default CustomerNav;