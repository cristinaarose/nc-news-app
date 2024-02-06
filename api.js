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
