import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import TodoList from "./components/TodoList/TodoList";
import NotFound from "./components/NotFound/NotFound";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
