import fetch from "./fetch";

export const loginUser = (user) => {
  const body = {
    email: user.email,
    password: user.password,
  };
  return fetch
    .post("api/login", body)
    .then((resp) => resp.text())
    .then((data) => {
      const parsedData = JSON.parse(data);
      if (parsedData.token) {
        localStorage.setItem("user", JSON.stringify({ ...parsedData }));
        return parsedData.data;
      } else {
        console.log("Login Error");
      }
    })
    .catch((error) => {
      return { error: true, message: error.message };
    });
};
