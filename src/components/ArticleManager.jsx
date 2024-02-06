// header
// nav bar
// article card
// comment manager > comment card
// votes

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ArticleManager() {
  const [selectedArticle, setSelectedArticle] = useState();
  const { article_id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://news-app-n80t.onrender.com/api/articles/${article_id}`)
      .then((data) => {
        return data.json();
      })
      .then((body) => {
        setSelectedArticle(body);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) return <p>Loading....</p>;
  else {
    return (
      <>
        <section className="centre">
          <img
            className="image"
            src={selectedArticle.article.article_img_url}
          />
          <h2> Title: {selectedArticle.article.title}</h2>
          <p> Author: {selectedArticle.article.author}</p>
          <p>Topic: {selectedArticle.article.topic}</p>
          <p>Created at: {selectedArticle.article.created_at}</p>
        </section>
        <p></p>
        <section className="centre">
          <h3>Votes: {selectedArticle.article.votes}</h3>
          <button>vote!</button>
        </section>
        <p></p>
        <section className="centre">
          <p>Comments: {selectedArticle.article.comment_count}</p>
          <p> comments will go here!</p>
        </section>
      </>
    );
  }
}
