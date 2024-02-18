// routes.js
const express = require("express");
const axios = require("axios");
const Story = require("./models/Story");

const router = express.Router();

// Fetch top stories from Hacker News
router.get("/hn-stories", async (req, res) => {
  try {
    const response = await axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json",
    );
    const storyIds = response.data.slice(0, 10); // Fetching the first 10 stories for example
    const stories = await Promise.all(
      storyIds.map((id) =>
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`),
      ),
    );
    res.json(stories.map((story) => story.data));
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

// Save a story to MongoDB
router.post("/save-story", async (req, res) => {
  try {
    const { hnId, title, url } = req.body;
    const existingStory = await Story.findOne({ hnId });
    if (existingStory) {
      return res.status(409).send("Story already exists.");
    }
    const story = new Story({ hnId, title, url });
    await story.save();
    res.status(201).json(story);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

module.exports = router;
