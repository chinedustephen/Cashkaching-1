import axios from "axios";

const BASE_URL = "http://cashkaching.com";

function handleAuth(promise) {
  promise
    .then(resp => {
      console.log(resp.data.success.token);
      if (resp.data.success.token) {
        localStorage.setItem("token", resp.data.success.token);
      }
    })
    .catch(error => {
      console.log("token error");
    });
  return promise;
}

// Email registration

function register(name, email, password, confirmPassword) {
  const url = `${BASE_URL}/email-register`;
  const promise = axios.post(url, {
    name,
    email,
    password,
    confirmPassword
  });
  handleAuth(promise);
  return promise;
}

// Facebook registration

function facebookregister(type, userData) {
  const url = `${BASE_URL}/`;
  const promise = axios
    .post(url + type, {
      userData
    })
    .then(resp => {
      console.log(resp);
      if (resp.data.success.token) {
        localStorage.setItem("token", resp.data.success.token);
        console.log("token stored");
      }
    })
    .catch(error => {
      console.log("token error");
    });
  console.log(promise);
  return promise;
}

const config = {
  headers: { "Content-Type": "application/json" }
};

// Email login

function login(email, password) {
  console.log("login clicked");
  const url = `${BASE_URL}/email-login`;
  const promise = axios.post(
    url,
    {
      email,
      password
    },
    config
  );
  console.log(promise);
  handleAuth(promise);
  return promise;
}

export { register, login, facebookregister };
