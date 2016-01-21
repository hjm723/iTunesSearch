var React = require('react');
var Grid = require('react-bootstrap').Grid;
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
      textValue: "Search"
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
      <Grid>
        <Row>
          <Col xs={12}>
            <Input type="text" label="" placeholder={this.state.textValue} onChange={this.changeText} />
            <Button type="button" vertical block bsStyle="primary" onClick={this.search}><Glyphicon glyph="search"/> Search</Button>
          </Col>
        </Row>
        <hr />
        <Row>
          {episodes}
        </Row>
      </Grid>
    );
  },
  search:function(e){
    SearchActions.searchList(this.state.textValue);
  },

});

module.exports = Search;
