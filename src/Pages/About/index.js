import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Amenities from "./amenities";

const About = () => {
  return (
    <div className="about">
      <Container sx={{ pb: 6 }}>
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
            About us
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            component="p"
          >
            Some things about us and our team
          </Typography>
        </Container>
        <Box sx={{ pb: 4 }}>
          <Typography sx={{ pb: 1 }} variant="h6">
            Top Fitness Centre in Brajrajnagar <br />
          </Typography>
          <Typography>
            We believe fitness is a way of life. That’s why at our fitness
            centre we’ve got all the equipment, classes and motivation you need
            to break a sweat and transform your body. At Body Boost Fitness &
            Gym, our friendly trainers are always on hand to advise you on your
            fitness regime and suggest little tweaks to ensure that you’re
            getting the best results. Located in Brajrajnagar, we offer several
            classes a week, from yoga to boxing, as well as swimming lessons at
            our in-house pool. To see for yourself, give us a ring on
            7008426039.
          </Typography>
        </Box>
        <Box sx={{ pb: 4 }}>
          <Typography sx={{ pb: 1 }} variant="h6">
            Many choice classes <br />
          </Typography>
          <Typography>
            Our class timetable is the best in our local area, with tonnes of
            choices every single week. For the cardio fans, we’ve got HIIT and
            aerobics, as well as spin class in our dedicated studio. For those
            wanting to pump some iron, why not try out our weights class? It’s a
            great option for those who are new to lifting as you get
            comprehensive coaching through a range of routines. For those
            wanting to hone, tone and relax their minds, our holistic classes
            such as yoga and pilates are a great option.
          </Typography>
        </Box>
        <Box sx={{ pb: 4 }}>
          <Typography sx={{ pb: 1 }} variant="h6">
            Wide range of activities for all ages <br />
          </Typography>
          <Typography>
            Our range of activities in the evening and at weekends mean there's
            always an opportunity to relax, unwind, exercise and socialise at
            your local leisure centre. We offer activities for stressed-out
            parents, hard-working business people – even a few ways to blow off
            steam for anxious or grumpy teens! Whatever you're looking to do, we
            have a great selection of activities at great prices.
          </Typography>
        </Box>
        <Amenities />
      </Container>
    </div>
  );
};

export default About;
