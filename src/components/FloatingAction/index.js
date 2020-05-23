import React, { Component } from 'react';

const  FloatingAction =({action, icon})=>(
    <button className="uk-button uk-button-default floating-action" onClick={action}><span uk-icon={"icon:" + icon}></span></button>
)

export default FloatingAction