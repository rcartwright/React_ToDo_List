var React = require('react');
var TodoListItem = require('../TodoItem/TodoItem');

var TodoList = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.items.map(function(item, i) {
           return <TodoListItem key={i} data={item}/>;
        })}
      </ul>
    );
  }
});

module.exports = TodoList;