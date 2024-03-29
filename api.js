import axios from "axios";

export function getAllArticles() {
  return axios
    .get("https://news-app-n80t.onrender.com/api/articles")
    .then((res) => {
      return res;
    });
}

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

export function postCommentByArticleId({ article_id }, newComment) {
  return axios
    .post(
      `https://news-app-n80t.onrender.com/api/articles/${article_id}/comments`,
      newComment
    )
    .then((res) => {
      return res;
    });
}

export function getAllUsers() {
  return axios
    .get(`https://news-app-n80t.onrender.com/api/users`)
    .then((res) => {
      return res;
    });
}

export function deleteComment(comment_id) {
  return axios
    .delete(`https://news-app-n80t.onrender.com/api/comments/${comment_id}`)
    .then((res) => {
      return res;
    });
}
export function getArticlesByTopic({ topicQuery }) {
  return axios
    .get(`https://news-app-n80t.onrender.com/api/articles?topic=${topicQuery}`)
    .then((res) => {
      return res;
    });
}

export function getAllTopics() {
  return axios
    .get("https://news-app-n80t.onrender.com/api/topics")
    .then((res) => {
      return res;
    });
}
