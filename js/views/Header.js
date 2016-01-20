var React = require('react');
var ReactPropTypes = React.PropTypes;
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var Glyphicon = require('react-bootstrap').Glyphicon;

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = React.createClass({
  propTypes: {
    selected: ReactPropTypes.string.isRequired,
  },
  getInitialState() {
    return {
      topPageStyle: "active",
      searchPageStyle: ""
    };
  },
  componentWillReceiveProps: function(nextProps) {
    var topPageStyle = "";
    var searchPageStyle = "";
    switch (nextProps.selected) {
      case 'Top':
        topPageStyle = "active";
        break;
      case 'SearchTop':
        searchPageStyle = "active";
        break;
      default:
        topPageStyle = "active";
    }
    this.setState({
      topPageStyle : topPageStyle,
      searchPageStyle: searchPageStyle
    });
  },
  render: function() {
    var episodeHref = "/";
    var searchHref = "/search/";
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Podcast</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <li className={this.state.topPageStyle}><Link to={episodeHref} className="user-icon"><Glyphicon glyph="headphones"/> New episodes</Link></li>
            <li className={this.state.searchPageStyle}><Link to={searchHref} className="user-icon"><Glyphicon glyph="search"/> Search</Link></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

module.exports = Header;
