"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var TodoListItem = React.createClass({
  render: function() {
    return (
    	<li className="list-item" id={this.props.id} ref={this.props.data}>
    		{this.props.data} <button className="btn btn-primary btn-xs" onClick={this.props.onClick}>X</button>
    	</li>
    );
  }
});

module.exports = TodoListItem;