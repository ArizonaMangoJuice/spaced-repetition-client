import React from 'react';
import {shallow} from 'enzyme';
import {Answer} from './answer';
describe('<Answer />', () => {
  it('should render without crashing', () => {
    shallow(<Answer />);
  });
});