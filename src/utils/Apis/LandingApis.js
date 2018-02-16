import axios from "axios";

const BASE_URL = "http://cashkaching.com";

function getRecentWinnerData() {
  const url = `${BASE_URL}/recent-winner`;
  return axios
    .get(url)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error.response);
    });
}

function getLottoData() {
  const url = `${BASE_URL}/lottery`;
  return axios
    .get(url)
    .then(response => {
      console.log(response.data.success);
      return response.data.success;
    })
    .catch(error => {
      console.log(error.response);
    });
}

function getTestimonialsData() {
  const url = `${BASE_URL}/testimonials/3`;
  return axios
    .get(url)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.response);
    });
}

function getStatsData() {
  const url = `${BASE_URL}/stats`;
  return axios
    .get(url)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.response);
    });
}

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

function register(name, email, password, confirmPassword) {
  const promise = axios.post("http://cashkaching.com/email-register", {
    name,
    email,
    password,
    confirmPassword
  });
  handleAuth(promise);
  return promise;
}

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

export {
  getRecentWinnerData,
  getTestimonialsData,
  getStatsData,
  register,
  login,
  getLottoData,
  facebookregister
};
