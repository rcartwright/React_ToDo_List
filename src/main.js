$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./pages/index');



    var App = React.createClass({
      render: function(){
        return (
          <Home />
        );
      }
    });

React.render(<App/>, document.getElementById('app'));