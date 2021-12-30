import React from "react";
import { Atm, LocalParking, TwoWheeler, Wifi } from "@mui/icons-material";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
const Amenities = () => {
  return (
    <Box sx={{ mb: 6, textAlign: "center" }}>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6, textAlign: "center" }}
      >
        <Button variant="contained" color="secondary">
          <Typography
            component="h6"
            variant="h5"
            align="center"
            color="text.primary"
          >
            Amenities
          </Typography>
        </Button>
      </Container>
      <Grid container sx={{ textAlign: "center" }}>
        <Grid item xs={6} md={3}>
          <Wifi fontSize="large" />
          <Typography>Wifi</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <LocalParking fontSize="large" />
          <Typography>Parking</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Atm fontSize="large" />
          <Typography>ATM</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <TwoWheeler fontSize="large" />
          <Typography>Bike Parking</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Amenities;
