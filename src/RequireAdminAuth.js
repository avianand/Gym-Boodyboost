import { getAuth } from "firebase/auth";
import React from "react";
import { Route, Navigate } from "react-router-dom";

const RequireAdminAuth = ({ path, children, redirectTo }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to={redirectTo} state={path} />;
  }
};

RequireAdminAuth.defaultProps = { redirect: "/admin/login" };

export default RequireAdminAuth;
