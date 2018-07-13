import React from 'react';
import {shallow} from 'enzyme';
import {landingPageDescription} from './header-bar';
describe('<landingPageDescription />', () => {
  it('should render without crashing', () => {
    shallow(<landingPageDescription />);
  });
});