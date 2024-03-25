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
              <div className="flex-container">
                <div>
                  <img className="image" src={article.article_img_url} />
                </div>

                <section>
                  <Link
                    className="heading"
                    to={`/articles/${article.article_id}`}
                  >
                    <h2 className="heading">{article.title}</h2>
                  </Link>
                  <p>Author: {article.author}</p>

                  <p>Topic: {article.topic}</p>

                  <p>Created at: {String(date)}</p>

                  <p>Votes: {article.votes}</p>

                  <p>Comments: {article.comment_count}</p>
                </section>
              </div>
            </>
          );
        })}
    </div>
  );
}
