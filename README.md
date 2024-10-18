# MyMusic

**MyMusic** is a simple web application that allows users to fetch and display song lyrics by entering the artist's name and the song title. It uses the [Lyrics.ovh API](https://lyricsovh.docs.apiary.io/#) to retrieve song lyrics.

## Features

- Search for song lyrics by artist and title.
- Displays lyrics in a clean and user-friendly interface.
- Fetches lyrics using the Lyrics.ovh API.

## Screenshots

<img width="950" alt="Screenshot 2024-10-18 151842" src="https://github.com/user-attachments/assets/a56dcff5-a775-4c49-86c0-447b41402020">

<img width="946" alt="Screenshot 2024-10-18 151745" src="https://github.com/user-attachments/assets/5bcdd610-fa63-4629-b57b-a5d8634fd41a">

## API

We use the [Lyrics.ovh API](https://lyricsovh.docs.apiary.io/#) to fetch song lyrics. It is a free API that provides lyrics for songs based on the artist name and song title.

### API Endpoint:

`GET https://api.lyrics.ovh/v1/artist/title`

- **artist**: Name of the artist.
- **title**: Name of the song.

[Example GET request for Postman]
(https://api.lyrics.ovh/v1/Coldplay/Viva La Vida)

Getting Started
Prerequisites
Before you begin, ensure you have the following:

A web browser (Chrome, Firefox, etc.).
Git installed on your machine.
Installation
## Run Locally

Clone the project

```bash
  git clone https://github.com/TriptiMirani/MyMusic.git
```

Go to the project directory

```bash
  cd MyMusic
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  nodemon .\index.js
```

## Usage

Enter the artist's name and the song title in the input fields.

Click the Submit button to fetch the lyrics.

The lyrics will be displayed below the search form.


Example
If you search for:

Artist: Coldplay

Song Title: Viva La Vida

The application will display the lyrics for Coldplay's "Viva La Vida"

## Feedback

If you have any feedback, please reach out to me at [Twitter/X](https://x.com/TriptiMirani)
