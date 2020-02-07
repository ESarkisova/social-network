import React from 'react';
import './App.css';
import Header from "./components/Header/HeaderContainer"
import Nav from "./components/Nav/"
import Profile from "./components/Profile/ProfileContainer"
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import User from "./components/Users/UsersContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initialization} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader";
import withSuspense from './HOC/withSuspense';
import {Alert} from "antd";
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
                <Nav menuActive = {this.props.location.pathname}/>
                <main className = "content">
                    {this.props.errorAuth
                        ? <Alert
                            message="Внимание"
                            description={`Возникла ошибка при запуске приложения: ${this.props.errorAuth }`}
                            type="warning"
                            showIcon />
                        : <Switch>
                            <Redirect exact from = "/" to = "/profile" />
                            <Route path = "/dialogs" render = { withSuspense(Dialog)} />
                            <Route path = "/profile/:userID?" render = {() => <Profile />} />
                            <Route path = "/users" render = {() => <User />} />
                            <Route path = "/login" render = { withSuspense(Login)} />
                        </Switch>
                    }
                </main>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
        initialized: state.app.initialized,
        errorAuth: state.auth.isError
    });

export default compose(withRouter,connect(mapStateToProps, {initialization}))(App);
