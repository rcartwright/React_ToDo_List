var React = require('react');
var Todo = require('../components/Todo/TodoApp');

var ToDoPage = React.createClass({
  render: function(){
    return (
      <Todo />
    );
  }
});


module.exports = ToDoPage;