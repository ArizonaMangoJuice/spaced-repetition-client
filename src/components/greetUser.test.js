import React from 'react';
import {shallow} from 'enzyme';
import {GreetUser} from './greetUser';
describe('<GreetUser />', () => {
  it('should render without crashing', () => {
    shallow(<GreetUser />);
  });
});