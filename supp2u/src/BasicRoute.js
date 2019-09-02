import React from "react"
import {Route} from "react-router-dom";
import Profile from "./components/profile/show";
import Navigation from './components/Navigation/Navigation'
import BusinessListVew from './views/BusinessListView'
import Review from "./components/Reviews"
import BusinessCreator from './components/Business/BusinessCreator'
import CustomerCreator from './components/Customers/CustomerCreator'
import Auth0 from './components/Auth0';

export default () =>{
  return <>
        <Route path={"/"} component={Navigation}/>
        {/*<Route path={"/profile"} component={Profile}/>*/}
        <Route path={"/profile"} component={Profile}/>
        <Route path={"/business/view"} component={BusinessListVew} />
        <Route path={"/business/reviews"} component={Review} />
        <Route path="/business/create" exact component={BusinessCreator}/>
        <Route path="/login" exact component={Auth0}/>
        <Route path="/customer/create" exact component={CustomerCreator}/>
      </>
}