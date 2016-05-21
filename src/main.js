"use strict";

var $ = require("jquery");
var React = require('react');
var render = require('react-dom').render;
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var browserHistory = require('react-router').browserHistory

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
      <Route path="/home" component={Home} />
      <Route path="about" component={About} />
      <Route path="todo" component={Todo} />
    </Route>
  </Router>
), document.getElementById("app"));