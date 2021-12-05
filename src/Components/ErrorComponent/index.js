import { Typography } from "@mui/material";
import Buttons from "../Button";
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  navigate = useNavigate();
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      setTimeout(() => {
        mavigate("/");
      }, 4000);

      return (
        <>
          <Header />
          <div className="container text-center">
            <div className="column ">
              <div className="row-sm-12 my-2 text-center">
                <Typography variant="h5">Some error occured</Typography>
              </div>
              <div className="row-sm-12  my-2 text-center">
                <Typography variant="h6">Please wait !</Typography>
              </div>
              <div className="row-sm-12  my-2 text-center">
                <Typography variant="h7">
                  Redirecting you to homepage....
                </Typography>
              </div>
              <br />
              <div className="row-sm-12">
                <Buttons size="large">
                  <Link to="/">Go to home</Link>
                </Buttons>
              </div>
            </div>
          </div>

          <Footer />
        </>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
