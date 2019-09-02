import React from "react";
import {Route} from "react-router-dom";
import AddReview from "./add"

export default () =>{
    return <Route path={"/business/reviews/add"} component={AddReview}/>
}