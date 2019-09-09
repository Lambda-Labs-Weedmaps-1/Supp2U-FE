import React from 'react';
import { mount, configure, shallow, enzyme } from 'enzyme';
import Enzyme from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';

import BusinessCreator from './BusinessCreator'

configure({ adapter: new Adapter() });

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

