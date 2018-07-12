import React from 'react';
import {connect} from 'react-redux';

export function Answer(props){
  return <section>
    <h2>{props.answer === true ? 'Correct' : props.answer !== null ? 'Incorrect' : ''}</h2>
    </section>;
}

const mapStateToProps = state => ({
  answer: state.protectedData.result
});

export default connect(mapStateToProps)(Answer)

