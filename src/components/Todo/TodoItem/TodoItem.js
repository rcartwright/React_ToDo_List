"use strict";

var React = require('react');


var TodoListItem = React.createClass({
  render: function() {
    return <li key={this.props.data.id}>{this.props.data}</li>;
  }
});

module.exports = TodoListItem;