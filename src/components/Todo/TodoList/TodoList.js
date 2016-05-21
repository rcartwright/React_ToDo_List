"use strict";

var React = require('react');
var TodoListItem = require('../TodoItem/TodoItem');

var TodoList = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.items.map(function(item) {
           return <TodoListItem key={item.id} data={item}/>;
        })}
      </ul>
    );
  }
});

module.exports = TodoList;