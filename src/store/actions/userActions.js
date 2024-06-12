import { toast } from "react-toastify";
import { AxiosInstance, renewAxiosInstance } from "../../api/axiosInstance";

export const SET_LOGGED_IN = "SET_LOGGED_IN";
export const SET_LOGGED_OUT = "SET_LOGGED_OUT";

export const setUser = (user) => ({ type: SET_LOGGED_IN, payload: user });
export const clearUser = () => ({ type: SET_LOGGED_OUT });

export const userLogin = (formData, history) => {
  return (dispatch) => {
    AxiosInstance.post("/user/login", formData)
      .then((response) => {
        console.log(response);

        if (response.data && response.data.token) {
          dispatch(setUser(response.data));
          localStorage.setItem("token", response.data.token);

          renewAxiosInstance();

          toast.success("Welcome back!");
          history.push("/");
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);

        const errorMessage =
          error.response?.data?.message || "An unexpected error occurred";
        toast.error(`Error occurred: ${errorMessage}`);
      });
  };
};

export const userLogout = () => {
  return (dispatch) => {
    dispatch(clearUser());
    localStorage.removeItem("token");
    renewAxiosInstance();
    toast.success("Logged out successfully");

    console.log("token temizlendi");
  };
};

export const setToken = (token) => ({ type: "SET_TOKEN", payload: token });

export const clearToken = () => ({ type: "CLEAR_TOKEN" });
