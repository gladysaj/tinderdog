import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FloatingAction extends Component {
    render() {
        return(
            <Link className="uk-button uk-button-default floating-action" to={this.props.link}><span uk-icon={"icon:" + this.props.icon}></span></Link>
        )
    }
}

export default FloatingAction;