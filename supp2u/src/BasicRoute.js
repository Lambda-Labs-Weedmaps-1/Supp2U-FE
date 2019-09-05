import React from "react"
import {Route} from "react-router-dom";
//Routes
import Profile from "./components/profile/show";
import Navigation from './components/Navigation/Navigation'
import BusinessListVew from './views/BusinessListView'
import Review from "./components/Reviews"
import BusinessCreator from './components/Business/BusinessCreator'
import ScheduleCreator from './components/Business/ScheduleCreator'
import CustomerCreator from './components/Customers/CustomerCreator'
import Auth0 from './components/Auth0';
import MenuCreator from './components/Menu/MenuCreator'
import BusinessSingleView from './components/Business/BusinessSingleView'
import AddCustomer from "./components/Customer/Add";
import CustomerView from "./components/customerviews/CustomerView";
import InitLandingPage from "./components/InitLandingPage"


export default () =>{
  return <>
        <Route path="/login" exact component={Auth0}/>
        <Route path={"/"} component={Navigation}/>
        <Route path={"/profile"} component={Profile}/>
        {/* Business */}
        <Route path="/business/:id" exact component={BusinessSingleView} />
        <Route path={"/business/view"} component={BusinessListVew} />
        <Route path={"/business/reviews"} component={Review} />
        <Route path="/business/create" exact component={BusinessCreator}/>
        {/* Customer */}
        {/* <Route path={"/register/customer"} component={AddCustomer}/> */}
        {/* <Route path={"/profile/new/customer"} component={AddCustomer}/> */}
        <Route path="/customer/create" exact component={CustomerCreator}/>
        <Route path="/customer/view" exact component={CustomerView}/>
        {/* Menu */}
        <Route path="/menu/new" exact component={MenuCreator} />
        <Route path="/schedule/create" exact component={ScheduleCreator}/>
        <Route path="/registration" exact component={InitLandingPage} />
      </>
}