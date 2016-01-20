var React = require('react');
var Row = require('react-bootstrap').Row;
var Pager = require('react-bootstrap').Pager;
var PageItem = require('react-bootstrap').PageItem;
var EpisodeActions = require('../actions/EpisodeActions');
var ReactPropTypes = React.PropTypes;
var EpisodeItem = require('./EpisodeItem');


var List = React.createClass({
  propTypes: {
    allEpisodes: ReactPropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      page: 1
    };
  },
  componentDidMount: function() {
    EpisodeActions.getList(this.state.page);
  },
  componentWillUnmount: function() {
    EpisodeActions.deleteAll();
  },
  render: function() {
    if (Object.keys(this.props.allEpisodes).length < 1) {
      return null;
    }
    var allEpisodes = this.props.allEpisodes;
    var episodes = [];
    for (var key in allEpisodes) {
      episodes.push(<EpisodeItem key={allEpisodes[key].trackId} obj={allEpisodes[key]} />);
    }
    return (
      <div className="container">
        <Row className="show-grid">
          {episodes}
        </Row>
        <Pager>
          <PageItem previous onClick={this.getPreviousPage}>&larr; Previous Page</PageItem>
          <PageItem next onClick={this.getNextPage}>Next Page &rarr;</PageItem>
        </Pager>
      </div>
    );
  },
  getPreviousPage: function(e) {
    var previousPage = this.state.page - 1;
    this.setState({page : previousPage});
    EpisodeActions.deleteAll();
    EpisodeActions.getList(previousPage);
  },
  getNextPage: function(e) {
    var nextPage = this.state.page + 1;
    this.setState({page : nextPage});
    EpisodeActions.deleteAll();
    EpisodeActions.getList(nextPage);
  }
});

module.exports = List;
