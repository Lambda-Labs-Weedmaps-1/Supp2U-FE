import React from 'react';
import GoogleMap from './GoogleMap';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//This test makes sure that marker isn't crashing the app, backend testing will make sure we have positions for the marker
describe('Marker has positions', ()=>{
    it ('Marker function loads without crashing Google Maps', ()=>{
        const GMap = shallow(<GoogleMap />);
    
      expect(GMap).toMatchSnapshot();
    });
})