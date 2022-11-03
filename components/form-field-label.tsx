import { Box, InputLabel } from "@mui/material";
import React from "react";

const FormFieldLabels = (props: any) => {
  return (
    <>
      <Box>
        <InputLabel
          sx={{
            marginBottom: "8px",
            fontWeight: "600",
            fontSize: "0.75rem",
            lineHeight: "16px",
            textAlign: "left",
          }}
        >
          {props.children}
        </InputLabel>
      </Box>
    </>
  );
};

export default FormFieldLabels;
