import React, { Component } from 'react';

class UserContact extends Component {
  render() {
    return (
     <div>
      <div className="uk-card uk-card-default uk-width-1-2@m">
       <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" uk-grid>
            <div className="uk-width-auto">
                <img className="uk-border-circle" width="40" height="40" src="images/avatar.jpg"/>
            </div>
            <div className="uk-width-expand">
                <h3 className="uk-card-title uk-margin-remove-bottom">Title</h3>
                <p className="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
            </div>
        </div>
      </div>
    <div className="uk-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div className="uk-card-footer">
        <a href="#" className="uk-button uk-button-text">Read more</a>
    </div>
</div>
     </div>
    );
  }
}

export default UserContact;