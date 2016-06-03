import React from 'react';


import { Link } from 'react-router'


class EntryRow extends React.Component {

	render() {
		var id = this.props.entry.id;
		return (
		<tr>
		<td>{this.props.entry.id}</td>
		<td>{this.props.entry.title}</td>
		<td>{this.props.entry.start.format('DD.MM.YYYY HH:mm')}</td>
		<td>{this.props.entry.end.format('DD.MM.YYYY HH:mm')}</td>
    	<td>
    	<Link to={{pathname: `/show/${id}`}} params={{id: this.props.entry.id}} activeClassName="active" ><button>Show More</button></Link>
    	<Link to={`/edit/${id}`} activeClassName="active" ><button>Edit</button></Link>
    	
    	</td></tr>
			);
	}

}

export default class ListEntries extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

  	// TODO remove this kind of binding to route object
  	console.log(this.props.route);
  	
    var rowNodes = this.props.route.rows.map(function(row) {
        return (
        	<EntryRow key={row.id} entry={row} />
        );
    });

    return (
    	<table className="create">
    <thead>
    	<tr><th>Id</th><th>Title</th><th>Start</th><th>End</th><th>#</th></tr>
    </thead>
    <tbody>
    	{rowNodes}
    </tbody>
    </table>
    );
  }
}