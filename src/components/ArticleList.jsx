import { useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import TopicManager from "./TopicManager";
export default function ArticleList({ articles }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const topicQuery = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  console.log("sortby params =", sortByQuery);

  if (!topicQuery && !sortByQuery) {
    return (
      <>
        <h2> Article list: </h2>
        <ul>
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
