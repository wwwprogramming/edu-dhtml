import React from 'react';


export default class About extends React.Component {
  render() {
    return <div className="about">About this application. <button onClick={this.props.handleOk}>Ok</button></div>;
  }
}