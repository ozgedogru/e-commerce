import { toast } from "react-toastify";
import { AxiosInstance } from "../../api/axiosInstance";

export const SET_USER = "SET_USER";

export const setUser = (user) => ({ type: SET_USER, payload: user });

export const userLogin = (formData, history) => {
  return (dispatch) => {
    AxiosInstance.post("/login", formData)
      .then((response) => {
        console.log(response.data);

        dispatch(setUser(response.data));
        localStorage.setItem("token", response.data.token);
        toast.success("Welcome back!");
        history.push("/");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Error occurred: " + error.response.data.message);
      });
  };
};
