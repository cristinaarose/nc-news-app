import TopicCard from "./TopicCard";

export default function TopicList({ topics }) {
  return (
    <>
      <h2> Topic list: </h2>
      <ul>{topics && topics.topics && <TopicCard topics={topics} />}</ul>
    </>
  );
}
