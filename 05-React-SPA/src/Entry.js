import React from 'react';
import {Title, DateTime, Description} from "./EntryModules";

export default class Entry extends React.Component {
    constructor() {
        super({
            id: 10,
            start: moment().format("DD.MM.YYYY HH:mm"),
            end: moment().format("DD.MM.YYYY HH:mm"),
            description: "abc defdadsfd d"
        });
        this._handleEdit = this._handleEdit.bind(this);
        this._handleDelete = this._handleDelete.bind(this);
    }
    _handleEdit() {
        // todo router to edit + this.props.id
        console.log("_handleEdit()");
    }
    _handleDelete() {
        // todo router to edit + this.props.id
        console.log("_handleDelete()");
    }
  render() {
    return (<div className="entry">
    	<div>
            <h2>Entry #{this.props.id}</h2>
    		<div><label>Id</label><span>{this.props.id}</span></div>
            <Title value={this.props.title} />
            <DateTime label="Start" value={this.props.start} />
            <DateTime label="End" value={this.props.end} />
            <Description value={this.props.description} />
    	</div>
    	<button>Edit</button><button>Delete</button>
    </div>);
  }
}