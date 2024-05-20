import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { users, currentUserId } = useSelector((store) => {
    return store.user;
  });

  const currentUser = users.find((user) => {
    return user.userId === currentUserId;
  });

  if (!currentUser.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
