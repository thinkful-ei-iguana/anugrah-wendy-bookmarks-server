# Bookmarks Server

## Route handlers

1. GET /bookmarks - returns a list of bookmarks
2. GET /bookmarks/:id - returns single bookmark with given ID, if found
3. POST /bookmarks - accepts JSON object with title, url, description, rating keys and adds it to the list of bookmarks after validation.
4. DELETE /bookmarks/:id - deletes bookmark with given ID, if found.

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
