import React from "react"
import {Route} from "react-router-dom";
import Profile from "./components/profile/show";
import Navigation from './components/Navigation/Navigation'
import BusinessListVew from './views/BusinessListView'
import Review from "./components/Reviews"
export default () =>{

  return  <>
        <Route path={"/"} component={Navigation}/>
        {/*<Route path={"/profile"} component={Profile}/>*/}
        <Route path={"/profile"} component={Profile}/>
        <Route path={"/businessview"} component={BusinessListVew} />
        <Route path={"/business/reviews"} component={Review} />
  </>
}