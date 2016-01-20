var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var ReactDOM = require('react-dom');

var Header = require('./views/Header');
var Top = require('./views/Top');
var SearchTop = require('./views/SearchTop');

var Index = React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
});

var NotFound = React.createClass({
  render: function () {
    return (
      <div>
        <span>NOT FOUND</span>
      </div>
    );
  }
});

var Routes = (
  <Route path="/" component={Index}>
    <IndexRoute component={Top}/>
    <Route path="/search" component={SearchTop}/>
    <Route path="*" component={NotFound}/>
  </Route>
);

ReactDOM.render(
  <Router>{Routes}</Router>,
  document.getElementById('content')
);
