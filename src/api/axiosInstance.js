import axios from "axios";

const BASE_URL = "http://localhost:8080/";

export const createAxiosInstance = () => {
  const token = localStorage.getItem("token");

  return token
    ? axios.create({
        baseURL: BASE_URL,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    : axios.create({
        baseURL: BASE_URL,
        headers: {},
      });
};
export let AxiosInstance = createAxiosInstance();

export const renewAxiosInstance = () => {
  AxiosInstance = createAxiosInstance();
};

renewAxiosInstance();
