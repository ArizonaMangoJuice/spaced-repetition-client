import React from 'react';
import {shallow} from 'enzyme';
import {CorrectAnswer} from './correctAnswer';
describe('<CorrectAnswer />', () => {
  it('should render without crashing', () => {
    shallow(<CorrectAnswer />);
  });
});