import { Link } from "react-router-dom";
import "../../styling/TopicCard.css";

export default function TopicCard({ topics }) {
  return (
    <div className="list">
      {topics.topics &&
        topics.topics.map((topic, i) => {
          return (
            <>
              <div className="flex-container-topic">
                <div>
                  <Link to={`/articles?topic=${topic.slug}`}>
                    <h3 className="heading">{topic.slug}</h3>
                  </Link>
                </div>
                <section>
                  <p>Description: {topic.description}</p>
                </section>
              </div>
            </>
          );
        })}
    </div>
  );
}
