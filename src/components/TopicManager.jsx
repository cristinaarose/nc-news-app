import { getArticlesByTopic } from "../../api";
import { useEffect, useState } from "react";
import SelectedArticlesByTopicCard from "./SelectedArticlesByTopicCard";
export default function TopicManager({ topicQuery }) {
  const [articlesByTopic, setArticlesByTopic] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticlesByTopic({ topicQuery })
      .then((data) => {
        setArticlesByTopic(data.data);

        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  else {
    return (
      <>
        <section>
          <h2>{topicQuery} articles:</h2>
          <SelectedArticlesByTopicCard articlesByTopic={articlesByTopic} />
        </section>
      </>
    );
  }
}
