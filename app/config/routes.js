// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
var browserHistory = router.browserHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/main");
var Search = require("../components/Search");
// 

// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="Search" component={Search} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Search} />

    </Route>
  </Router>
);
