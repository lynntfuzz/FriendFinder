// Dependencies
// =============================================================
var express = require("express");
var externalRoutes = require('./routing/apiRoutes');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up external routing files
app.use('/externalRoutes', externalRoutes);



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
