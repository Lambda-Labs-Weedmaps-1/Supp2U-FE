import React from "react"
import {Route} from "react-router-dom";
import Profile from "./components/profile";
import Navigation from './components/Navigation/Navigation'

export default () =>{

  return  <>
        <Route path={"/"} component={Navigation}/>
        {/*<Route path={"/profile"} component={Profile}/>*/}
        <Route path={"/profile"} component={Profile}/>
      </>
}