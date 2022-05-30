import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/index";
import Home from "./components/Home/index";
import Blog from "./components/Blog/index";
import Fqa from "./components/Fqa/index";
import Dashboard from "./components/Dashboard/index";
import Store from "./components/Dashboard-page/Store";
import Addpost from "./components/Dashboard-page/Addpost";
import Editpost from "./components/Dashboard-page/Editpost";
import Deletepost from "./components/Dashboard-page/Deletepost";
import NotFound from "./components/Error";
import ContextAPI from "./context/index";
import ProtectedRoute from "./components/routes";

const App = () => {
  const { isLogin } = useContext(ContextAPI);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="fqa" element={<Fqa />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute isLogin={isLogin}>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="store" element={<Store />} />
            <Route path="addpost" element={<Addpost />} />
            <Route path="editpost" element={<Editpost />} />
            <Route path="deletepost" element={<Deletepost />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
