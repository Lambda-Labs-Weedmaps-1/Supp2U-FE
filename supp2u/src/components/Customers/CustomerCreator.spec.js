import React from 'react';
import { mount, configure, shallow, enzyme } from 'enzyme';
import Enzyme from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';

import CustomerCreator from './CustomerCreator'

configure({ adapter: new Adapter() });

describe('AddCustomer Renders', () => {
    // If Map component render is ever non functional, this should fail
    it('should render correctly when component called', () => {
      const Customer = shallow(<CustomerCreator />);

      expect(Customer).toMatchSnapshot();
    });
});

describe('input values for customer creation should be present', () => {
    const container = shallow(<CustomerCreator />)

    // it('onchange should work', () => {
    //     let container = shallow(<CustomerCreator />)
    //     container.find('input[name="name"]').simulate('change', {
    //         target: {
    //             value:'testpassword'
    //         }
    //     });
    //     expect(container.find('input[name="name"]').prop('value')).toBe(
    //         'testpassword'
    //     );
    // });

    it('should have a input field', () => {
        expect(container.find('input[type="text"]').length).toEqual(1)
    })
});

describe('should have attributes', () => {
    const customer = shallow(<CustomerCreator />)

    const customerAttributes = {
        user_id: 9,
        custname: "testing"
    }

    expect(customerAttributes).toHaveProperty('user_id')
    expect(customerAttributes).toHaveProperty('custname')
})

describe("testing updating form", () => {
    it('should submit form', () => {
        // const submit = jest.fn();
        let wrapper = shallow(<CustomerCreator />)
        const preventDefault = jest.fn();
        wrapper.find('form').simulate('submit', {preventDefault});
        expect(preventDefault).toHaveBeenCalled()
    })
})