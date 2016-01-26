var React = require('react');
var Header = require('../components/header/header');
var Todo = require('../components/TodoApp');

    var HomeApp = React.createClass({
      render: function(){
        return (
        	<div>
        <Header />
          <Todo />
          </div>
        );
      }
    });


    module.exports = HomeApp;