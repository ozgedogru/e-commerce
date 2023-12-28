import { toast } from "react-toastify";
import { AxiosInstance } from "../../api/axiosInstance";

export const SET_LOGGED_IN = "SET_LOGGED_IN";
export const SET_LOGGED_OUT = "SET_LOGGED_OUT";

export const setUser = (user) => ({ type: SET_LOGGED_IN, payload: user });
export const clearUser = () => ({ type: SET_LOGGED_OUT });

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

export const userLogout = () => {
  return (dispatch) => {
    dispatch(clearUser());
    localStorage.removeItem("token");
    console.log("token temizlendi");
  };
};
