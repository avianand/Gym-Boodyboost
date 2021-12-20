import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import itemData from "./imageData.js";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./index.scss";

const GalleryFunction = () => {
  const [photoIndex, setphotoIndex] = React.useState(0);
  const [isOpen, setisOpen] = React.useState(false);
  return (
    <React.Fragment>
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
          Gallery
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          component="p"
        >
          Some photos of our gym
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="xl" component="main">
        <ImageList cols={3}>
          {itemData.map((item, index) => (
            <ImageListItem key={item.img}>
              <img
                onClick={() => {
                  setphotoIndex(index);
                  setisOpen(true);
                }}
                src={`${item.img}?w=600&h=600&fit=crop&auto=format`}
                srcSet={`${item.img}?w=600&h=600&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      {isOpen && (
        <Lightbox
          mainSrc={itemData[photoIndex].img}
          nextSrc={itemData[(photoIndex + 1) % itemData.length].img}
          prevSrc={
            itemData[(photoIndex + itemData.length - 1) % itemData.length].img
          }
          onCloseRequest={() => setisOpen(false)}
          onMovePrevRequest={() =>
            setphotoIndex((photoIndex + itemData.length - 1) % itemData.length)
          }
          onMoveNextRequest={() =>
            setphotoIndex((photoIndex + 1) % itemData.length)
          }
        />
      )}
    </React.Fragment>
  );
};

export default function Gallery() {
  return <GalleryFunction />;
}
