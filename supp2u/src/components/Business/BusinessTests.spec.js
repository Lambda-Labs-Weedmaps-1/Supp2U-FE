import React from 'react';
import { mount, configure, shallow, enzyme } from 'enzyme';
import Enzyme from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';

import BusinessCreator from './BusinessCreator'
import BusinessUpdater from './BusinessUpdater'
import BusinessSingleView from './BusinessSingleView'

configure({ adapter: new Adapter() });
// Business Update // Business Update // Business Update // Business Update // Business Update 
describe('Business Updater Renders', () => {
    // If Map component render is ever non functional, this should fail
    it('should render correctly when component called', () => {
      const Business = shallow(<BusinessUpdater />);

      expect(Business.exists()).toBe(true)
    });
});

describe("testing updating form", () => {
    it('should submit form', () => {
        // const submit = jest.fn();
        let wrapper = shallow(<BusinessUpdater />)
        const preventDefault = jest.fn();
        wrapper.find('form').simulate('submit', {preventDefault});
        expect(preventDefault).toHaveBeenCalled()
    })
})

// Business Creator // Business Creator // Business Creator // Business Creator // Business Creator 
describe('Business Creator Renders', () => {
    // If Map component render is ever non functional, this should fail
    it('should render correctly when component called', () => {
      const Business = shallow(<BusinessCreator />);

      expect(Business).toMatchSnapshot();
    });
});

describe('input values for business creation should be present', () => {
    const container = shallow(<BusinessCreator />)

    // it('onchange should work', () => {
    //     let container = shallow(<BusinessCreator />)
    //     container.find('input[id="test1"]').simulate('change', {
    //         target: {
    //             value:'testpassword'
    //         }
    //     });
    //     expect(container.find('input[name="name"]').prop('value')).toBe(
    //         'testpassword'
    //     );
    // });

    it('should have a input field', () => {
        expect(container.find('input[type="text"]').length).toEqual(6)
    })
});

describe("testing updating form", () => {
    it('should submit form', () => {
        // const submit = jest.fn();
        let wrapper = shallow(<BusinessCreator />)
        const preventDefault = jest.fn();
        wrapper.find('form').simulate('submit', {preventDefault});
        expect(preventDefault).toHaveBeenCalled()
    })
})

