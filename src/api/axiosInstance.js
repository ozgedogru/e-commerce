import axios from "axios";

export const createAxiosInstance = () => {
  const token = localStorage.getItem("token");

  return token
    ? axios.create({
        baseURL: "http://localhost:8080/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    : axios.create({
        baseURL: "http://localhost:8080/",
        headers: {},
      });
};
export let AxiosInstance = createAxiosInstance();

export const renewAxiosInstance = () => {
  AxiosInstance = createAxiosInstance();
};

renewAxiosInstance();
