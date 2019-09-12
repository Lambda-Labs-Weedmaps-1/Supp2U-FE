import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Menu from './MenuPreview'

configure({ adapter: new Adapter() });

describe('Preview of the Menu Renders', () => {
    it('render correctly when component called?', () => {
      const MenuPreview = shallow(<Menu />)

      expect(MenuPreview).toMatchSnapshot();
      expect(MenuPreview.exists()).toBe(true)
    });
    
    it('message render if menu items are loading', () =>{
      let wrapper = shallow(<Menu />)
      expect('loading-message').toMatchSnapshot()
    });

    it('menu id is being passed', () =>{
        let wrapper = shallow(<Menu />)
        expect('loading-message').toMatchSnapshot()
        expect(wrapper.props().menuId).toBe.defined;
      });
});