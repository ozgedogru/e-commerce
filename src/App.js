import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Flip, ToastContainer } from "react-toastify";
import Main from "./layouts/Main";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
        <ToastContainer
          position="top-right"
          theme="colored"
          autoClose={4000}
          transition={Flip}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
