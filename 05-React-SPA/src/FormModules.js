import React from "react";  

  var Title = React.createClass({
                displayName: 'myTitle',
                render: function() {
                  return (
                    <div>      
                        <label>Title</label>
                        <input placeholder={this.props.value} value={this.props.value} onChange={this.props.handler} type="text" />
                    </div>
                    )
                }
              });
			  
			 var DateTime = React.createClass({
                displayName: 'myDT',
                render: function() {
                  return (
                    <div>
                        <label>{this.props.label}</label>
                        <input type="text" placeholder={this.props.value} value={this.props.value} onChange={this.props.handler}/>
                    </div>
                    )
                }
              });
			  
			  
			  var Description = React.createClass({
                displayName: 'mydesc',
                render: function() {
                  return (
                    <div>      
                        <label>Description</label><textarea placeholder={this.props.value} value={this.props.value} onChange={this.props.handler}></textarea>
                    </div>
                    )
                }
              });
			  
			 var Submit = React.createClass({
                displayName: 'mysubmit',
                render: function() {
                  return (
                    <div>      
                        <button onClick={this.props.handler}>SAVE</button>
                    </div>
                    )
                }
              });

       exports.Title = Title;
       exports.DateTime = DateTime;
       exports.Description = Description;
       exports.Submit = Submit;