export default function CommentCard({ comments }) {
  return (
    <div>
      {comments.comments &&
        comments.comments.map((comment, i) => {
          const date = new Date(`${comment.created_at}`);
          return (
            <li key={i}>
              <h3>Comment: {comment.author}</h3>
              <p>{comment.body}</p>
              <span>
                Votes: {comment.votes} Created at: {String(date)}
              </span>
            </li>
          );
        })}
    </div>
  );
}
