import CommentCard from "./CommentCard";
import NewComment from "./NewComment";

export default function CommentList({ comments, newComment }) {
  return (
    <>
      <h2> Comments list: </h2>
      <ul>
        {comments && comments.comments && <CommentCard comments={comments} />}
        {/* <NewComment newComment={newComment} /> */}
      </ul>
    </>
  );
}
