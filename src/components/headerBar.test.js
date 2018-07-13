import React from 'react';
import {shallow} from 'enzyme';
import {HeaderBar} from './header-bar';
describe('<Header />', () => {
  it('should render without crashing', () => {
    shallow(<HeaderBar />);
  });
});