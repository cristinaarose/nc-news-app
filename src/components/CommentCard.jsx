import { useContext } from "react";
import { UserContext } from "./UserProvider";
import { deleteComment } from "../../api";
import { useState } from "react";

export default function CommentCard({ comments }) {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [isDeleted, setIsDeleted] = useState(false);
  const [deletedCommentId, setDeletedCommentId] = useState();
  const [error, setError] = useState(null);

  function handleDeleteOnClick(comment_id) {
    deleteComment(comment_id)
      .then(() => {
        setIsDeleted(true);
        setError(null);
      })
      .catch((error) => {
        setError(error);
      });
  }

  return (
    <div>
      {comments.comments &&
        comments.comments.map((comment, i) => {
          const date = new Date(`${comment.created_at}`);

          return (
            <li key={i} className="border">
              <h3
                className={
                  isDeleted && comment.comment_id === deletedCommentId
                    ? "deleted"
                    : ""
                }
              >
                Comment: {comment.author}
              </h3>
              <p
                className={
                  isDeleted && comment.comment_id === deletedCommentId
                    ? "deleted"
                    : ""
                }
              >
                {comment.body}
              </p>
              <span
                className={
                  isDeleted && comment.comment_id === deletedCommentId
                    ? "deleted"
                    : ""
                }
              >
                Votes: {comment.votes} Created at: {String(date)}
              </span>
              <p>
                {" "}
                {loggedInUser.username === comment.author ? (
                  <button
                    onClick={() => {
                      setDeletedCommentId(comment.comment_id);
                      handleDeleteOnClick(comment.comment_id);
                    }}
                  >
                    Delete comment
                  </button>
                ) : null}
              </p>
            </li>
          );
        })}
    </div>
  );
}
