import React from "react"
import {Route} from "react-router-dom";
// routes import
import Profile from "./components/profile/show";
import Navigation from './components/Navigation/Navigation'
import BusinessListVew from './views/BusinessListView'
import BusinessCreator from './components/Business/BusinessCreator'

export default () =>{
  return <>
        <Route path={"/"} component={Navigation}/>
        {/*<Route path={"/profile"} component={Profile}/>*/}
        <Route path={"/profile"} component={Profile}/>
        <Route path={"/businessview"} component={BusinessListVew} />
        <Route path="/newBusiness" exact component={BusinessCreator}/>
      </>
}