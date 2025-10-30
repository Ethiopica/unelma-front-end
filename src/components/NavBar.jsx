import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router";

function NavBar({ mode, toggleTheme }) {
  const mobileMenuWidth = 240;
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Blog", path: "/blog" },
    { label: "About", path: "/about" },
    { label: "Contact us", path: "/contact" },
    { label: "Log in/Register", path: "/login" },
  ];
  const [mobile, setMobile] = useState(false);

  const handleNavToggle = () => setMobile((prev) => !prev);

  const mobileMenu = (
    <Box onClick={handleNavToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Unelma Platforms
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              to={item.path}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* App Bar */}
      <AppBar component="nav" position="fixed" color="inherit">
        <Toolbar>
          {/* logo */}
          <Box
            sx={{
              height: "3rem",
              p: 1,
              flexGrow: 1,
            }}
          >
            <img
              src="https://www.unelmaplatforms.com/assets/uploads/media-uploader/unelma-platforms-11670581545.jpg"
              alt="unelma-logo"
              style={{ height: "100%" }}
            />
          </Box>
          {/* Desktop Nav Items */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  textTransform: "none",
                }}
                component={Link}
                to={item.path}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open MobileMenu"
            edge="end"
            onClick={handleNavToggle}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MobileMenu */}
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobile}
          onClose={handleNavToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { md: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: mobileMenuWidth,
            },
          }}
        >
          {mobileMenu}
        </Drawer>
      </Box>
    </Box>
  );
}

export default NavBar;
