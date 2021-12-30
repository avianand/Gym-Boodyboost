import {
  Button,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import "./index.scss";

const AddCustomers = () => {
  const [gymPlan, setGymPlan] = useState(1);
  const [gender, setGender] = useState("male");
  const auth = getAuth();

  const handleGymPlanChange = (event) => {
    setGymPlan(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="addCustomers">
      <Paper elevation={2} className="addCustomers__paper">
        <Typography variant="h3">Add Customer</Typography>
        <form className="form">
          <TextField
            name="customerName"
            className="field"
            fullWidth
            label="Name"
            variant="outlined"
          />
          <TextField
            type="email"
            className="field"
            name="customerEmail"
            fullWidth
            label="Email"
            variant="outlined"
          />
          <TextField
            type="number"
            className="field"
            name="customerAge"
            fullWidth
            label="Age"
            variant="outlined"
          />
          <span>
            <InputLabel id="genderLabel">Gender</InputLabel>
            <Select
              labelId="gender"
              id="gender"
              fullWidth
              value={gender}
              label="Gender"
              onChange={handleGenderChange}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </span>
          <TextField
            type="number"
            className="field"
            label="Phone no."
            fullWidth
            variant="outlined"
            name="customerPhone"
          />
          <TextField
            type="text"
            className="field"
            label="Address"
            fullWidth
            multiline
            maxRows={4}
            variant="outlined"
            name="customerAddress"
          />
          <span>
            <InputLabel id="planLabel">Select gym plan</InputLabel>
            <Select
              labelId="gymplan"
              id="gymplan"
              fullWidth
              value={gymPlan}
              label="Gym Plan"
              onChange={handleGymPlanChange}
            >
              <MenuItem value={1}>1 Month</MenuItem>
              <MenuItem value={3}>3 Month</MenuItem>
              <MenuItem value={6}>6 Month</MenuItem>
              <MenuItem value={12}>12 Month</MenuItem>
            </Select>
          </span>
          <Button
            type="submit"
            fullWidth
            className="button"
            variant="contained"
            color="secondary"
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default AddCustomers;
