const express = require("express");

const bookmarkRouter = express.Router();
const bodyParser = express.json();
const logger = require("./logger");
const bookmarks = require("./dataStore");

bookmarkRouter.route("/bookmarks").get((req, res) => {
  res.json(bookmarks);
});

module.exports = bookmarkRouter;
