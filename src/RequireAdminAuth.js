import { getAuth } from "firebase/auth";
import React from "react";
import { Route, Navigate } from "react-router-dom";

const RequireAdminAuth = ({ children, redirectTo }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  console.log({ user });
  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to={redirectTo} />;
  }
};

RequireAdminAuth.defaultProps = { redirect: "/admin/login" };

export default RequireAdminAuth;
