import { Link } from "react-router-dom";
export default function TopicCard({ topics }) {
  return (
    <div>
      {topics.topics &&
        topics.topics.map((topic, i) => {
          return (
            <li key={i} className="centre">
              <h3>Topic {i + 1}</h3>

              <Link to={`/articles?topic=${topic.slug}`}>
                <p>Topic: {topic.slug}</p>
              </Link>
              <p>Description: {topic.description}</p>
            </li>
          );
        })}
    </div>
  );
}
