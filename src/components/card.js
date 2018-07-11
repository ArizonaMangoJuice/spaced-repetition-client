import React from 'react';
import {connect} from 'react-redux';
import {checkAnswer, sendAnswer} from '../actions/protected-data';
import Answer from './answer';
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
    this.props.dispatch(sendAnswer(answer))
    // console.log(this.props.answer);
    // console.log(answer === this.props.answer);
    // console.log('correct');
    // console.log(this.props.answer);
  }
  render(){
    console.log(this.props.question);
    return <section>
        {/* <section>
          word in Espanol  
        </section> */}
        <h1>{this.props.question}</h1>
        {/* <Answer /> */}
        <form onSubmit={e => this.checkAnswer(e)}>
        <label>
          Your Answer:
          <input type="text" name="name"  ref={this.input}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </section>
  }
}

const mapStateToProps = state => {
  return {
    question: state.protectedData.data
  }
};

export default connect(mapStateToProps)(QuestionCard);