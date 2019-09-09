import React from 'react';
import { mount, configure, shallow, enzyme } from 'enzyme';
import Enzyme from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';

import BusinessHeader from './BusinessUpdater'

configure({ adapter: new Adapter() });
describe('Business Updater Renders', () => {
    // If Map component render is ever non functional, this should fail
    it('should render correctly when component called', () => {
      const Business = shallow(<BusinessHeader />);

      expect(Business.exists()).toBe(true)
    });
});