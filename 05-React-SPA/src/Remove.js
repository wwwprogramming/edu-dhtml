import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';

export default class Remove extends React.Component {

	constructor(props) {
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
        
	}

  render() {
    var id = this.state.id;
    return (<div className="entry">
    	<div>
            <h2>Entry #{this.state.id}</h2>
    		<div>TODO REMOVE</div>
    	</div>
    	<Link to={"/"} activeClassName="active" ><button>Cancel</button></Link>
        <button>Just Do It</button>
    </div>);
  }
}