var React = require('react');
var SearchStores = require('../stores/SearchStores');
var Search = require('./Search');

function getState() {
  return {
    resultEpisodes: SearchStores.getAll()
  };
}

var SearchTop = React.createClass({
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
      <div>
        <Search resultEpisodes={this.state.resultEpisodes} />
      </div>
    );
  }
});

module.exports = SearchTop;
