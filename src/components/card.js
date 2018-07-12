import React from 'react';
import {connect} from 'react-redux';
import {checkAnswer, sendAnswer, fetchProtectedData} from '../actions/protected-data';
import { refreshAuthToken } from '../actions/auth';
import Word from './word';
// import {Field, reduxForm, focus} from 'redux-form';

export class QuestionCard extends React.Component{
  constructor(props){
    super(props);
    this.input = React.createRef();
    this.checkAnswer = this.checkAnswer.bind(this)
  }
  checkAnswer(e){
    e.preventDefault();
    let answer = this.input.current.value;
    this.props.dispatch(checkAnswer(answer));
    this.props.dispatch(sendAnswer(answer));
  }
 
  nextQuestion(){
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(refreshAuthToken());
    this.input.current.value = '';
  }

  render(){
    return <section>
        <Word />
        <form onSubmit={e => this.checkAnswer(e)}>
        <label>
          Your Answer:
          <input type="text" name="name"  ref={this.input}/>
        </label>
        {this.props.answer !== null ? <button type="button" onClick={() => this.nextQuestion()}>Next</button> : ''}
        {this.props.answer !== null ? <input type="submit" value="Submit" disabled/> : <input type="submit" value="Submit" />}
      </form>
      </section>
  }
}

const mapStateToProps = state => {
  return {
    answer: state.protectedData.result
  }
};

export default connect(mapStateToProps)(QuestionCard);