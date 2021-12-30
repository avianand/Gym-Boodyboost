import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Grid } from "@mui/material";
import "./index.scss";
import {
  Email,
  FitnessCenter,
  LocationOn,
  Map,
  Phone,
  RunCircle,
} from "@mui/icons-material";

function Copyright() {
  return (
    <Typography sx={{ pb: 2 }} variant="body2" color="background.default">
      {"Copyright © "}
      Bodyboost gym & Fitness center | {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      className="footer"
      component="footer"
      sx={{
        flexGrow: 1,
        bgcolor: "primary.main",
        color: "background.default",
        textAlign: "center",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={0}
        sx={{
          p: "2rem",
        }}
      >
        <Grid item md={3} xs={12}>
          <Typography
            sx={[
              { p: "2rem" },
              {
                "&:hover": {
                  color: "secondary.main",
                },
              },
            ]}
            variant="body1"
          >
            <FitnessCenter sx={{ color: "secondary.main" }} />
            <Typography variant="h6">
              {" "}
              Bodyboost Gym <br /> & <br />
              Fitness Center
            </Typography>
            <br />
            <Link
              sx={[
                { color: "background.default" },
                {
                  "&:hover": {
                    color: "secondary.main",
                    textDecoration: "none",
                  },
                },
              ]}
              className="links"
              href="mailto:raja99patel@gmail.com"
            >
              <Email sx={{ color: "secondary.main" }} />
              <Typography sx={{ mx: "0.4rem" }}>
                raja99patel@gmail.com
              </Typography>
            </Link>
            <br />
            <Link
              sx={[
                { color: "background.default" },
                {
                  "&:hover": {
                    color: "secondary.main",
                    textDecoration: "none",
                  },
                },
              ]}
              className="links"
              href="tel:7008426039"
            >
              <Phone sx={{ color: "secondary.main" }} />{" "}
              <Typography sx={{ mx: "0.4rem" }}>
                +91-70084 26039
                <br /> (Click to call)
              </Typography>
            </Link>
          </Typography>
        </Grid>
        <Grid item md={3} xs={12}>
          <Link
            sx={[
              { p: "2rem" },
              {
                "&:hover": {
                  color: "secondary.main",
                },
              },
            ]}
            className="address"
            variant="body1"
            href="https://goo.gl/maps/ouFCAVv7soxtJp4A8"
            target="_blank"
          >
            <Typography variant="body1">
              <LocationOn sx={{ color: "secondary.main" }} />
              <br />
              Body Boost Fitness & Gym, Gandhi Chowk, Brajrajnagar, Jharsuguda -
              768216, Odisha
              <br />
              <Map sx={{ color: "secondary.main" }} />
              <br /> (Click to open maps)
            </Typography>
          </Link>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.9821874971644!2d83.92096101539379!3d21.858222764318796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20df180d4d1889%3A0x4d7d37b040cb3cd7!2sBody%20Boost%20Fitness%20%26%20Gym!5e0!3m2!1sen!2sin!4v1638676604161!5m2!1sen!2sin"
            width="200"
            height="200"
            loading="lazy"
          ></iframe>
        </Grid>
        <Grid item md={3} xs={12}>
          <Link
            sx={[
              { p: "2rem" },
              {
                "&:hover": {
                  color: "secondary.main",
                },
              },
            ]}
            className="address"
            href="https://goo.gl/maps/uvfkYuoi38LxEX5S8"
            target="_blank"
          >
            <Typography variant="body1">
              <LocationOn sx={{ color: "secondary.main" }} />
              <br /> Body Boost Fitness & Gym,Shivam complex, Railway Fatak, in
              front of Belpahar, Belpahar, Odisha, 768218
              <br />
              <Map sx={{ color: "secondary.main" }} />
              <br /> (Click to open maps )
            </Typography>
          </Link>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.928767445426!2d83.85098661539337!3d21.821682965610858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20df9cc0a1a321%3A0xfe380d22a3c01961!2sBody%20Boost%20Fitness%20%26%20Gym!5e0!3m2!1sen!2sin!4v1638677113223!5m2!1sen!2sin"
            width="200"
            height="200"
            loading="lazy"
          ></iframe>
        </Grid>
      </Grid>

      <Copyright />
    </Box>
  );
}
