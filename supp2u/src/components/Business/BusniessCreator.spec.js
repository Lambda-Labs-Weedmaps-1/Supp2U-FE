import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Bis from './BusinessCreator'

configure({ adapter: new Adapter() });

describe('Business Creator Renders', () => {
    it('render correctly when component called?', () => {
      const BusinessCreator = shallow(<Bis />)

      expect(BusinessCreator).toMatchSnapshot();
      expect(BusinessCreator.exists()).toBe(true)
    });

    it('Business creation form works', () =>{
      let wrapper = shallow(<Bis />)
        const preventDefault = jest.fn();
        wrapper.find('form').simulate('submit', {preventDefault});
        expect(preventDefault).toHaveBeenCalled()
    })
});