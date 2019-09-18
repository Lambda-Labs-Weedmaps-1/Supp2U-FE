import React from 'react';
import { Route } from 'react-router-dom';
//Routes
import BusinessCreator from './components/Business/BusinessCreator';
import ScheduleCreator from './components/Business/ScheduleCreator';
import CustomerCreator from './components/Customers/CustomerCreator';
import Auth0 from './components/Auth0';
import MenuCreator from './components/Menu/MenuCreator';
import EditReviewPresentation from './components/Reviews/edit';
import BusinessSingleView from './components/Business/BusinessSingleView';
import AddCustomer from './components/Customer/Add';
import CustomerView from './components/customerviews/CustomerView';
import InitLandingPage from './components/InitLandingPage';
import BusinessUpdater from './components/Business/BusinessUpdater';
import Map from './components/googleMap/Map';
import MenuPreview from './components/Menu/MenuPreview';

import CustomerCart from './components/customerviews/CustomerCart';
import BusinessOrderFrom from './components/Business/BusinessOrderFrom';
import ImageFadeShuffle from './components/animations/ImageFadeShuffle';

import CheckoutForm from './components/Stripe/stripe';

// import { StripeProvider, Elements } from 'react-stripe-elements'

import BusinessOrders from './components/Business/BusinessOrders';
import CustomerOrderFinish from './components/customerviews/CustomerOrderFinish';
import SearchRoot from './components/Search/SearchRoot';

import CustomerCartGet from './components/customerviews/CustomerCartGet';
import CustomerOrders from './components/customerviews/CustomerOrders';
import BusinessList from './components/Business/BusinessList';

export default () => {
  return (
    <>
      {/* Special Auth0 Route  */}
      <Route path={'/login'} exact component={Auth0} />
      {/* Business */}
      <Route path={'/businesses/create'} exact component={BusinessCreator} />
      {/* <Route path={"/businesses/create"} exact component={BusinessCreator} /> */}
      <Route path={'/business/:id'} exact component={BusinessSingleView} />
      {/* <Route path={'/businesses/search'} exact component={BusinessList} /> */}
      <Route path={'/business/:id/order'} exact component={BusinessOrderFrom} />
      <Route
        path={'/business/:id/customer/cart'}
        exact
        component={CustomerCart}
      />
      <Route
        path={'/business/:id/customer/cart/payment'}
        exact
        component={CheckoutForm}
      />
      <Route path={'/success'} exact component={CustomerOrderFinish} />
      <Route path={'/business/update/:id'} exact component={BusinessUpdater} />
      <Route
        path={'/business/:id/orderview'}
        exact
        component={BusinessOrders}
      />
      <Route path={'/review/:id'} exact component={EditReviewPresentation} />
      <Route path={'/schedule/create'} exact component={ScheduleCreator} />
      {/* Customer */}
      <Route path={'/register/customer'} component={AddCustomer} />
      <Route path={'/customer/create'} exact component={CustomerCreator} />{' '}
      {/* have a single way of creating customer */}
      <Route path={'/customer/view'} exact component={CustomerView} />{' '}
      <Route path={'/customer/cart'} exact component={CustomerCartGet} />
      <Route path={'/customer/orders'} exact component={CustomerOrders} />
      {/* will break unless you have a customer_id */}
      {/* Menu */}
      <Route path={'/menu/new'} exact component={MenuCreator} />
      <Route path={'/menu/preview'} exact component={MenuPreview} />
      {/* registration */}
      <Route path={'/registration'} exact component={InitLandingPage} />
      {/* Main Page */}
      <Route exact path={'/'} component={Map} />
      <Route exact path={'/home'} component={Map} />
      {/* Styling Test */}
      <Route path={'/imageshuffle'} component={ImageFadeShuffle} />
      {/* Search */}
      {/* <Route path={'/search'} exact component={SearchRoot} /> */}
      <Route path={'/search'} exact component={BusinessList} />
    </>
  );
};
