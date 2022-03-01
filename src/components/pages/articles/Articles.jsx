import React from "react";
import axios from "axios";
import "./article.scss";




class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    errors: null
  };

  getArticles() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=ru&category=technology&pageSize=3&apiKey=9b8f95579b8a4ddbb9f660810af33d1b"
      )
      .then(response => {
        return response.data.articles.map(article => ({
          description: `${article.description}`,
          title: `${article.title}`,
          url: `${article.url}`,
          urlToImage: `${article.urlToImage}`,

        }));
      })
      .then(articles => {
        this.setState({
          articles,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getArticles();
  }

  render() {
    const { isLoading, articles } = this.state;
    return (
      <React.Fragment>
      <div  className="articles">
      <h1> Our Latest News</h1>
        <div className="article-box">
          {!isLoading ? (
            articles.map(article => {
              const { description, title, url, urlToImage } = article;
              return (
                <div className="article-items" key={title}>
                  <div>
                  <img src={urlToImage} alt={title} />
                    <h6>
                      <a href={url}>{title}</a>
                    </h6>
                    <p>{description}</p>
                  </div>

                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
        </div> 

      </React.Fragment>
    );
  }
}
export default Articles;