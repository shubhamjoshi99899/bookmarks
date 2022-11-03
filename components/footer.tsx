import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          margin: "0 auto",
          left: 0,
          right: 0,
          textAlign: "center",
          height: "60px",
        }}
        elevation={5}
      >
        <Box sx={{ marginTop: "5px" }}>
          <Typography sx={{ color: "#262626", fontWeight: 600 }}>
            All rights reserved
          </Typography>
          <Typography sx={{ fontWeight: 600 }}>
            BookMarks &#169; 2022
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default Footer;
