import React from 'react';
import {connect} from 'react-redux';
import Input from './input';
import userAnswer from '../actions/'

export class QuestionCard extends React.Component{
  render(){
    return 
      <section>
        <section>
          word in Espanol  
        </section>

      </section>
  }
}

export default connect()(QuestionCard);