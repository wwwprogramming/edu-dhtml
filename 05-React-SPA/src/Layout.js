import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

export default class Layout extends React.Component {
  render() {
    return (<div className="layout">
    <Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link>
    <Link to="/about" activeClassName="active" >About</Link>
    <Link to="/create" activeClassName="active" >Create</Link>
    
    <Link to="/list" activeClassName="active" >List 2</Link>
    
    {this.props.children}
    </div>);
  }
}