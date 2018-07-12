import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import QuestionCard  from './card';
import Answer from './answer';
import Counter from './counter';
import CorrectAnswer from './correctAnswer';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }


    render() {
            return (
                <div className="dashboard">
                    <div className="dashboard-username">
                        <h2>Hello, {this.props.username}</h2>
                        <Counter />
                    </div>
                    <div className="dashboard-protected-data">
                        <Answer />
                        <CorrectAnswer />
                        <QuestionCard/>
                    </div>
                </div>
            );     
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.currentUser.username,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
