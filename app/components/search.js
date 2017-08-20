// Include React as a dependency
var React = require("react");

// Include the Query and Results components
var Query = require("./search/Query");
var Results = require("./search/Results");

// Include the helpers for making API calls
var helpers = require("../utils/helpers");

// Create the Search component
var Search = React.createClass({

  // Here we set the initial state variables
  getInitialState: function() {
    return {
      results: {}
    };
  },

  // This function will be passed down into child components so they can change the "parent"
  setQuery: function(newQuery) {
    helpers.runQuery(newQuery).then(function(data) {
      this.setState({ results: { docs: data.docs } });
    }.bind(this));
  },

  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {

    return (
      <div className="main-container">

        <Query updateSearch={this.setQuery} />

        <Results results={this.state.results} />

      </div>
    );
  }
});

// Export the module back to the route
module.exports = Search;
