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

export { getRecentWinnerData, getTestimonialsData, getStatsData };
