import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <Box sx={{ display: "flex", mb: 10 }}>
        <AppBar
          component="nav"
          sx={{
            background: "#041E49",
          }}
        >
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/">
              <Typography
                variant="h6"
                component="a"
                sx={{
                  cursor: "pointer",
                  fontWeight: "700",
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                }}
              >
                BookMarks
              </Typography>
            </Link>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button sx={{ color: "#fff" }}></Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
