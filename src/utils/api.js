import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const newsApi = axios.create({
  baseURL: "https://my-news-2.onrender.com/api",
});

export const getArticles = (topic) => {
  return newsApi
    .get("/articles", {
      params: {
        topic: topic,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const getArticle = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`, {
      params: {
        article_id: article_id,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const getComments = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments`, {
      params: {
        article_id: article_id,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const postVote = (article_id, vote) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes: vote });
};

export const postComment = (article_id, body) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, body)
    .then((response) => {})
    .catch((error) => {});
};
