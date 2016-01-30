var React = require('react');
var Todo = require('../components/TodoApp');

    var ToDoPage = React.createClass({
      render: function(){
        return (
          <Todo />
        );
      }
    });


    module.exports = ToDoPage;