import { Flip, ToastContainer } from "react-toastify";
import Main from "./layouts/Main";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { AxiosInstance, renewAxiosInstance } from "./api/axiosInstance";
import { clearUser, setUser } from "./store/actions/userActions";
import { useEffect } from "react";
import { setCategories, setRoles } from "./store/actions/globalActions";
import {
  fetchBestSellers,
  fetchProducts,
} from "./store/actions/productActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoles());
    dispatch(setCategories());
    dispatch(fetchProducts());
    dispatch(fetchBestSellers(null));

    //localde token bilgisi var mi?
    const checkToken = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const response = await AxiosInstance.get("/verify");
          dispatch(setUser(response.data));
          localStorage.setItem("token", response.data.token);
          renewAxiosInstance();
        } catch (error) {
          dispatch(clearUser());
          localStorage.removeItem("token");
          renewAxiosInstance();
        }
      }
    };
    checkToken();
  }, [dispatch]);

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
