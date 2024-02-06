import { Link } from "react-router-dom";

export default function ArticleCard({ articles }) {
  return (
    <div>
      {articles.articles &&
        articles.articles.map((article, i) => {
          return (
            <li key={i}>
              <h3>Article {i + 1}</h3>
              <img className="image" src={article.article_img_url} />
              <p>Author: {article.author}</p>
              <p>Title: {article.title}</p>
              <p>Topic: {article.topic}</p>
              <p>Created at: {article.created_at}</p>
              <p>Votes: {article.votes}</p>
              <p>Comment count: {article.comment_count}</p>
              <p>
                <Link to={`/articles/${article.article_id}`}>
                  Link to Article: {i + 1}
                </Link>
              </p>
            </li>
          );
        })}
    </div>
  );
}
