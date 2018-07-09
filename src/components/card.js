import React from 'react';
import {connect} from 'react-redux';
import Input from './input';
import userAnswer from '../actions/users';
// import {Field, reduxForm, focus} from 'redux-form';

export class QuestionCard extends React.Component{
  checkAnswer(){

  }
  render(){
    return <section>
        <section>
          word in Espanol  
        </section>
            
      </section>
  }
}

export default connect()(QuestionCard);