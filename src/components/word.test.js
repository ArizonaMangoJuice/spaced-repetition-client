import React from 'react';
import {shallow} from 'enzyme';
import {Word} from './word';
describe('<Word />', () => {
  it('should render without crashing', () => {
    shallow(<Word/>);
  });
});