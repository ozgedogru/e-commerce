import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const ProtectedPage = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  return isLoggedIn ? <>{children}</> : <Redirect to="/login" />;
};

export default ProtectedPage;
