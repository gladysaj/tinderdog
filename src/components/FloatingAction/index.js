import React, { Component } from 'react';

class FloatingAction extends Component {
    render() {
        return(
            <button class="uk-button uk-button-default floating-action" type="button"><span uk-icon={"icon:" + this.props.icon}></span></button>
        )
    }
}

export default FloatingAction;