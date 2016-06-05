import React from "react";  

  var Title = React.createClass({
                displayName: 'myTitle',
                render: function() {
                  return (
                    <div>      
                        <label>Title</label>
                        <span>{this.props.value}</span>
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
                        <span>{this.props.value}</span>
                    </div>
                    )
                }
              });
			  
			  
			  var Description = React.createClass({
                displayName: 'mydesc',
                render: function() {
                  return (
                    <div>      
                        <label>Description</label>
                        <span>{this.props.value}</span>
                    </div>
                    )
                }
              });
			  

       exports.Title = Title;
       exports.DateTime = DateTime;
       exports.Description = Description;
