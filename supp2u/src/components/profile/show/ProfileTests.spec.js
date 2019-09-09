import React from 'react';
import { mount, configure, shallow, enzyme } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';

// import Customer from './AddCustomerPresentation'
import ProfilePresentation from './ProfilePresentation';

configure({ adapter: new Adapter() });

describe('AddCustomer Renders', () => {
    // If Map component render is ever non functional, this should fail
    it('should render correctly when component called', () => {
      const prof = shallow(<ProfilePresentation />);

      expect(prof).toMatchSnapshot();
      expect(prof.exists()).toBe(true)
    });
});