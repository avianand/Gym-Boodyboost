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
import gymlogo from "../../assets/img/gym-logo.svg";
import Home from "../../Pages/Home/Index";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.scss";
import { ShoppingCart } from "@mui/icons-material";

const pages = ["About", "Pricing", "Gallery"];
const settings = ["About"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <a
                        style={{
                          textDecoration: "none",
                        }}
                        href={`#${page}`}
                      >
                        <Typography color="text.primary" textAlign="center">
                          {page}
                        </Typography>
                      </a>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              {/* mobile nav */}
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
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
                        <>
                          <a
                            style={{
                              textDecoration: "none",
                              color: "white",
                            }}
                            href={`#${page}`}
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
                        </>
                      );
                    }
                  })}
                </Box>

                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <ShoppingCart style={{ color: "white" }} />
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
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
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
