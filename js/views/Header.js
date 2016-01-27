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
      searchPageStyle: "",
      favoritePageStyle: "",
    };
  },
  componentWillReceiveProps: function(nextProps) {
    var topPageStyle = "";
    var searchPageStyle = "";
    var favoritePageStyle = "";
    switch (nextProps.selected) {
      case 'Top':
        topPageStyle = "active";
        break;
      case 'SearchTop':
        searchPageStyle = "active";
        break;
      case 'FavoriteTop':
        favoritePageStyle = "active";
        break;
      default:
        topPageStyle = "active";
    }
    this.setState({
      topPageStyle : topPageStyle,
      searchPageStyle: searchPageStyle,
      favoritePageStyle: favoritePageStyle
    });
  },
  render: function() {
    var episodeHref = "/";
    var searchHref = "/search/";
    var favoriteHref = "/favorite/";
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">iTunes Search</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <li className={this.state.topPageStyle}>
              <Link to={episodeHref} ><Glyphicon glyph="headphones"/> New episodes</Link>
            </li>
            <li className={this.state.searchPageStyle}>
              <Link to={searchHref} ><Glyphicon glyph="search"/> Search</Link>
            </li>
            <li className={this.state.favoritePageStyle}>
              <Link to={favoriteHref} ><Glyphicon glyph="star"/> Favorite</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

module.exports = Header;
