var React = require('react');
var Button = require('react-bootstrap').Button;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Panel = require('react-bootstrap').Panel;
var Image = require('react-bootstrap').Image;
var Glyphicon = require('react-bootstrap').Glyphicon;
var EpisodeActions = require('../actions/EpisodeActions');
var ReactPropTypes = React.PropTypes;


var EpisodeItem = React.createClass({
  propTypes: {
   obj: ReactPropTypes.object.isRequired
  },
  render: function() {
    var obj = this.props.obj;
    return (
      <Col xs={12}>
        <Panel >
          <Row>
            <Col xs={3} sm={1} className="center-block">
              <Image src={obj.icon_url} responsive />
            </Col>
            <Col xs={9} sm={6}>
              <p>{obj.trackName}</p>
              <p>{obj.artistName}</p>
              <p className="text-muted"><small>{obj.releaseDate}</small></p>
            </Col>
            <Col xs={12} sm={5}>
              <p className="audio"><audio src={obj.preview} controls></audio></p>
            </Col>
          </Row>
        </Panel>
      </Col>
    );
  }

});

module.exports = EpisodeItem;
