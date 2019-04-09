import axios from "axios";
import * as aux from "../aux-funcs";
import { navigate } from "@reach/router";

const request = axios.create({
  baseURL: "https://e1p-nc-news.herokuapp.com/api"
});

export const getArticles = params => {
  return request
    .get("/articles", { params })
    .then(({ data }) => {
      return data;
    })
    .catch(err => navigate("/ErrorPage", { replace: true, state: err }));
};

export const getArticleById = id => {
  return request
    .get(`/articles/${id}`)
    .then(({ data }) => {
      return data;
    })
    .catch(({ response }) => {
      console.log(response);
      navigate("/ErrorPage", { replace: false, reload: false, state: { msg: "Error!!!" } });
    });
};

export const getCommentsByArticleId = id => {
  return request
    .get(`/articles/${id}/comments`)
    .then(({ data }) => {
      return data;
    })
    .catch(err => {
      console.log(err);
      // navigate("/ErrorPage", { replace: true, state: err });
    });
};

export const postNewArticle = article => {
  article.topic = aux.makeLowerCase(article.topic);
  console.log("Topic to lowercase", article);
  return request
    .post("/articles", article)
    .then(({ data }) => data)
    .catch(err => console.log("Error from axios >>> ", err.response));
};

export const deleteArticle = id => {
  return request
    .delete(`/articles/${id}`)
    .then(({ data }) => data)
    .catch(err => console.log("Error from axios >>> ", err.response));
};

export const postNewComment = (id, comment) => {
  return request
    .post(`/articles/${id}/comments`, comment)
    .then(({ data }) => data)
    .catch(err => console.log("Error from axios >>> ", err.response));
};

export const deleteComment = id => {
  return request
    .delete(`/comments/${id}`)
    .then(res => res)
    .catch(err => console.log("Error from axios >>> ", err.response));
};

export const getSingleUser = username => {
  return request
    .get(`/users/${username}`)
    .then(({ data }) => {
      return data;
    })
    .catch(err => navigate("/ErrorPage", { replace: true, state: err }));
};

export const getTopics = () => {
  return request
    .get("/topics")
    .then(({ data }) => {
      return data;
    })
    .catch(err => navigate("/ErrorPage", { replace: true, state: err }));
};

export const incrementVote = (id, vote) => {
  return request
    .patch(`/articles/${id}`, vote)
    .then(({ data }) => {
      return data;
    })
    .catch(err => navigate("/ErrorPage", { replace: true, state: err }));
};
