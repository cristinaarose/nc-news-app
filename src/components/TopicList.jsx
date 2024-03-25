import TopicCard from "./TopicCard";

export default function TopicList({ topics }) {
  return (
    <>
      <h2> Topic list: </h2>
      <ul className="centre-topic">
        {topics && topics.topics && <TopicCard topics={topics} />}
      </ul>
    </>
  );
}
