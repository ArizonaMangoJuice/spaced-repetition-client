import React from 'react';
import {connect} from 'react-redux';
import {checkAnswer, sendAnswer, fetchProtectedData} from '../actions/protected-data';
import { refreshAuthToken } from '../actions/auth';
import Word from './word';
import CorrectAnswer from './correctAnswer';
import Answer from './answer';
import Counter from './counter';
import './dashboard.css';
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
    return <section className='container'>
        <section className='red'>
          <Counter />
          <Word />
          <Answer />
          <CorrectAnswer />
        </section>
        <section className='yellow'>
          <p id='instruction'>Type your answer</p>
          <form onSubmit={e => this.checkAnswer(e)} className='form'>
            <section className='inputs'>
              <section className='row'>
                <section className='column name-group'>
                  <label className='label'>
                    Your Answer:
                    <input className='text-input name-input' type="text" name="name"  ref={this.input}/>
                  </label>
                </section>
              </section>
            </section>
            {this.props.answer !== null ? <section className='buttons'><button className='submit-button' type="button" onClick={() => this.nextQuestion()}>Next</button></section> : ''}
            {this.props.answer !== null ? <section className='buttons'><input className='submit-button' type="submit" value="Submit" disabled/></section> : <section className='buttons'><input className='submit-button' type="submit" value="Submit" /></section>}
          </form>
        </section>
      </section>
  }
}

const mapStateToProps = state => {
  return {
    answer: state.protectedData.result
  }
};

export default connect(mapStateToProps)(QuestionCard);