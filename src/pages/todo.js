var React = require('react');
var Header = require('../components/header/header');
var Todo = require('../components/TodoApp');
var Footer = require('../components/footer/footer');


    var ToDoPage = React.createClass({
      render: function(){
        return (
        	<div>
        <Header />
          <Todo />
          <Footer />
          </div>
        );
      }
    });


    module.exports = ToDoPage;