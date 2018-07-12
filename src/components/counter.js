import React from 'react';
import {connect} from 'react-redux';

export class Counter extends React.Component{
  render(){
    console.log(this.props.counter);
    return <p id='counter'>{this.props.counter} {this.props.counter > 1 ?'Questions':'Question'} answered correctly</p>
  }
}

const mapStateToProps = state => ({
  counter: state.auth.currentUser.counter
})

export default connect(mapStateToProps)(Counter)