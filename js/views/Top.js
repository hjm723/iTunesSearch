var React = require('react');
var AppStores = require('../stores/AppStores');
var List = require('./List');

function getState() {
  return {
    allEpisodes: AppStores.getAll()
  };
}

var Top = React.createClass({
  getInitialState: function() {
    return getState();
  },
  componentDidMount: function() {
    AppStores.addChangeListener(this._onChange);
  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(getState());
    }
  },
  render: function() {
    return (
      <List allEpisodes={this.state.allEpisodes} />
    );
  }
});

module.exports = Top;
