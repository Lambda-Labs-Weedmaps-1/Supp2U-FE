import React from 'react';
import { mount, configure, shallow, enzyme } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';

import Customer from './AddCustomerPresentation'
import AddCustomerPresentation from './AddCustomerPresentation';

configure({ adapter: new Adapter() });

describe('AddCustomer Renders', () => {
    // If Map component render is ever non functional, this should fail
    it('should render correctly when component called', () => {
      const Customer = shallow(<AddCustomerPresentation />);

      expect(Customer).toMatchSnapshot();
    });
});