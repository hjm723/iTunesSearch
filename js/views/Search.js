var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var ReactPropTypes = React.PropTypes;
var SearchActions = require('../actions/SearchActions');
var EpisodeItem = require('./EpisodeItem');


var Search = React.createClass({
  propTypes: {
    resultEpisodes: ReactPropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      textValue: "Find a podcast"
    };
  },
  componentWillUnmount: function() {
    SearchActions.deleteAll();
  },
  changeText(e) {
    this.setState({textValue: e.target.value});
  },
  render: function() {
    var resultEpisodes = this.props.resultEpisodes;
    var episodes = [];
    for (var key in resultEpisodes) {
      episodes.push(<EpisodeItem key={resultEpisodes[key].trackId} obj={resultEpisodes[key]} />);
    }
    return (
      <div className="container">
        <Row className="show-grid">
          <Col xs={12}>
            <form>
              <Input type="text" label="" placeholder={this.state.textValue} onChange={this.changeText} />
              <Button type="button" vertical block bsStyle="primary" onClick={this.search}><Glyphicon glyph="search"/> Search</Button>
            </form>
          </Col>
        </Row>
        <hr />
        <Row className="show-grid">
          <Col xs={12}>
            {episodes}
          </Col>
        </Row>
      </div>
    );
  },
  search:function(e){
    SearchActions.searchList(this.state.textValue);
  },

});

module.exports = Search;
