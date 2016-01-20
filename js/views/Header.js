var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var Glyphicon = require('react-bootstrap').Glyphicon;

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = React.createClass({
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
            <li><Link to={episodeHref} className="user-icon"><Glyphicon glyph="headphones"/> New episodes</Link></li>
            <li><Link to={searchHref} className="user-icon"><Glyphicon glyph="search"/> Search</Link></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

});

module.exports = Header;
