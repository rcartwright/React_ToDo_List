"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var TodoForm = React.createClass({
  handleSubmit: function(e){
  if(e.keyCode === 13){
    var newItem = ReactDOM.findDOMNode(this.refs.newItem).value;
    ReactDOM.findDOMNode(this.refs.newItem).value = '';
    this.props.add(newItem);
  }
},
render: function(){
  return (
    <div>
      <input type="text" ref="newItem" className="input-lg form-control" placeholder="New Item" onKeyDown={this.handleSubmit} />
    </div>
      );
    }
  });

module.exports = TodoForm;