// src/Stories.js
import { useEffect, useState } from "react";
import axios from "axios";

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/hn-stories");
        setStories(response.data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };

    fetchStories();
  }, []);

  return (
    <div>
      <h2>Hacker News Stories</h2>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stories;
