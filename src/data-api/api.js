import axios from "axios";

const request = axios.create({
  baseURL: "https://e1p-nc-news.herokuapp.com/api"
});

export const getArticles = params => {
  return request
    .get("/articles", { params })
    .then(({ data }) => {
      return data;
    })
    .catch(err => console.log("Error from axios >>> ", err));
};

export const getArticleById = id => {
  return request
    .get(`/articles/${id}`)
    .then(({ data }) => {
      return data;
    })
    .catch(err => console.log("Error from axios >>> ", err));
};

export const getCommentsByArticleId = id => {
  return request
    .get(`/articles/${id}/comments`)
    .then(({ data }) => {
      return data;
    })
    .catch(err => console.log("Error from axios >>> ", err));
};

export const postNewArticle = article => {
  return request
    .post("/articles", article)
    .then(({ data }) => data)
    .catch(err => console.log("Error from axios >>> ", err.response));
};

export const deleteArticle = id => {
  return request
    .delete(`/articles/${id}`)
    .then(res => res)
    .catch(err => console.log("Error from axios >>> ", err.response));
};

export const postComment = (id, comment) => {
  return request
    .post(`/articles/${id}/comments`, comment)
    .then(res => res)
    .catch(err => console.log("Error from axios >>> ", err.response));
};

export const deleteComment = id => {
  return request
    .delete(`/comments/${id}`)
    .then(res => res)
    .catch(err => console.log("Error from axios >>> ", err.response));
};

export const getUsers = () => {
  return request
    .get(`/users`)
    .then(({ data }) => {
      return data;
    })
    .catch(err => console.log("Error from axios >>> ", err));
};

export const getTopics = () => {
  return request
    .get("/topics")
    .then(({ data }) => {
      return data;
    })
    .catch(err => console.log("Error from axios >>> ", err));
};

export const incrementVote = (id, vote) => {
  return request
    .patch(`/articles/${id}`, vote)
    .then(({ data }) => {
      return data;
    })
    .catch(err => console.log("Error from axios >>> ", err));
};
