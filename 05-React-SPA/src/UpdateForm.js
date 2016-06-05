import React from 'react';
import moment from 'moment';

import {Title, DateTime, Description} from "./FormModules";

import EntriesProxy from "./EntriesProxy";

export default class UpdateForm extends React.Component {
	constructor(props) {
  		super(props);
  		console.log(this.props.params.id);
  		// http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes
  		this._handleSubmit = this._handleSubmit.bind(this);
  		this._handleTitleChange = this._handleTitleChange.bind(this);
  		this._handleStartChange = this._handleStartChange.bind(this);
  		this._handleEndChange = this._handleEndChange.bind(this);
  		this._handleDescriptionChange = this._handleDescriptionChange.bind(this);
  		this.state =  {
  			id: this.props.params.id,
  			title: "",
  			start: moment().format("DD.MM.YYYY 12:00"),
  			end: moment().format("DD.MM.YYYY 14:00"),
  			description: ""
  		};
 	}
 	componentDidMount() {
        console.log("componentDidMount()");
        console.log(this.props);
        console.log(this.state);
        var entry = EntriesProxy.getEntry(this.state.id);
        // convert moments to string to be used in the UI inputs
        entry.start = moment(entry.start).format("DD.MM.YYYY HH:mm");
        entry.end = moment(entry.end).format("DD.MM.YYYY HH:mm");
        
        console.log(entry);
        this.setState(entry);
}
 	_handleTitleChange(e) {
		this.setState({title:e.target.value});
	}
	_handleStartChange(e) {
		this.setState({start:e.target.value});
	}
	_handleEndChange(e) {
		this.setState({end:e.target.value});
	}
	_handleDescriptionChange(e) {
		this.setState({description:e.target.value});
	}
	_handleSubmit() {
		console.log("_handleSubmit");
		console.log(this.props);
		console.log(this.state);
		EntriesProxy.setEntry(this.state);
		//this.props.routes.push('/')
		this.props.router.push(`/show/${this.state.id}`);
	}
  render() {
    return (<div className="update">
    	<h2>Update Entry {this.props.params.id}.</h2>
    	<Title handler={this._handleTitleChange} value={this.state.title} />
    	<DateTime handler={this._handleStartChange} label="Start" value={this.state.start} />
    	<DateTime handler={this._handleEndChange} label="End" value={this.state.end} />
    	<Description handler={this._handleDescriptionChange} value={this.state.description} />
    	 <button onClick={this._handleSubmit}>Save</button></div>);
    	}
  
}