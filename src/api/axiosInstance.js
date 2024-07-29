import axios from "axios";

const BASE_URL =
  "https://191b-2001-4c4e-2494-d000-9c78-6753-1c5a-73ef.ngrok-free.app";

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
