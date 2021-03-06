import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLogin, children }) {
  if (!isLogin) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
}

export default ProtectedRoute;
