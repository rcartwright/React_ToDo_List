var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/AppConstants');

var TodoActions = {
  addItem: function(item){
    AppDispatcher.handleAction({
      actionType: appConstants.ADD_ITEM,
      data: item
    });
  },
  removeItem: function(index){
    AppDispatcher.handleAction({
      actionType: appConstants.REMOVE_ITEM,
      data: index
    })
  }
};

module.exports = TodoActions;