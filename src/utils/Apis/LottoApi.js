import axios from "axios";

const BASE_URL = "http://cashkaching.com";

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

function playLotto(numbers, id, token) {
  console.log("i am clicked");
  console.log(token);
  const url = `${BASE_URL}/play-draw/${id}/${numbers}`;
  return axios({
    method: "post",
    url,
    headers: { Authorization: "Bearer " + token }
  })
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      console.log(error.response);
    });
}

export { UnlockLottery, playLotto, getLottoData };
