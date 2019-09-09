import React from "react"
import { configure, shallow } from 'enzyme';
import { Route } from 'react-router';
import Routes from './BasicRoute';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Imports for Routes that are tested
import BusinessCreator from './components/Business/BusinessCreator';
import ScheduleCreator from './components/Business/ScheduleCreator';
import CustomerCreator from './components/Customers/CustomerCreator';
import Auth0 from './components/Auth0';
import MenuCreator from './components/Menu/MenuCreator';
import EditReviewPresentation from './components/Reviews/edit';
import BusinessSingleView from './components/Business/BusinessSingleView';
import AddCustomer from "./components/Customer/Add";
import CustomerView from "./components/customerviews/CustomerView";
import InitLandingPage from "./components/InitLandingPage"
import BusinessUpdater from "./components/Business/BusinessUpdater";
import GMap from './components/googleMap/Map'

describe('Routes', () =>{
  it('All routes are rending in!', () => {
  const wrapper = shallow(<Routes />);
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
  // Expected routes to existed
  expect(pathMap['/home']).toBe( GMap );
  expect(pathMap['/login']).toBe( Auth0 );
  expect(pathMap['/registration']).toBe( InitLandingPage );
  expect(pathMap['/business/:id']).toBe( BusinessSingleView );
  expect(pathMap['/review/:id']).toBe( EditReviewPresentation );
  expect(pathMap['/customer/view']).toBe( CustomerView );
  expect(pathMap['/business/update/:id']).toBe( BusinessUpdater );
  expect(pathMap['/menu/new']).toBe( MenuCreator );
  expect(pathMap['/customer/create']).toBe( CustomerCreator );
  expect(pathMap['/register/customer']).toBe( AddCustomer );
  expect(pathMap['/businesses/create']).toBe( BusinessCreator);
  expect(pathMap['/schedule/create']).toBe( ScheduleCreator );
});
})

