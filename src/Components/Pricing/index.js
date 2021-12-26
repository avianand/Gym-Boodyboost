import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./index.scss";

const tiers = [
  {
    title: "1 Month",
    price: "1000",
    description: ["1 month gym membership"],
    buttonText: "Purchase Plan",
    buttonVariant: "contained",
  },
  {
    title: "3 Month",
    subheader: "Most popular",
    price: "2500",
    description: ["3 month gym membership"],
    buttonText: "Purchase Plan",
    buttonVariant: "contained",
  },
  {
    title: "6 Month",
    price: "4000",
    description: ["6 month gym membership"],
    buttonText: "Purchase Plan",
    buttonVariant: "contained",
  },
  {
    title: "12 Month",
    price: "7000",
    description: ["12 month gym membership"],
    buttonText: "Purchase Plan",
    buttonVariant: "contained",
  },
];

function PricingContent() {
  return (
    <React.Fragment className="pricing">
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          component="p"
        >
          Choose between monthly, quarterly and annual membership Plans
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="xl" component="main">
        <Grid container spacing={3} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} md={3}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "3 Month" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: "secondary.main",
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ₹{tier.price}
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
