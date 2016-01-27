var React = require('react');
var SearchStores = require('../stores/SearchStores');
var Favorite = require('./Favorite');

function getState() {
  return {
    resultEpisodes: SearchStores.getAll()
  };
}

var FavoriteTop = React.createClass({
  getInitialState: function() {
    return getState();
  },
  componentDidMount: function() {
    SearchStores.addChangeListener(this._onChange);
  },
  _onChange: function() {
    if (this.isMounted()) {
      this.setState(getState());
    }
  },
  render: function() {
    return (
      <Favorite resultEpisodes={this.state.resultEpisodes} />
    );
  }
});

module.exports = FavoriteTop;
