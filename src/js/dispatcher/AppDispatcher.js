var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action) {
  	switch (action.actionType) {
      case 'ADD_ITEM':
        this.dispatch({
          source: 'VIEW_ACTION',
          action: action
        });
        break;
      case 'PARTY_HARD':
        this.dispatch({
          source: 'VIEW_ACTION',
          action: action
        });
        break;
      default:
        console.log('OOPS, CANT FIND AN ACTION TO DISPATCH');
    }
  }
});

module.exports = AppDispatcher;
