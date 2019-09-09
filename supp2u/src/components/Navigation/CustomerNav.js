import React from 'react';
import { Link } from "react-router-dom";

const CustomerNav = () => {

    return (
        <div>
            <Link className="Link" to="/customer/view">View Customer</Link>
        </div>
    );

}

export default CustomerNav;