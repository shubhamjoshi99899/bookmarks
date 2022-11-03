import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { NextPage } from "next";
import { Router, useRouter } from "next/router";
import React from "react";
import BookForm from "../../components/create-and-edit-book-component/book-form";
import Footer from "../../components/footer";
import Header from "../../components/header";
import CustomInputField from "../../components/input-field";
import bookFormValidationSchema from "../../utils/bookFormValidationSchema";

interface Props {}

const Create: NextPage<Props> = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      id: Math.random(),
      date: "",
      title: "",
      tags: "",
      description: "",
    },
    validationSchema: bookFormValidationSchema,
    onSubmit: (values: any, { resetForm }) => {
      console.log(values);
      handleSubmit(values);
      resetForm({ values: "" });
    },
  });

  const handleSubmit = (values: any) => {
    localStorage.setItem("values", JSON.stringify(formik.values));
    axios
      .post("https://63627f5466f75177ea311eef.mockapi.io/bookmarks", values)
      .then(function (res: any) {
        console.log(res.success);
      })
      .catch(function (err: any) {
        console.log(err);
      });
    router.push("/book-listing");
  };

  return (
    <>
      <Header />
      <Stack
        sx={{
          height: "100vh",
        }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          marginBottom="20px"
          gutterBottom
          variant="h5"
          fontWeight="600"
          color="red"
        >
          Create a new BookMark
        </Typography>
        <BookForm formik={formik} />
      </Stack>
      <Footer />
    </>
  );
};

export default Create;
