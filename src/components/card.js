import React from 'react';
import {connect} from 'react-redux';
import {checkAnswer} from '../actions/protected-data';
// import {Field, reduxForm, focus} from 'redux-form';

export class QuestionCard extends React.Component{
  constructor(props){
    super(props);
    this.input = React.createRef();
  }
  checkAnswer(e){
    e.preventDefault();
    let answer = this.input.current.value;
    this.props.dispatch(checkAnswer(answer));
    console.log(answer);
  }
  render(){
    
    return <section>
        <section>
          word in Espanol  
        </section>
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
    answer: state.protectedData.answer
  }
};

export default connect(mapStateToProps)(QuestionCard);