import { Button } from "@mui/material";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import "./index.scss";

const AdminPortal = () => {
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
    <div className="adminPortal">
      Admin portal
      <Button
        variant="contained"
        color="secondary"
        //onClick={() => handleSignOut}
      >
        Add new customer
      </Button>
      <Button
        variant="contained"
        color="secondary"
        //onClick={() => handleSignOut}
      >
        View Customers
      </Button>
      <br />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleSignOut}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default AdminPortal;
