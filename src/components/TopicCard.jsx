import { Link } from "react-router-dom";
import "../../styling/TopicCard.css";

export default function TopicCard({ topics }) {
  return (
    <div className="list">
      {topics.topics &&
        topics.topics.map((topic, i) => {
          return (
            <li key={i} className="centre">
              <Link to={`/articles?topic=${topic.slug}`}>
                <h3>{topic.slug}</h3>
              </Link>
              <p>Description: {topic.description}</p>
            </li>
          );
        })}
    </div>
  );
}
