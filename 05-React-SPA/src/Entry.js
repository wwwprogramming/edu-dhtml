import React from 'react';
import moment from 'moment';
import {Title, DateTime, Description} from "./EntryModules";

import { Link } from 'react-router';

import EntriesProxy from './EntriesProxy';


export default class Entry extends React.Component {
    constructor(props) {
        //let rows = {rows: [{
        //    id: 10,
        //    start: moment().format("DD.MM.YYYY HH:mm"),
        //    end: moment().format("DD.MM.YYYY HH:mm"),
        //    description: "abc defdadsfd"
        //}], ...props};
        console.log(props);

        super(props);
        this.state = {
            id: this.props.params.id,
            title: "",
            start: null,
            end: null,
            description: ""
        };

    }
    componentDidMount() {
        console.log("componentDidMount()");
        console.log(this.props);
        console.log(this.state);
        var entry = EntriesProxy.getEntry(this.state.id);
        console.log(entry);
        this.setState(entry);
}

  render() {
    var id = this.state.id;
    return (<div className="entry">
    	<div>
            <h2>Entry #{this.state.id}</h2>
    		<div><label>Id</label><span>{this.state.id}</span></div>
            <Title value={this.state.title} />
            <DateTime label="Start" value={this.state.start} />
            <DateTime label="End" value={this.state.end} />
            <Description value={this.state.description} />
    	</div>
    	<Link to={`/edit/${id}`} activeClassName="active" ><button>Edit</button></Link>
        <Link to={`/remove/${id}`} activeClassName="active" ><button>Delete</button></Link>
        
    </div>);
  }
}

Entry.defaultProps = { initialCount: 0 };