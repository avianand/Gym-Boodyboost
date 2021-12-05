import { Box } from "@mui/system";
import React from "react";
import "./index.scss";
import Carousel from "../../Components/Carousel";
import Gallery from "../../Components/Gallery";
import Pricing from "../../Components/Pricing";

const Home = () => {
  return (
    <Box
      className="home"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <section id="About" className="carousel">
        <Carousel />
      </section>
      <section id="Pricing" className="pricing">
        <Pricing />
      </section>

      <section id="Gallery" className="gallery">
        <Gallery />
      </section>
    </Box>
  );
};

export default Home;
