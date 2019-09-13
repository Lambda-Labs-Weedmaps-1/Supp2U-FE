import React from 'react';
import { mount, configure, shallow, enzyme } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';

// import Customer from './AddCustomerPresentation'
import View from './CustomerView';

configure({ adapter: new Adapter() });

describe('Customer view Renders', () => {
    it('should render correctly when component called', () => {
      const cust = shallow(<View />);

      expect(cust).toMatchSnapshot();
      expect(cust.exists()).toBe(true)
    });

    it('loading message displays when there is no picture', () =>{
      let wrapper = shallow(<View />)
      expect('loading').toMatchSnapshot()
    });

    describe('Customer Can be brought in', ()=>{
      it('image loads in', () =>{
        let wrapper = shallow(<View />)
        expect(wrapper.props().image).toBe.defined;
      });
  
      it('customer has name', () =>{
        let wrapper = shallow(<View />)
        expect(wrapper.props().cusname).toBe.defined;
      });
    })

    describe('Customer\'s reviews load in', ()=>{
      it('rating loads in', () =>{
        let wrapper = shallow(<View />)
        expect(wrapper.props().rating).toBe.defined;
      });
  
      it('review comes in', () =>{
        let wrapper = shallow(<View />)
        expect(wrapper.props().review).toBe.defined;
      });
    })
});