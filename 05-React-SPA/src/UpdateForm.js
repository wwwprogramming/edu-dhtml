import React from 'react';


export default class UpdateForm extends React.Component {
	constructor() {
  		super();
  		// http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes
  		this._handleSubmit = this._handleSubmit.bind(this);
 	}
	_handleSubmit() {
		console.log(this.props);
		//this.props.routes.push('/')
		this.props.router.push('/');
	}
  render() {
    return <div className="create">Update Entry {this.props.params.id}. <button onClick={this._handleSubmit}>Save</button></div>;
  }
}