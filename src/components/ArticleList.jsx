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
        {/* topic select */}
        <div className="flex-container-articleList">
          <div>
            <span>
              <p>Topic:</p>
              <select>
                <option value="coding">Coding</option>

                <option value="football">Football</option>

                <option value="cooking">Cooking</option>
              </select>
            </span>
          </div>
          {/* order by asc/desc */}
          <div>
            <span>
              <p>Order by:</p>
              <select>
                <option value="asc">Ascending</option>

                <option value="desc">Descending</option>
              </select>
            </span>
          </div>
          {/* Sort by */}
          <div>
            <span>
              <p>Sort by:</p>
              <select>
                <option value="author">Author</option>

                <option value="votes">Votes</option>

                <option value="created_at">Date created</option>
              </select>
            </span>
          </div>
        </div>

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
