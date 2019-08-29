import React from "react"
import {Route} from "react-router-dom";
import Profile from "./comp/profile";
import Navigation from "./comp/Navigation/Navigation";

export default () =>{

  return  <>
        <Route path={"/"} component={Navigation}/>
        {/*<Route path={"/profile"} component={Profile}/>*/}
        <Route path={"/profile"} component={Profile}/>
      </>
}