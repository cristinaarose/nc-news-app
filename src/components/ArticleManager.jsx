import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CommentManager from "./CommentManager";
import {
  getArticleByArticleId,
  patchArticleVotes,
  patchArticleVotesDown,
} from "../../api";

export default function ArticleManager() {
  const [selectedArticle, setSelectedArticle] = useState();
  const { article_id } = useParams();
  const [votes, setVotes] = useState();

  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleByArticleId({ article_id })
      .then((data) => {
        setSelectedArticle(data.data);
        setVotes(data.data.article.votes);

        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
      });
  }, []);

  function handleUpClick() {
    patchArticleVotes({ article_id }, 1)
      .then(() => {
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setVotes(selectedArticle.article.votes - 1);
      });
    setVotes(votes + 1);
  }

  function handleDownClick() {
    patchArticleVotesDown({ article_id }, -1)
      .then(() => {
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setVotes(selectedArticle.article.votes - 1);
      });
    setVotes(votes - 1);
  }

  if (isLoading) {
    return <p>Loading....</p>;
  } else {
    const date = new Date(`${selectedArticle.article.created_at}`);
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
          <p>Created at: {String(date)}</p>
        </section>
        <p></p>
        <section className="centre">
          <h3>Votes: {votes}</h3>

          <button onClick={handleUpClick}>vote👍</button>
          <button onClick={handleDownClick}>vote👎</button>
        </section>
        <p></p>
        <section className="centre">
          <CommentManager article_id={article_id} />
        </section>
      </>
    );
  }
}
