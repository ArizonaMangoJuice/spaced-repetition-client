import React from 'react';
import {connect} from 'react-redux';
export function Word(props){
  return (
    <h2>{props.question}</h2>
  )
}

const mapStateToProps = state => {
  return {
    question: state.word.word,
  }
};

export default connect(mapStateToProps)(Word);