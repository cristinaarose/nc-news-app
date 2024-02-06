import { useState, useEffect } from "react";
import CommentList from "./CommentList";

import { getCommentsByArticleId } from "../../api";

export default function CommentManager({ article_id }) {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (comments && comments.comments.length === 0)
    return <p>Be the first to comment!</p>;

  if (isLoading) return <p>Loading...</p>;
  else {
    return <CommentList comments={comments} />;
  }
}
