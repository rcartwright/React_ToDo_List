var React = require('react');
var TodoBanner = require('./TodoBanner/TodoBanner');
var TodoForm = require('./TodoForm/TodoForm');
var TodoList = require('./TodoList/TodoList');
var todoActions = require('../../actions/TodoActions');
var todoStore = require('../../stores/TodoStore');

    var TodoApp = React.createClass({
      getInitialState: function() {
      return {
        list: todoStore.getList()
        }
      },
      componentDidMount: function(){
        todoStore.addChangeListener(this._onChange);
      },
      componentWillUnmount: function(){
        todoStore.removeChangeListener(this._onChange);
      },
      handleAddItem: function(newItem){
        todoActions.addItem(newItem);
      },
      handleRemoveItem: function(index){
        todoActions.removeItem(index);
      },
      _onChange: function(){
        this.setState({
          list: todoStore.getList()
        })
      },
      render: function() {
          return (
            <div className="app-container">
            <TodoBanner/>
            <TodoList items={this.state.list} remove={this.handleRemoveItem}/>
            <TodoForm add={this.handleAddItem}/>
            </div>
          );
        }
    });


    module.exports = TodoApp;