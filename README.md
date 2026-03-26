# Dogboard

Dogboard is an image board for looking at dog pictures. It's a fullstack Express app with no React. It gets pictures form <https://dog.ceo/dog-api>

## Database

The database uses Drizzle ORM and better-sqlite3. I thas one table named Favorites with the following columns:

- id (primary key)
- url (string)
- created_at (timestamp)

## Pages

### Home ('/')

Show a random dog picture that takes up the full screen with no margin or padding. When the image is loading show a loading spinner.

Show a next button that loads another picture.

Show a favorite button that saves the current picture to the database and navigates to the favorites page.

### Favorites ('/favorites')

The favorits page shows a list of all the favorited dog pictures in cards. The favorites page has a black background.
