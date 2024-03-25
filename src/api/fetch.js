import * as ENVIRONMENT from "../config/globals";

const http = {
  METHODS: {
    POST: "post",
    GET: "get",
    PUT: "put",
    DELETE: "delete",
  },
};

const BASE_URL = ENVIRONMENT.API_URL;

const post = (url, body, headers = {}) => {
  return fetch(`${BASE_URL}${url}`, {
    method: http.METHODS.POST,
    headers: {
      "Content-type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  }).then(async (res) => {
    if (res.ok) {
      return Promise.resolve(res);
    }
    if (location.pathname !== "/Login" && res.status === 401) {
      localStorage.setItem("user", null);
      localStorage.clear();
      return (location = "/Login");
    } else if (location.pathname === "/Login") {
      const response = await res.json();
      return Promise.reject(response.message);
    }
    return Promise.reject(res);
  });
};

export default {
  post,
};
