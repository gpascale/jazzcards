import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class PageLayout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <AppBar title="Jazzcards">
        </AppBar>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
