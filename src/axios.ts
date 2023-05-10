import axios from "axios";

const myAxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users/1/",
  headers: { "X-Custom-Header": "BSS-AZIENDA=*" },
});

myAxiosInstance.interceptors.response.use(
  function (response) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(response);
      }, 5000);
    });
  },
  function (error) {
    return new Promise(function (reject) {
      setTimeout(function () {
        reject(error);
      }, 5000);
    });
  }
);
myAxiosInstance.interceptors.response.use(function (response) {
  const isFail = Math.random() > 0.5;
  if (isFail) {
    return response;
  }
  return Promise.reject("Ramdon Error");
});
export default myAxiosInstance;
