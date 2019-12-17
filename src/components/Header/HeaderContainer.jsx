import React, {component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import { delAuth} from "../../Redux/auth-reducer";

class HeaderAPI extends React.Component{


    render() {
      return <Header {...this.props}/>
  }
}
let mapStateToProps = (state) => {
    return ({
        login: state.auth.login,
        isAuth: state.auth.isAuth
    });
};

let HeaderContainer = connect(mapStateToProps, {delAuth})(HeaderAPI);

export default HeaderContainer;
