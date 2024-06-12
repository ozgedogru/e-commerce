import { Flip, ToastContainer } from "react-toastify";
import Main from "./layouts/Main";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "./store/actions/userActions";
import { useEffect } from "react";
import { setCategories, setRoles } from "./store/actions/globalActions";
import { fetchBestSellers } from "./store/actions/productActions";
import { AxiosInstance, renewAxiosInstance } from "./api/axiosInstance";

function App() {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(setRoles());
    dispatch(setCategories());
    dispatch(fetchBestSellers(null));

    //localde token bilgisi var mi?
    const checkTokenValidity = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const response = await AxiosInstance.get("/verify");
          dispatch(setUser(response.data));

          renewAxiosInstance();
        } catch (error) {
          dispatch(clearUser());
          localStorage.removeItem("token");
          renewAxiosInstance();
        }
      }
    };
    checkTokenValidity();
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <Main />
      <ToastContainer
        position="top-right"
        theme="colored"
        autoClose={4000}
        transition={Flip}
      />
    </>
  );
}

export default App;
