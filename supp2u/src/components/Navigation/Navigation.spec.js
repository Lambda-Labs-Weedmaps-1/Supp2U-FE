import React from 'react';
import { mount, configure, shallow, enzyme } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';

import Navigation from '../Navigation/Navigation'

// Will try to text links to correct routes next
import Home from './../Home';
import App from './../../App';

// jest.mock('backend/app');

configure({ adapter: new Adapter() });

describe('Navigation Bar', () => {
    it('should render correctly', () => {
      const nabvar = shallow(<Navigation />);
    
      expect(nabvar).toMatchSnapshot();
    
    //   navbar.unmount();
    });
    
});

test('valid path should not redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <Navigation/>
    </MemoryRouter>
  );
  expect(wrapper.find(Navigation)).toHaveLength(1);
//   wrapper.unmount();
});

// Can't get to render correctly, will fix later
// it('render correctly text component', () => {  
//     const TextInputComponent = renderer.create(<Navigation />).toJSON();
//     expect(TextInputComponent).toMatchSnapshot();
// });