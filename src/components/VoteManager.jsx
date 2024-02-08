import { patchArticleVotes } from "../../api";
import { patchArticleVotesDown } from "../../api";

export default function VoteManager({
  selectedArticle,
  article_id,
  setVotes,
  votes,
  setError,
}) {
  function handleUpClick() {
    setVotes(votes + 1);
    patchArticleVotes({ article_id }, 1)
      .then(() => {
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setVotes(selectedArticle.article.votes - 1);
      });
  }

  function handleDownClick() {
    setVotes(votes - 1);
    patchArticleVotesDown({ article_id }, -1)
      .then(() => {
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setVotes(selectedArticle.article.votes - 1);
      });
  }

  return (
    <>
      <h3>Votes: {votes}</h3>

      <button onClick={handleUpClick}>vote👍</button>
      <button onClick={handleDownClick}>vote👎</button>
    </>
  );
}
