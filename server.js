const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const isAuthenticated = require("./config/middleware/isAuthenticated");
const controller = require("./controllers/controller")
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs

app.get("/user", isAuthenticated, function(req, res) {
  res.json(req.user);
})
app.use(controller);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
