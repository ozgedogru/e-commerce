import { AxiosInstance } from "../../api/axiosInstance";

export const SET_ROLES = "SET_ROLES";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setRoles = () => {
  return (dispatch) => {
    AxiosInstance.get("/roles")
      .then((res) => {
        dispatch({ type: SET_ROLES, payload: res.data });
      })
      .catch((error) => console.error("Error:", error));
  };
};

export const setCategories = () => {
  return (dispatch) => {
    AxiosInstance.get("/categories")
      .then((res) => {
        dispatch({
          type: SET_CATEGORIES,
          payload: res.data,
        });
        //console.log("categories ", res.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});
