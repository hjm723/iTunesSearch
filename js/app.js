var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var ReactDOM = require('react-dom');

var Header = require('./views/Header');
var Top = require('./views/Top');
var SearchTop = require('./views/SearchTop');
var FavoriteTop = require('./views/FavoriteTop');
var NotFound = require('./views/NotFound');

var Index = React.createClass({
  render: function(){
    return (
      <div>
        <Header selected={this.props.children.type.displayName}/>
        {this.props.children}
      </div>
    );
  }
});

var Routes = (
  <Route path="/" component={Index}>
    <IndexRoute component={Top}/>
    <Route path="/search" component={SearchTop}/>
    <Route path="/favorite" component={FavoriteTop}/>
    <Route path="*" component={NotFound}/>
  </Route>
);

ReactDOM.render(
  <Router>{Routes}</Router>,
  document.getElementById('content')
);
