import { useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import TopicManager from "./TopicManager";
import "../../styling/ArticleList.css";

export default function ArticleList({ articles }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const topicQuery = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  if (!topicQuery && !sortByQuery) {
    return (
      <>
        <h2> Article list: </h2>
        <ul className="ul">
          {articles && articles.articles && <ArticleCard articles={articles} />}
        </ul>
      </>
    );
  } else if (topicQuery) {
    return <TopicManager topicQuery={topicQuery} />;
  } else if (sortByQuery) {
    return <SortByManager />;
  }
}
