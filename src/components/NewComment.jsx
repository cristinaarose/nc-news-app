export default function NewComment({ newComment }) {
  return (
    <>
      <h2>Comment: {newComment.author} </h2>
      <p>{newComment.body}</p>
    </>
  );
}
