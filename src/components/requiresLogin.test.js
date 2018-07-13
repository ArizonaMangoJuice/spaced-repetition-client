import React from 'react';
import {shallow} from 'enzyme';
import Component from './requires-login';
describe('<Component />', () => {
  it('should render without crashing', () => {
    shallow(<Component/>);
  });
});