import React from 'react';
import {connect} from 'react-redux';

export function GreetUser(props){
  return <p id='greet-user'>Hello, {props.username}. <br /> Translate the word on the left from Spanish to english.</p>
}

const mapStateToProps = state => {
  return {
      username: state.auth.currentUser.username,
  };
};

export default connect(mapStateToProps)(GreetUser)