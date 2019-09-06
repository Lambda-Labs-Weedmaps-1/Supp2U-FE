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
import EditReviewPresentation from './components/Reviews/edit'
import BusinessSingleView from './components/Business/BusinessSingleView'
import AddCustomer from "./components/Customer/Add";
import CustomerView from "./components/customerviews/CustomerView";
import InitLandingPage from "./components/InitLandingPage"
import BusinessUpdater from "./components/Business/BusinessUpdater";
import Map from './components/googleMap/Map'


export default () =>{
  return <>
        <Route path={"/login"} exact component={Auth0}/>
        <Route path={"/home"} component={Map}/>
        <Route path={"/profile"} component={Profile}/>
        {/* Business */}
        <Route path={"/businesses/create"} exact component={BusinessCreator}/>
        {/* Differentiation needed per the routes already in use */}
        <Route exact path={"/business/view"} exact component={BusinessListVew} />
        <Route exact path={"/business/reviews"} exact component={Review} /> {/* TODO delete this route, as this was created just for testing purposes*/}
        
        <Route path={"/business/:id"} exact component={BusinessSingleView} />
        <Route path={"/review/:id"} exact component={EditReviewPresentation} />

        <Route path={"/business/update/:id"} exact component={BusinessUpdater}/>
        {/* Customer */}
        <Route path={"/register/customer"} component={AddCustomer}/>
        <Route path={"/profile/new/customer"} component={AddCustomer}/>
        <Route path={"/customer/create"} exact component={CustomerCreator}/> {/* have a single way of creating customer */}
        <Route path={"/customer/view"} exact component={CustomerView}/>
        {/* Menu */}
        <Route path={"/menu/new"} exact component={MenuCreator} />
        <Route path={"/schedule/create"} exact component={ScheduleCreator}/>
        {/* registration */}
        <Route path={"/registration"} exact component={InitLandingPage} />
      </>
}