import { Flip, ToastContainer } from "react-toastify";
import Main from "./layouts/Main";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
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
