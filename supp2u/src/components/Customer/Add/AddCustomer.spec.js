import React from 'react';
import { mount, configure, shallow, enzyme } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';

import AddCustomerPresentation from './AddCustomerPresentation';

configure({ adapter: new Adapter() });

describe('AddCustomer Renders', () => {
    // If Map component render is ever non functional, this should fail
    it('should render correctly when component called', () => {
      const Customer = shallow(<AddCustomerPresentation />);

      expect(Customer).toMatchSnapshot();
    });
});

// describe("testing updating form", () => {
//   it('should submit form', () => {
//       // const submit = jest.fn();
//       let wrapper = shallow(<AddCustomerPresentation />)
//       const addCustomer = jest.fn();
//       const preventDefault = jest.fn();
//       wrapper.find('form').simulate('submit',{preventDefault});
//       expect(preventDefault).toHaveBeenCalled()
//   })
// })