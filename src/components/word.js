import React from 'react';
import {connect} from 'react-redux';
export function Word(props){
  return (
    <p className='word'>{props.question}</p>
  )
}

const mapStateToProps = state => {
  return {
    question: state.word.word,
  }
};

export default connect(mapStateToProps)(Word);