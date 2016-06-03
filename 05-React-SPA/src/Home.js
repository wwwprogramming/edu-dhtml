import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'


export default class Home extends React.Component {
  render() {
    return (
    	<div className="home">
		<Link to="/about">/about</Link>
    	<p>Home application.</p>
    	</div>
    	);
  }
}