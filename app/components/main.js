// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  // Here we render the component
  render: function () {

    return (
      <div className="container">

        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-ex1-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">NYT-React</Link>
            </div>

            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav navbar-right">

                <li><Link to="/search">Search</Link></li>

              </ul>
            </div>
          </div>
        </nav>

        <div className="jumbotron">
          <h2 className="text-center"><strong>New York Times Article Scrubber</strong></h2>
          <h3 className="text-center">Search for current articles of interest.</h3>
        </div>

        {this.props.children}

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
