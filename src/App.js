import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Flip, ToastContainer } from "react-toastify";
import Main from "./layouts/Main";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Main />
        <ToastContainer
          position="top-right"
          theme="colored"
          autoClose={4000}
          transition={Flip}
        />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
