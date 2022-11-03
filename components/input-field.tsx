import { Stack, TextField } from "@mui/material";
import React from "react";
import FormFieldLabels from "./form-field-label";

interface Props {
  id?: any;
  label?: string;
  variant?: any;
  required?: any;
  placeholder: string;
  value: any;
  formik?: any;
  error?: any;
  name: any;
  multiline?: any;
  rows?: any;
  helperText?: any;
  sx?: any;
  type?: any;
}

const CustomInputField: React.FC<Props> = ({
  id,
  label,
  variant,
  required,
  placeholder,
  value,
  name,
  formik,
  error,
  sx,
  multiline,
  rows,
  helperText,
  type,
}) => {
  return (
    <>
      <Stack direction="column">
        <FormFieldLabels>{label}</FormFieldLabels>
        <TextField
          InputProps={{}}
          id={id}
          variant={variant}
          fullWidth
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={formik.handleChange}
          error={error}
          name={name}
          rows={rows}
          multiline={multiline}
          helperText={helperText}
          sx={sx}
          type={type ? type : "text"}
        />
      </Stack>
    </>
  );
};

export default CustomInputField;
