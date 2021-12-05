import React from "react";
import { Route, Navigate } from "react-router-dom";
import { checkAuthorization, checkAdmin } from "./helpers";
import ErrorBoundary from "../components/ErrorComponent/admin";

const RequireAdminAuth = ({ children, redirectTo }) => {
  if (checkAuthorization() === true && checkAdmin() === true) {
    return <ErrorBoundary>{children}</ErrorBoundary>;
  } else {
    return <Navigate to={redirectTo} />;
  }
};

RequireAdminAuth.defaultProps = { redirect: "/admin/login" };

export default RequireAdminAuth;
