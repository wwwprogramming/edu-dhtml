import React from 'react';


export default class Entry extends React.Component {
  render() {
    return (<div className="entry">
    	<table>
    		<tbody>
    		<tr><th>ID</th><td>#1</td></tr>
    		<tr><th>Title</th><td>title asdf</td></tr>
	   		<tr><th>Start</th><td>1.1.1970 02:00</td></tr>
	   		<tr><th>End</th><td>1.1.2070 02:00</td></tr>
			<tr><th>Description</th><td>The one and only...</td></tr>
    		</tbody>
    	</table>
    	<button>Edit</button><button>Delete</button>
    </div>);
  }
}