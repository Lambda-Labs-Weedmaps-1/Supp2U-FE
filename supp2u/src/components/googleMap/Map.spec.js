import React from 'react';
import { mount, configure, shallow, enzyme } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';

import Map1 from './Map'

configure({ adapter: new Adapter() });

describe('Map Display', () => {
    // If Map component render is ever non functional, this should fail
    it('should render correctly when component called', () => {
      const mappy = shallow(<Map1 />);
    
      expect(mappy).toMatchSnapshot();
    });
});
 
// ERROR: this one causes warning about ACT issues and memory leaks, can't pin down yet
// FIXED [PARTIAL]: cannot used a component called MAP in the tests, it thinks 
// it's calling a function.
test('valid path should yield 1 component, no sub comps for map', async () => {
    // making sure this only has 1 component, not 0 on render of path
    const wrapper = mount(
    <MemoryRouter initialEntries={[ '/home' ]}>
      <Map1 />
    </MemoryRouter>
    );
    await wrapper;
    expect(wrapper.find(Map1)).toHaveLength(1);
  
    wrapper.unmount();
});
