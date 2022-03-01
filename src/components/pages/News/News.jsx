import { useState, useEffect } from "react";
import axios from "axios";
import { NewsItem } from "../../components";
import "./news.scss";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=ru&category=technology&pageSize=3&apiKey=9b8f95579b8a4ddbb9f660810af33d1b"
      );

      setNews(res.data.articles);
    };

    getNews();
  }, []);

  return (
    <section className="news" id="news">
      <h2>Our Latest News</h2>

      <div className="news__list">
        {news.map((item, idx) => (
          <NewsItem
            title={item.title}
            description={item.description}
            url={item.url}
            urlToImage={item.urlToImage}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
}

export default News;
