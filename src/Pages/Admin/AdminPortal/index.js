import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const AdminPortal = () => {
  const auth = getAuth();
  const navigate = useNavigate();

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
    <div className="adminPortal">
      <Paper elevation={2} className="adminPortal__paper">
        <Typography variant="h3">Admin portal</Typography>
        <span>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/customers/add")}
          >
            Add customer
          </Button>
        </span>
        <span>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/customers/view")}
          >
            View Customers
          </Button>
        </span>

        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleSignOut}
        >
          Sign Out
        </Button>
      </Paper>
    </div>
  );
};

export default AdminPortal;
