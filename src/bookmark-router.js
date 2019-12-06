const express = require("express");
const uuid = require("uuid/v4");

const bookmarkRouter = express.Router();
const bodyParser = express.json();
const logger = require("./logger");
const bookmarks = require("./dataStore");

bookmarkRouter.route("/bookmarks").get((req, res) => {
  res.json(bookmarks);
});

bookmarkRouter.route("/bookmarks/:id").get((req, res) => {
  const { id } = req.params;
  const bookmark = bookmarks.find(bm => bm.id == id);

  if (!bookmark) {
    logger.error(`Bookmark with ${id} not found.`);
    return res.status(404).send("Bookmark Not Found");
  }
  res.json(bookmark);
});

bookmarkRouter.route("/bookmarks").post(bodyParser, (req, res) => {
  const { title, url, description, rating } = req.body;

  if (!title) {
    logger.error("Title is required");
    return res.status(400).send("Invalid data");
  }

  if (!url) {
    logger.error("URL is required");
    return res.status(400).send("Invalid data");
  }

  if (!description) {
    logger.error("Description is required");
    return res.status(400).send("Invalid data");
  }

  if (!rating) {
    logger.error("Rating is required");
    return res.status(400).send("invalid data");
  }

  const id = uuid();

  const bookmark = {
    id,
    title,
    url,
    description,
    rating
  };

  bookmarks.push(bookmark);

  res.status(201).json(bookmark);
});

module.exports = bookmarkRouter;
