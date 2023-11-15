import LoginForm from "./components/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/success"
          element={
            <h1 style={{ color: "whitesmoke", textAlign: "center" }}>
              You are now authorized, congrats!
            </h1>
          }
        ></Route>
        <Route
          path="/failure"
          element={
            <div style={{ color: "whitesmoke", textAlign: "center" }}>
              <h1>Seems you got something wrong!</h1>
              <h1>
                Try{" "}
                <b>
                  <i>example@gmail.com</i>
                </b>{" "}
                for email and{" "}
                <b>
                  <i>ILx^KwrhGpZf&IY5</i>
                </b>{" "}
                for password
              </h1>
            </div>
          }
        ></Route>
        <Route path="/*" element={<LoginForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
