"use strict";

var React = require('react');


var TodoListItem = React.createClass({
  render: function() {
    return <li>{this.props.data}</li>;
  }
});

module.exports = TodoListItem;