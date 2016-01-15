var React = require('react');

var Header = require('./Header');
var List = require('./List');

var Top = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <List />
      </div>
    );
  }

});

module.exports = Top;
