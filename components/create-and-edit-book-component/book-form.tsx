import { Box, Button, Grid, Paper } from "@mui/material";
import React from "react";
import DatePickerCustom from "../date-picker";
import CustomInputField from "../input-field";

interface Props {
  formik?: any;
}

const BookForm: React.FC<Props> = ({ formik }) => {
  return (
    <Box sx={{ mb: 10 }}>
      <form onSubmit={formik.handleSubmit}>
        <Paper
          elevation={5}
          sx={{
            textAlign: "center !important",
            padding: "50px",
            boxShadow: "1px solid rgba(0,0,0,0.7",
          }}
        >
          <Grid container marginBottom="30px">
            <Grid xs={6} sx={{ marginBottom: "30px" }}>
              <DatePickerCustom
                label="Date"
                formik={formik}
                inputFormat="dd-MM-yyyy"
                fieldName="date"
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
                defaultValue={formik.values.date}
                minDate={new Date()}
                sx={{ width: "80%", borderRadius: "12px", m: 0 }}
              />
            </Grid>
            <Grid xs={6} sx={{ marginBottom: "30px" }}>
              <CustomInputField
                placeholder="Add your bookmark title"
                label="Title"
                name="title"
                value={formik.values.title}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
                sx={{ width: "80%" }}
                formik={formik}
              />
            </Grid>
            <Grid xs={6} sx={{ marginBottom: "30px" }}>
              <CustomInputField
                placeholder="Add tags"
                label="Tags"
                name="tags"
                value={formik.values.tags}
                error={formik.touched.tags && Boolean(formik.errors.tags)}
                helperText={formik.touched.tags && formik.errors.tags}
                sx={{ width: "80%" }}
                formik={formik}
              />
            </Grid>
            <Grid xs={6} sx={{ marginBottom: "30px" }}>
              <CustomInputField
                placeholder="Add book Description"
                label="Description"
                name="description"
                value={formik.values.description}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.errors.description && formik.errors.description
                }
                sx={{ width: "80%" }}
                formik={formik}
                multiline={true}
                rows={3}
              />
            </Grid>
          </Grid>
          <Button
            sx={{ width: "200px", fontSize: "20px", background: "secondary" }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Paper>
      </form>
    </Box>
  );
};

export default BookForm;
