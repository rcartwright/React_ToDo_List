$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./pages/index');
var About = require('./pages/about');
var Todo = require('./pages/todo');


    var App = React.createClass({
      render: function(){
        return (
        	<div>
          <Home />
            </div>
        );
      }
    });


React.render(<App/>, document.getElementById('app'));