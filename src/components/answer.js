import React from 'react';
import {connect} from 'react-redux';

export function Answer(props){
  return <section>
    <h2>{props.answer ? 'Correct' : props.answer !== null ? 'Incorrect' : ''}</h2>
    </section>;
}

const mapStateToProps = state => ({
  answer: state.protectedData.answer
});

export default connect(mapStateToProps)(Answer)

