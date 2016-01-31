var React = require('react');
var TodoBanner = require('./TodoBanner/TodoBanner');
var TodoForm = require('./TodoForm/TodoForm');
var TodoList = require('./TodoList/TodoList');

    var TodoApp = React.createClass({
      getInitialState: function() {
      return {items: ['Todo item #1', 'Todo item #2']};
      },
      updateItems: function(newItem) {
        var allItems = this.state.items.concat([newItem]);
        this.setState({
        items: allItems
      });
      },
      render: function() {
      return (
        <div className="app-container">
        <TodoBanner/>
        <TodoList items={this.state.items}/>
        <TodoForm onFormSubmit={this.updateItems}/>
        </div>
      );
      }
    });



    module.exports = TodoApp;