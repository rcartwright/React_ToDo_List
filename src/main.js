"use strict";

//var $ = require("jquery"); // only used to load bootstrap
var React = require('react');
var render = require('react-dom').render;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;

var Header = require('./components/header/header');
var Footer = require('./components/footer/footer');

var Home = require('./pages/index');
var About = require('./pages/about');
var Todo = require('./pages/todo');


var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header/>
          {this.props.children}
        <Footer/>
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Todo} />
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.getElementById("app"));