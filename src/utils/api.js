import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const newsApi = axios.create({
  baseURL: "https://my-news-2.onrender.com/api",
});

export const getArticles = (topic, sort) => {
  return newsApi
    .get("/articles", {
      params: {
        topic: topic,
        sort_by: sort,
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
  return newsApi.post(`/articles/${article_id}/comments`, body);
};

export const getTopics = () => {
  return newsApi.get(`/topics`).then((response) => {
    return response.data;
  });
};
