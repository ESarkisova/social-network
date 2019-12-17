import React, {Suspense} from 'react';
import './App.css';
import Header from "./components/Header/HeaderContainer"
import Nav from "./components/Nav/"
import Profile from "./components/Profile/ProfileContainer"
import {Route, withRouter} from "react-router-dom";
import User from "./components/Users/UsersContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initialization} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader";
import withSuspense from './HOC/withSuspense';
const Dialog = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));


class App extends React.Component {
    componentDidMount() {
        this.props.initialization();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />;
        }
        return (
            <div className = "app-wrapper">
                <Header />
                <Nav/>
                <main className = "content">
                    <Route path = "/dialogs" render = { withSuspense(Dialog)} />
                    <Route path = "/profile/:userID?" render = {() => <Profile />} />
                    <Route path = "/users" render = {() => <User />} />
                    <Route path = "/login" render = { withSuspense(Login)} />
                </main>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
        initialized: state.app.initialized
    });

export default compose(withRouter,connect(mapStateToProps, {initialization}))(App);
