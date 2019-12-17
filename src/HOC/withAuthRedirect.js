import React, {component} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let withAuthRedirect = (Component) => {
    class WithAuthRedirectComponent extends React.Component {

        render() {
            if (!this.props.auth) {
                return <Redirect to="/login" />
            }

            return <Component {...this.props}/>

        }
    }

    let mapStateToProps = (state) => {
        return {
            auth: state.auth.isAuth
        }
    };

    return connect(mapStateToProps, )(WithAuthRedirectComponent);
};

export default withAuthRedirect;