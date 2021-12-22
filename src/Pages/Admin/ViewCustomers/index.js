import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import "./index.scss";

const ViewCustomers = () => {
  const auth = getAuth();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="viewCustomers">
      <Paper elevation={2} className="viewCustomers__paper">
        <Typography variant="h3">View Customers</Typography>
      </Paper>
    </div>
  );
};

export default ViewCustomers;
