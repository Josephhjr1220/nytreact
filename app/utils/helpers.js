// Include the Axios library for HTTP requests
var axios = require("axios");

// NYT API Key
var APIKey = "c29d8ee1428b45f7ae55e9338f4fb002";

// Helper Functions
var helpers = {

  // This will run our query.
  runQuery: function(term) {

    // Adjust to get search terms in proper format
    var formattedTerm = term.trim();

    // Run a query using Axios. Then return the results as an object with an array.
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": APIKey,
        "q": formattedTerm
      }
    })
    .then(function(results) {
      console.log("Axios Results", results.data.response);
      return results.data.response;
    });
  },
  // This will return any saved articles from our database
  getArticle: function() {
    return axios.get("/api")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
  // This will save new articles to our database
  postArticle: function(title, date, url) {
    var newArticle = { title: title, date: date, url: url };
    return axios.post("/api", newArticle)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },
};

// We export the helpers function
module.exports = helpers;