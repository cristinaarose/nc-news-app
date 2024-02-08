export default function NewComment({ newComment }) {
  console.log("NEW COMMENT IN new comment", newComment);
  return (
    <>
      <h2>Comment: {newComment.author} </h2>
      <p>{newComment.body}</p>
    </>
  );
}
