import { Link } from "react-router-dom";
export default function SelectedArticlesByTopicCard({ articlesByTopic }) {
  return (
    <div>
      {articlesByTopic.articles &&
        articlesByTopic.articles.map((article, i) => {
          const date = new Date(`${article.created_at}`);
          return (
            <li key={i} className="centre">
              <h3>Article {i + 1}</h3>
              <Link to={`/articles/${article.article_id}`}>
                <p>Title: {article.title}</p>
              </Link>
              <p>Author: {article.author}</p>
              <p>Topic: {article.topic}</p>
              <p>Created at: {String(date)}</p>
              <p>Votes: {article.votes}</p>
              <p>Comment count: {article.comment_count}</p>
            </li>
          );
        })}
    </div>
  );
}
