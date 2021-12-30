import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import gymlogo from "../../assets/img/gym-logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.scss";
import { ExitToApp, Person, ShoppingCart } from "@mui/icons-material";
import { getAuth, signOut } from "firebase/auth";

const pages = ["About", "Pricing", "Gallery"];
const settings = ["Admin Portal"];
const AdminOptions = ["Admin Portal"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const auth = getAuth();
  const user = auth.currentUser;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div className="header">
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link to="/">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  <Avatar
                    style={{
                      backgroundColor: "white",
                      height: "5rem",
                      width: "5rem",
                    }}
                    alt="Bodyboost Gym logo"
                    src={gymlogo}
                    variant="square"
                  />
                </Typography>
              </Link>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                {/* menu in mobile */}
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => {
                    if (page === "About") {
                      return (
                        <Link
                          to="about"
                          style={{
                            textDecoration: "none",
                            color: "black",
                          }}
                          key={page}
                        >
                          <Button
                            key={page}
                            sx={[
                              {
                                my: 2,
                                mx: 4,
                                color: "primary.main",
                                display: "block",
                              },
                              {
                                "&:hover": {
                                  color: "secondary.main",
                                  cursor: "pointer",
                                },
                              },
                            ]}
                          >
                            {" "}
                            {page}
                          </Button>
                        </Link>
                      );
                    } else {
                      return (
                        <a
                          style={{
                            textDecoration: "none",
                            color: "black",
                          }}
                          href={`#${page}`}
                          key={page}
                        >
                          <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={[
                              {
                                my: 2,
                                mx: 4,
                                color: "primary.main",
                                display: "block",
                              },
                              {
                                "&:hover": {
                                  color: "secondary.main",
                                  cursor: "pointer",
                                },
                              },
                            ]}
                          >
                            {" "}
                            {page}
                          </Button>
                        </a>
                      );
                    }
                  })}
                </Menu>
              </Box>
              {/* mobile nav */}
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                <Link to="/">
                  <Avatar
                    style={{
                      backgroundColor: "white",
                      height: "5rem",
                      width: "5rem",
                    }}
                    alt="Bodyboost Gym logo"
                    src={gymlogo}
                    variant="square"
                  />
                </Link>
              </Typography>
              {/* menu desktop */}
              <Box
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              ></Box>

              <Box sx={{ flexGrow: 0, display: { md: "flex" } }}>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => {
                    if (page === "About") {
                      return (
                        <Link
                          to="about"
                          style={{
                            textDecoration: "none",
                            color: "white",
                          }}
                          key={page}
                        >
                          <Button
                            key={page}
                            sx={[
                              {
                                my: 2,
                                mx: 4,
                                color: "white",
                                display: "block",
                              },
                              {
                                "&:hover": {
                                  color: "secondary.main",
                                  cursor: "pointer",
                                },
                              },
                            ]}
                          >
                            {" "}
                            {page}
                          </Button>
                        </Link>
                      );
                    } else {
                      return (
                        <a
                          style={{
                            textDecoration: "none",
                            color: "white",
                          }}
                          href={`#${page}`}
                          key={page}
                        >
                          <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={[
                              {
                                my: 2,
                                mx: 4,
                                color: "white",
                                display: "block",
                              },
                              {
                                "&:hover": {
                                  color: "secondary.main",
                                  cursor: "pointer",
                                },
                              },
                            ]}
                          >
                            {" "}
                            {page}
                          </Button>
                        </a>
                      );
                    }
                  })}
                </Box>

                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Person style={{ color: "white" }} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {user ? (
                    <>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Link
                          to="/admin"
                          textAlign="center"
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          Admin Portal
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <span
                          onClick={handleSignOut}
                          textAlign="center"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            display: "flex",
                            alignContent: "center",
                            justifyContent: "center",
                          }}
                        >
                          Log Out <ExitToApp />
                        </span>
                        <IconButton
                          textAlign="center"
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        ></IconButton>
                      </MenuItem>
                    </>
                  ) : (
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link
                        to="/admin"
                        textAlign="center"
                        style={{
                          color: "black",
                          textDecoration: "none",
                        }}
                      >
                        Login
                      </Link>
                    </MenuItem>
                  )}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  );
};

export default Header;
