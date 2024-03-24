import { Link } from "react-router-dom";
import "../../styling/ArticleCard.css";

export default function ArticleCard({ articles }) {
  return (
    <div>
      {articles.articles &&
        articles.articles.map((article, i) => {
          const date = new Date(`${article.created_at}`);
          return (
            <>
              <ul key={i} className="centre">
                <img className="image" src={article.article_img_url} />

                <li className="list">
                  <Link className="list" to={`/articles/${article.article_id}`}>
                    <h2>Title: {article.title}</h2>
                  </Link>
                  <p>Author: {article.author}</p>

                  <p>Topic: {article.topic}</p>

                  <p>Created at: {String(date)}</p>

                  <p>Votes: {article.votes}</p>

                  <p>Comment count: {article.comment_count}</p>
                </li>
              </ul>
            </>
          );
        })}
    </div>
  );
}
