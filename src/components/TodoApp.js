    var React = require('react');

    var TodoBanner = React.createClass({
      render: function(){
        return (
          <h3>TODO ...react.js</h3>
        );
      }
    });




var TodoListItem = React.createClass({
  render: function() {
    return <li key={this.props.data.id}>{this.props.data}</li>;
  }
});
var TodoList = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.items.map(function(item) {
           return <TodoListItem key={item.id} data={item}/>;
        })}
      </ul>
    );
  }
});

    var TodoForm = React.createClass({
      getInitialState: function() {
        return {item: ''};
        },
      handleSubmit: function(e){
        e.preventDefault();
        this.props.onFormSubmit(this.state.item);
        this.setState({item: ''});
        React.findDOMNode(this.refs.item).focus();
        return;
      },
      onChange: function(e){
        this.setState({
          item: e.target.value
        });
      },
      render: function(){
        return (
          <form onSubmit={this.handleSubmit}>
            <input type='text' ref='item' onChange={this.onChange} value={this.state.item}/>
            <input type='submit' value='Add'/>
          </form>
        );
      }
    });

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
        <div>
        <TodoBanner/>
        <TodoList items={this.state.items}/>
        <TodoForm onFormSubmit={this.updateItems}/>
        </div>
      );
      }
    });



    module.exports = TodoApp;