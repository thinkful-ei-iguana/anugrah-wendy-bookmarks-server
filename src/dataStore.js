const uuid = require("uuid/v4");

const bookmarks = [
  {
    id: uuid(),
    title: "hello goodbye",
    url: "https://hg.com",
    description: "song lyrics and a way to be polite",
    rating: 4
  },
  {
    id: uuid(),
    title: "medium",
    url: "https://medium.com",
    description: "good resource",
    rating: 5
  }
];

module.exports = bookmarks;
