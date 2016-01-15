var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;
var Glyphicon = require('react-bootstrap').Glyphicon;

var Header = React.createClass({
  render: function() {
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
            <NavItem active="true" eventKey={1} href="#"><Glyphicon glyph="headphones"/> New episodes</NavItem>
            <NavItem eventKey={2} href="#"><Glyphicon glyph="search"/> Search</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

});

module.exports = Header;
