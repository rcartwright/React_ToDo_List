var React = require('react');
var Todo = require('../components/TodoApp');

    var HomeApp = React.createClass({
      render: function(){
        return (
          <Todo />
        );
      }
    });


    module.exports = HomeApp;