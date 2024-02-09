import { useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import TopicManager from "./TopicManager";
export default function ArticleList({ articles }) {
  const [searchParams, setSearchParams] = useSearchParams();
  

  const topicQuery = searchParams.get("topic");


  if (!topicQuery) {
    return (
      <>
        <h2> Article list: </h2>
        <ul>
          {articles && articles.articles && <ArticleCard articles={articles} />}
        </ul>
      </>
    );
  } else {
    return <TopicManager topicQuery={topicQuery} />;
  }
}
