import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

// Create a new file named "types.ts" in the same directory as "News.tsx"
// Export the necessary types from that file

// types.ts
export interface Story {
  id: number;
  title: string;
  url: string;
}


export default function News(){
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get<Story[]>('http://localhost:3000/hn-stories');
        setStories(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };

    fetchStories();
  }, []);

  return (
    <div>
      <h2>Hacker News Stories</h2>
      <ul>
        {stories.map(story => (
            <p>{story.title}</p>
        ))}
      </ul>
    </div>
  );

}
