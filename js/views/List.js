var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Panel = require('react-bootstrap').Panel;
var Image = require('react-bootstrap').Image;

var QIITA_REACTJS_ENTRY_URL = 'https://itunes.apple.com/search?term=music&media=music&entity=musicTrack&country=jp&lang=ja_jp&limit=10';

    // fetch(QIITA_REACTJS_ENTRY_URL)
    // .then((response) => response.json())
    // .then((responseData) => {
    //   console.log(responseData);
    //
    // });

var List = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Row className="show-grid">
          <Col xs={12}>
            <Panel >
              <div className="container">
                <Row className="show-grid">
                  <Col xs={1}>
                    <Image src="http://is3.mzstatic.com/image/thumb/Music/v4/9f/30/01/9f300152-b977-fbf0-979d-92cf052d6133/source/60x60bb.jpg" responsive />
                  </Col>
                  <Col xs={11}>
                    bbb
                    <p className="text-muted"><small>2013-03-13T07:00:00Z</small></p>
                  </Col>
                </Row>
              </div>
            </Panel>
          </Col>
          <Col xs={12}>
            <Panel >
              Basic panel example
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }

});

module.exports = List;
