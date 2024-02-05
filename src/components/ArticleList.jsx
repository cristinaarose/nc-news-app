import ArticleCard from "./ArticleCard";
export default function ArticleList({ articles }) {
  return (
    <>
      <h2> Article list: </h2>
      <ul>
        {articles && articles.articles && <ArticleCard articles={articles} />}
      </ul>
    </>
  );
}
