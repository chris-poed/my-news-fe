import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { getTopics } from "../utils/api";
import { useEffect, useState } from "react";

import { useContext } from "react";
import { UserContext, UserProvider } from "../contexts/UserContext";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const settings = ["Profile", "Switch User", "Logout"];

function NewsAppBar() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      const slugArr = topics.map((topic) => topic.slug);
      setTopics(slugArr);
    });
  }, []);
  const { user } = useContext(UserContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);

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

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MY NEWS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Drawer open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
              >
                <Link to={`/`} style={{ textDecoration: "none" }}>
                  <ListItemButton>
                    <ListItemText
                      primary="All articles"
                      sx={{ marginTop: 2, marginBottom: 2 }}
                    />
                  </ListItemButton>
                </Link>
                <Divider />
                <Typography
                  variant="subtitle1"
                  sx={{ margin: 2, marginBottom: 0 }}
                >
                  Topics
                </Typography>

                <List>
                  {topics.map((topic, index) => (
                    <ListItem key={index} disablePadding>
                      <Link to={`/${topic}`} style={{ textDecoration: "none" }}>
                        <ListItemButton>
                          <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText primary={topic} />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  ))}
                </List>
                <Divider />
                <Link to={`/about`} style={{ textDecoration: "none" }}>
                  <ListItemButton>
                    <ListItemText
                      primary="About this page"
                      sx={{ marginTop: 2, marginBottom: 2 }}
                    />
                  </ListItemButton>
                </Link>
                <Divider />
              </Box>
            </Drawer>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MY NEWS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to={`/`} style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  underline: "none",
                }}
              >
                All articles
              </Button>
            </Link>
            {topics.map((topic) => (
              <Link
                to={`/${topic}`}
                style={{ textDecoration: "none" }}
                key={topic}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {topic}
                </Button>
              </Link>
            ))}
            <Link to={`/about`} style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  underline: "none",
                }}
              >
                About this page
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.name} src={user.avatar_url} />
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NewsAppBar;
