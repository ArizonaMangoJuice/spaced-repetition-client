import React from 'react';
import {shallow} from 'enzyme';
import {QuestionCard} from './card';
describe('<QuestionCard />', () => {
  it('should render without crashing', () => {
    shallow(<QuestionCard />);
  });
});