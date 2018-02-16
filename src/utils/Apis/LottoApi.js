import axios from "axios";

const BASE_URL = "http://cashkaching.com";

function getHeader(token) {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer-${token}`
    }
  };
}

function UnlockLottery(token) {
  const url = `${BASE_URL}/unlock-lottery`;
  return axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error.response);
    });
}

export { UnlockLottery };
