import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, withRouter } from 'react-router'



import Header from './Header';
import Footer from './Footer';

import About from './About';

import ListEntries from './ListEntries';
import CreateForm from './CreateForm';
import UpdateForm from './UpdateForm';
import Entry from './Entry';
import Layout from './Layout';
// var moment = require('moment') < - - will be this after es6 to 5 transpiling
import moment from "moment";



export default class Application extends React.Component {
  
  render() {
    var divStyle = {
    minHeight: '300px',
    backgroundColor: '#F9F9F9'
    };
    return (
    <div style={divStyle}>
        <Header />  
        <p>This is just a example to show CRUD + List application UI created with React / React Router / jQuery</p>
        <Router history={browserHistory}>
        	
            <Route path="/" component={Layout} >
                <IndexRoute rows={[{id:1, title: "title-1", start:moment(), end: moment()}]} component={ListEntries} />
                <Route path="/about" component={ About } />
                <Route path="/create" component={ withRouter(CreateForm) } />
                <Route path="/edit/:id" component={ withRouter(UpdateForm) } />
                <Route path="/show/:id" component={ withRouter(Entry) } />
            </Route>
                
        </Router>
        <Footer />
    </div>);
  }
}