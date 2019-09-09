import React from 'react';
import { mount, configure, shallow, enzyme } from 'enzyme';
import Enzyme from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';

import BusinessUpdater from './BusinessUpdater'

configure({ adapter: new Adapter() });
describe('Business Updater Renders', () => {
    // If Map component render is ever non functional, this should fail
    it('should render correctly when component called', () => {
      const Business = shallow(<BusinessUpdater />);

      expect(Business.exists()).toBe(true)
    });
});

describe("testing updating form", () => {
    it('should submit form', () => {
        const submit = jest.fn();
        let wrapper = shallow(<BusinessUpdater />)

        wrapper.find('form').simulate('submit', {
            preventDefault: () => {
                console.log("prevented")
            }
        });
        expect(submit).toHaveBeenCalled()
    })
})