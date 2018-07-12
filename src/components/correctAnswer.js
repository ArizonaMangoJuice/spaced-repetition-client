import React from 'react';
import {connect} from 'react-redux';

export function CorrectAnswer(props){
  return props.answer ? <p id='correct-answer'>The correct answer was {props.answer}</p> : null 
}

const mapStateToProps = state => ({
  answer: state.protectedData.answer
});

export default connect(mapStateToProps)(CorrectAnswer);