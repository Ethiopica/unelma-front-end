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

function NavBar({ mode, toggleTheme }) {
  const mobileMenuWidth = 240;
  const navItems = [
    { label: "Home", path: "#" },
    { label: "Products", path: "/products" },
    { label: "Blog", path: "/blog" },
    { label: "About", path: "/about" },
    { label: "Contact us", path: "/contact" },
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
            <ListItemButton sx={{ textAlign: "center" }} href={item.path}>
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
      <AppBar component="nav" position="fixed" color="white">
        <Toolbar>
          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open MobileMenu"
            edge="start"
            onClick={handleNavToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Unelma logo
          </Typography>

          {/* Desktop Nav Items */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{ color: (theme) => theme.palette.text.primary }}
                href={item.path}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* MobileMenu */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobile}
          onClose={handleNavToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
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
