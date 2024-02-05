export default function ArticleCard({ articles }) {
  //   console.log(articles, "ARTICLES");

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
              <p>Article id: {article.article_id}</p>
              <p>Topic: {article.topic}</p>
              <p>Created at: {article.created_at}</p>
              <p>Votes: {article.votes}</p>
              <p>Comment count: {article.comment_count}</p>
              <button>View</button>
            </li>
          );
        })}
    </div>
  );
}
