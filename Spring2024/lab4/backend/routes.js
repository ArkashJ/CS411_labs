// routes.js
const express = require("express");
const axios = require("axios");
const Post = require("./models/Post"); // Assuming you have a Post model defined in models/Post.js

const router = express.Router();

// Route to fetch posts
router.get("/posts", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

// Route to add a new post
router.post("/posts", async (req, res) => {
  const { title, body, userId } = req.body;
  try {
    const newPost = new Post({ title, body, userId });
    await newPost.save();
    res.status(201).send(newPost);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

module.exports = router;
