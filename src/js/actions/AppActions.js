var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  addItem: function(item){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.ADD_ITEM,
      item: item
    })
  },
  partyHard: function(message){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.PARTY_HARD,
      item: message
    })
  }
}

module.exports = AppActions
