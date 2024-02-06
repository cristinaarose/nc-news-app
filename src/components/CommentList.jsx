import CommentCard from "./CommentCard";

export default function CommentList({ comments }) {
  return (
    <>
      <h2> Comments list: </h2>
      <ul>
        {comments && comments.comments && <CommentCard comments={comments} />}
      </ul>
    </>
  );
}
