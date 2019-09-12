import React from 'react';
import { mount, configure, shallow, enzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Item from './ItemCreator';
import Menu from './MenuCreator'

configure({ adapter: new Adapter() });

describe('Item Creator Renders', () => {
    // If Map component render is ever non functional, this should fail
    it('render correctly when component called?', () => {
      const MenuCreator = shallow(<Menu />)
      const item = shallow(<Item />);

      expect(MenuCreator).toMatchSnapshot();
      expect(MenuCreator.exists()).toBe(true)
      expect(item).toMatchSnapshot();
      expect(item.exists()).toBe(true)
    });

    it('item creation form works', () =>{
      let wrapper = shallow(<Item />)
        const preventDefault = jest.fn();
        wrapper.find('form').simulate('submit', {preventDefault});
        expect(preventDefault).toHaveBeenCalled()
    })
});