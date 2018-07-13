import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import QuestionCard  from './card';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
            return (
                <section className="dashboard">
                    <section className="dashboard-protected-data">
                        <QuestionCard/>
                    </section>
                </section>
            );     
    }
}



export default requiresLogin()(connect()(Dashboard));
