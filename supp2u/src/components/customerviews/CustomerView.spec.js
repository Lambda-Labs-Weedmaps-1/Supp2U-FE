import React from 'react';
import { mount, configure, shallow, enzyme } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';

// import Customer from './AddCustomerPresentation'
import View from './CustomerView';

configure({ adapter: new Adapter() });

describe('Customer view Renders', () => {
    // If Map component render is ever non functional, this should fail
    it('should render correctly when component called', () => {
      const cust = shallow(<View />);

      expect(cust).toMatchSnapshot();
      expect(cust.exists()).toBe(true)
    });
});