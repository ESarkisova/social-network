import React, {component} from "react";
import cn from '../index.module.css';

class ProfileStatus extends React.Component {
    state = {
        editStatusMode: false,
        status: this.props.status
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status != this.props.status){
            this.setState({status: prevProps.status});
        }
    }

    toggleEditStatusMode = (e) => {
        if(this.state.editStatusMode) {
            this.props.setStatus(this.state.status)
        }
        this.setState({editStatusMode : !this.state.editStatusMode});

    }
    onChangeStatusText = (e) => {
        this.setState({status : e.currentTarget.value});
    }
    render() {
        return <div className={cn.status}>
            {this.state.editStatusMode ?
                <input type="text"  value={this.state.status} autoFocus={true} onBlur={this.toggleEditStatusMode} onChange={this.onChangeStatusText}/>
                : <span onDoubleClick={this.toggleEditStatusMode}>{this.props.status || "Input your status..."}</span>}

        </div>
    }
};

export default ProfileStatus;