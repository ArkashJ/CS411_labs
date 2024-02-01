import * as React from 'react';
import axios from 'axios';

export default function News(){
  const [currNews, setCurrNews] = React.useState([]);

  const getNews = async () => {
    
    const response = await axios.get('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty',
    {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const news_data = await response.data;
    console.log(news_data);
    setCurrNews(news_data.title);
  }
  
  React.useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <p>{currNews}</p>
    </div>
  )

}
