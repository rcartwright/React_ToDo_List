$ = jQuery = require('jquery');
var React = require('react');
var Header = require('./components/header/header');
var Footer = require('./components/footer/footer');
var Home = require('./pages/index');
var About = require('./pages/about');
var Todo = require('./pages/todo');


(function(win) {
  "use strict";
  var App = React.createClass({
    render: function() {
      var Child;

      switch(this.props.route) {
        case 'about': Child = About; break;
        case 'todo': Child = Todo; break;
        default: Child = Home;
      }

      return (
        <div>
        <Header/>
          <Child/>
          <Footer/>
          </div>
      );

    }
  });

  function render() {
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
  }

  window.addEventListener('hashchange', render);
  render();
})(window);