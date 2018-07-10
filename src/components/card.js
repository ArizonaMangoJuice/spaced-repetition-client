import React from 'react';
import {connect} from 'react-redux';
import {checkAnswer} from '../actions/protected-data';
import Answer from './answer';
// import {Field, reduxForm, focus} from 'redux-form';

export class QuestionCard extends React.Component{
  constructor(props){
    super(props);
    this.input = React.createRef();
    this.state
  }
  checkAnswer(e){
    e.preventDefault();
    let answer = this.input.current.value;
    console.log(this.props.answer);
    console.log(answer === this.props.answer);
    console.log('correct');
    // console.log(this.props.answer);
  }
  render(){
    
    return <section>
        {/* <section>
          word in Espanol  
        </section> */}
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

// const mapStateToProps = state => {
//   return {
//     answer: state.protectedData[0].answer
//   }
// };

export default connect()(QuestionCard);