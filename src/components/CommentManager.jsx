import { useState, useEffect } from "react";
import CommentList from "./CommentList";

export default function CommentManager({ article_id }) {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    fetch(
      `https://news-app-n80t.onrender.com/api/articles/${article_id}/comments`
    )
      .then((data) => {
        return data.json();
      })
      .then((body) => {
        setComments(body);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) return <p>Loading....</p>;
  else {
    return <CommentList comments={comments} />;
  }
}
