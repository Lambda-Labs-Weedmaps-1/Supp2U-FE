import React from 'react';
import { mount, configure, shallow, enzyme } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';
import { act } from "react-dom/test-utils";

import ReviewPresentation from './ReviewPresentation';

configure({ adapter: new Adapter() });

// comp should render even with no review data for restaurant
describe('Reviews Comp Should Render', () => {
    it('should render correctly', () => {
      const reviews = shallow(<ReviewPresentation />);
    
      expect(reviews).toMatchSnapshot();

    });
    
});
 
// Currently this is having a state/store issue that kills the tests, will
// work out to fix 
//
// test('valid path should not redirect to 404', () => {
//   const wrapper = mount(
//     <MemoryRouter initialEntries={[ '/business/1' ]}>
//       <ReviewPresentation/>
//     </MemoryRouter>
//   );
//   expect(wrapper.find(ReviewPresentation)).toHaveLength(1);
// //   wrapper.unmount();
// });