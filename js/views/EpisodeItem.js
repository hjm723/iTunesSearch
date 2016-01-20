var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Panel = require('react-bootstrap').Panel;
var Image = require('react-bootstrap').Image;
var EpisodeActions = require('../actions/EpisodeActions');
var ReactPropTypes = React.PropTypes;


var EpisodeItem = React.createClass({
  propTypes: {
   obj: ReactPropTypes.object.isRequired
  },
  render: function() {
    var obj = this.props.obj;
    return (
      <div className="container">
        <Row className="show-grid">
          <Col xs={12}>
            <Panel >
              <div className="container">
                <Row className="show-grid">
                  <Col xs={1} className="center-block">
                    <Image src={obj.icon_url} responsive />
                  </Col>
                  <Col xs={7}>
                    <p>{obj.trackName}</p>
                    <p>{obj.artistName}</p>
                    <p className="text-muted"><small>{obj.releaseDate}</small></p>
                  </Col>
                  <Col xs={4}>
                    <p><audio src={obj.preview} controls></audio></p>
                  </Col>
                </Row>
              </div>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }

});

module.exports = EpisodeItem;
