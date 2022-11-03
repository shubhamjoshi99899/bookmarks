import {
  Box,
  InputLabel,
  Stack,
  TextField,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useEffect, useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import FormFieldLabels from "./form-field-label";

interface Props {
  formik: any;
  fieldName: any;
  error?: any;
  helperText?: any;
  label?: any;
  disabled?: any;
  defaultValue?: any;
  maxDate?: any;
  minDate?: any;
  inputFormat?: any;
  openTo?: any;
  sx?: any;
}
const DatePickerCustom: React.FC<Props> = ({
  formik,
  fieldName,
  error,
  helperText,
  label,
  openTo,
  disabled,
  defaultValue,
  maxDate,
  inputFormat,
  minDate,
  sx,
}) => {
  const [dateValue, setDateValue] = useState<any>("");

  const theme = useTheme();

  useEffect(() => {
    if (defaultValue) {
      formik.setFieldValue(fieldName, defaultValue);
      setDateValue(defaultValue);
    }
  }, [defaultValue]);
  return (
    <Stack direction="column">
      <FormFieldLabels>{label}</FormFieldLabels>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          value={dateValue}
          onChange={(newValue: any) => {
            formik.setFieldValue(fieldName, newValue);
            setDateValue(newValue);
          }}
          showToolbar={false}
          inputFormat={inputFormat ? inputFormat : "yyyy/MM/dd"}
          disabled={disabled}
          maxDate={maxDate}
          minDate={minDate}
          renderInput={(params: any) => (
            <TextField
              {...params}
              name={fieldName}
              id={fieldName}
              fullWidth
              // size="small"
              error={error}
              disabled={disabled}
              helperText={helperText}
              onInput={(event: any) => {
                event.target.value = "";
              }}
              sx={sx}
            />
          )}
        />
      </LocalizationProvider>
    </Stack>
  );
};

export default DatePickerCustom;
