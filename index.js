import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

// index.js
import { renderTemplate } from "./renderEjs.js"; // Import the render function

const outputPath = "./index.html"; // Output path for the rendered HTML

// Call the render function with your template name and data
renderTemplate("index.ejs", { title: "Home" }, outputPath);

const app = express();
const port = 3000;
const API_URL = "https://api.lyrics.ovh/v1";

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", async (req, res) => {
  const searchArtist = req.body.artist.trim();
  const searchTitle = req.body.title.trim();
  try {
    const result = await axios.get(
      `${API_URL}/${encodeURIComponent(searchArtist)}/${encodeURIComponent(
        searchTitle
      )}`
    );
    const newLyrics = result.data.lyrics.replace(/\n/g, "<br>");
    res.render("index.ejs", {
      artist: searchArtist,
      title: searchTitle,
      lyrics: newLyrics,
    });
  } catch (error) {
    if (error.response) {
      const retryAfter = error.response.headers["retry-after"];
      if (retryAfter) {
        console.log(`Rate limited. Retry after: ${retryAfter} seconds`);
      } else {
        console.log(
          "No retry-after header found. Check other headers or wait."
        );
      }
    } else {
      console.error("API request failed for another reason:", error.message);
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
