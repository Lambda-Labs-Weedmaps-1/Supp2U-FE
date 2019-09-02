import React from "react"
import {Route} from "react-router-dom";
//Routes
import Profile from "./components/profile/show";
import Navigation from './components/Navigation/Navigation'
import BusinessListVew from './views/BusinessListView'
import Review from "./components/Reviews"
import BusinessCreator from './components/Business/BusinessCreator'
import Auth0 from './components/Auth0';
import MenuCreator from './components/Menu/MenuCreator'
import AddCustomer from "./components/Customer/Add";


export default () =>{
  return <>
        <Route path={"/"} component={Navigation}/>
        {/*<Route path={"/profile"} component={Profile}/>*/}
        <Route path={"/profile"} component={Profile}/>
        <Route path={"/profile/new/customer"} component={AddCustomer}/>
        <Route path={"/business/view"} component={BusinessListVew} />
        <Route path={"/business/reviews"} component={Review} />
        <Route path="/business/create" exact component={BusinessCreator}/>
        <Route path="/login" exact component={Auth0}/>
        <Route path="/menu/new" exact component={MenuCreator} />
      </>
}