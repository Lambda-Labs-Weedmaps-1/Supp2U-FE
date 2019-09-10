import React from 'react';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// this is an extremely simple test to just see if the app is rendering at all, if this fails all is lost
describe('APP', ()=>{
    it ('Renders without crashing', ()=>{
        const application = shallow(<App />);
    
      expect(application).toMatchSnapshot();
    });
})