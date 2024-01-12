import React, { useContext } from "react";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/auth/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./proctectedRoute/ProtectedRoute";
import CreateData from "./component/auth/CreateData";
import AllBatch from "./component/AllBatch";
import { GlobalApi } from "./api/ContextApi";
import Carosel from "./component/Carosel";
import UpdateData from "./component/auth/UpdateData";

const App = () => {
  let isLogin = sessionStorage.getItem("isLogged");
  // console.log(isLogin);
  let user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div>
      <BrowserRouter>
        {user ? <Header /> : <></>}

        <Routes>
          {isLogin ? (
            <Route path="/" element={<Carosel />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
          <Route
            path="/createdata"
            element={
              <ProtectedRoute>
                <CreateData />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/updatedata"
            element={
              <ProtectedRoute>
                <UpdateData />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/allbatch"
            element={
              <ProtectedRoute>
                <AllBatch />{" "}
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
