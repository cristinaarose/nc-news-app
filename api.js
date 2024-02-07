import axios from "axios";

export function getAllArticles() {
  return axios
    .get("https://news-app-n80t.onrender.com/api/articles")
    .then((res) => {
      return res;
    });
}
// getArtcielByID(article_id);

export function getCommentsByArticleId({ article_id }) {
  return axios
    .get(
      `https://news-app-n80t.onrender.com/api/articles/${article_id}/comments`
    )
    .then((res) => {
      return res;
    });
}

export function getArticleByArticleId({ article_id }) {
  return axios
    .get(`https://news-app-n80t.onrender.com/api/articles/${article_id}`)
    .then((res) => {
      return res;
    });
}

//"PATCH api/articles/article_id" patches votes
export function patchArticleVotes({ article_id }) {
  return axios
    .patch(`https://news-app-n80t.onrender.com/api/articles/${article_id}`, {
      inc_votes: 1,
    })
    .then((res) => {
      return res;
    });
}

export function patchArticleVotesDown({ article_id }) {
  return axios
    .patch(`https://news-app-n80t.onrender.com/api/articles/${article_id}`, {
      inc_votes: -1,
    })
    .then((res) => {
      return res;
    });
}
