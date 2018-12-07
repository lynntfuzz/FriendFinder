// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    console.log("GET /api/friends");
    res.json(friendsData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    console.log("POST /api/friends");
    var newPerson = req.body;
    var indexOfBestMatch = 0;
    var minDifference = null;
    
    for (var i = 0; i < friendsData.length; i++) {
        var diff = calculateDifference(newPerson, friendsData[i]);
        if (minDifference === null || diff < minDifference) {
            minDifference = diff;
            indexOfBestMatch = i;
        }
    }
    friendsData.push(req.body);
    res.json(friendsData[indexOfBestMatch]);
  });

    // move out to friends.js
  function calculateDifference(newPerson, potentialFriend) {
    var difference = 0;
    for (var i = 0; i < 10; i++) {
        //                  "console.log(newPerson.scores[i] + " - " + potentialFriend.scores[i] + " - = " + Math.abs(parseInt(newPerson.scores[i]) - parseInt(potentialFriend.scores[i])));
        difference += Math.abs(parseInt(newPerson.scores[i]) - parseInt(potentialFriend.scores[i]));
    }
    return difference;
  }

};
