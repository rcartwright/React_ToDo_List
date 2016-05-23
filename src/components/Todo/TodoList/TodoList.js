"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var TodoListItem = require('../TodoItem/TodoItem');

var TodoList = React.createClass({
	handleRemove: function(e) {
		this.props.remove(ReactDOM.findDOMNode(e.target));
	},
	render: function() {
		var remove = this.handleRemove;
	    return (
	      <ul>
	        {this.props.items.map(function(item, i) {
	           return <TodoListItem onClick={remove} key={i} id={i} data={item}/>;
	        })}
	      </ul>
	    );
	}
});

module.exports = TodoList;