import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'



import Header from './Header';
import Footer from './Footer';
import About from './About';
import Home from './Home';



export default class Application extends React.Component {
  
  render() {
    return (
    <div>
    <Header />  
    <p>application dataaa</p>
    <Router history={browserHistory}>
    	<Route path="/sap.html">
    		
    		<IndexRoute component={Home} /> 
    	</Route>
    	<Route path="/about" component={ About } />
    </Router>
    <Footer />
    </div>);
  }
}