# Notes App

This is a simple notes app built with Node.js and Firebase. Users can create, read, update, and delete notes using a RESTful API.

## Installation

To install the app, clone the repository to your local machine and run the following command in the project directory:

`npm install`

This will install all of the dependencies required by the app.

## Configuration

Before running the app, you will need to create a Firebase project and download the service account key. You can follow the instructions in the [Firebase documentation](https://firebase.google.com/docs/admin/setup) to set up the project and download the key.

Once you have the key, rename it to `firebase.json` and place it in the project root directory.

## Running the App

To run the app, run the following command in the project directory:

`npm start`

This will start the server on port 3000 by default. You can access the app by visiting `http://localhost:3000` in your web browser.

## API Documentation

The following API endpoints are available:

### GET /notes

Returns a list of all notes.

### GET /notes/:id

Returns a single note with the specified ID.

### POST /notes

Creates a new note. The request body should contain a JSON object with the following properties:

- `title` (string, required)
- `content` (string, required)

### PUT /notes/:id

Updates an existing note with the specified ID. The request body should contain a JSON object with the following properties:

- `title` (string, optional)
- `content` (string, optional)

### DELETE /notes/:id

Deletes a note with the specified ID.

## Error Handling

The app includes basic error handling for common errors. If an error occurs, the app will return a JSON object with the following properties:

- `error` (string): A description of the error.
- `code` (number): The HTTP status code associated with the error.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.