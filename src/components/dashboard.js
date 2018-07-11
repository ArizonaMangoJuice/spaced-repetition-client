import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import QuestionCard  from './card';
import Answer from './answer';

export class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            questionIndex: Math.ceil(Math.random() * 10)
        }
    }
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }


    render() {
        if(this.props.protectedData.length > 0){
            // console.log();
            return (
                <div className="dashboard">
                    <div className="dashboard-username">
                        Username: {this.props.username}
                    </div>
                    {/* <div className="dashboard-name">Name: {this.props.name}</div> */}
                    <div className="dashboard-protected-data">
                        {this.props.protectedData[0].word}
                        <QuestionCard question={this.props.protectedData}/>
                    </div>
                </div>
            );
        }else{
            return (
                <div className="dashboard">
                    <div className="dashboard-username">
                        Username: {this.props.username}
                    </div>
                    {/* <div className="dashboard-name">Name: {this.props.name}</div> */}
                    <div className="dashboard-protected-data">
                       
                    </div>
                </div>
            );
        }
        
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        // name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
