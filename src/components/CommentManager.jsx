import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import { getCommentsByArticleId, postCommentByArticleId } from "../../api";
import { useContext } from "react";
import { UserContext } from "./UserProvider";

export default function CommentManager({ article_id }) {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState({
    author: "",
    body: "",
    votes: 0,
    created_at: "2020-01-26T18:23:00.000Z",
  });
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    getCommentsByArticleId({ article_id })
      .then((data) => {
        setComments(data.data);

        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
      });
  }, []);

  function handleChange(e, property) {
    setNewComment({
      ...newComment,
      [property]: e.target.value,
      ["author"]: loggedInUser.username,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setComments((currentComments) => {
      currentComments.comments.unshift(newComment);

      return currentComments;
    });
    if (newComment.body === "") {
      setIsEmpty(true);
    } else {
      postCommentByArticleId({ article_id }, newComment)
        .then(() => {
          setError(null);
        })
        .catch((error) => {
          setError(error);
        });
      setIsSuccess(true);
      newComment.body = "";
    }
  }

  if (comments && comments.comments.length === 0)
    return <p>Be the first to comment!</p>;

  if (isLoading) return <p>Loading...</p>;
  else {
    return (
      <>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label htmlFor="body">Post a comment!</label>
          <textarea
            type="text"
            value={newComment.body}
            onChange={(e) => handleChange(e, "body")}
          />
          {isEmpty === false ? <button type="submit">Submit!</button> : null}

          {isSuccess === true ? <p>Submitted✅</p> : null}
        </form>
        <CommentList comments={comments} newComment={newComment} />
      </>
    );
  }
}
