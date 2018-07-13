import React from 'react';
import {shallow} from 'enzyme';
import {Dashboard} from './dashboard';

describe('<Dashboard />', () => {
  it('should render without crashing', () => {
    const dispatch = jest.fn();
    shallow(<Dashboard dispatch={dispatch}/>);
  });
});