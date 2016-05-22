"use strict";

var React = require('react');
var {Link} = require('react-router');

var Header = React.createClass({
	render: function() {
		return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <a href="/" className="navbar-brand">
                
              </a>
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/todo">Todo</Link></li>
              </ul>
          </div>
        </nav>
		);
	}
});

module.exports = Header;