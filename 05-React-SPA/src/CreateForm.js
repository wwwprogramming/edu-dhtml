import React from 'react';
import moment from "moment";

import {Title, DateTime, Description, Submit} from "./FormModules";

import EntriesProxy from "./EntriesProxy";


export default class CreateForm extends React.Component {
	constructor() {
  		super();
  		// http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes
  		this._handleSubmit = this._handleSubmit.bind(this);
  		this._handleTitleChange = this._handleTitleChange.bind(this);
  		this._handleStartChange = this._handleStartChange.bind(this);
  		this._handleEndChange = this._handleEndChange.bind(this);
  		this._handleDescriptionChange = this._handleDescriptionChange.bind(this);
  		this.state =  {
  			title: "title...",
  			start: moment().format("DD.MM.YYYY 12:00"),
  			end: moment().format("DD.MM.YYYY 14:00"),
  			description: "What is happening?"
  		};
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
		console.log(this.state);
		var id = EntriesProxy.addEntry(this.state);
		this.props.router.push(`/show/${id}`);
	}
  render() {
    return <div className="create">
    	<h2>New Entry</h2>
    	
    	<Title value={this.state.title} handler={this._handleTitleChange} />
    	<DateTime label="From" value={this.state.start} handler={this._handleStartChange} />
    	<DateTime label="Until" value={this.state.end} handler={this._handleEndChange}/>
    	<Description value={this.state.description} handler={this._handleDescriptionChange}/>
    	<Submit handler={this._handleSubmit} />
    </div>;
  }
}