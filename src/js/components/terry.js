/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var Terry = React.createClass({
    handleClickPH:function(){
      AppActions.partyHard('PARTY HARD, PARTY HARD, PARTY HARD, PARTY HARD');
    },
    render:function(){
      return (
        <div className="terry">
          <h3 onClick={this.handleClickPH}>Party Hard? Click me.</h3>
        </div>
      )
    }
  });

module.exports = Terry;
