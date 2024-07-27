import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from "./AppRouter";
const App: React.FC = () => {
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  );
};

export default App;
