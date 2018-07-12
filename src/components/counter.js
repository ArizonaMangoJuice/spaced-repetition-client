import React from 'react';
import {connect} from 'react-redux';

export class Counter extends React.Component{
  render(){
    console.log(this.props.counter);
    return <h4>{this.props.counter} {this.props.counter > 1 ?'Questions':'Question'} answered correctly</h4>
  }
}

const mapStateToProps = state => ({
  counter: state.auth.currentUser.counter
})

export default connect(mapStateToProps)(Counter)